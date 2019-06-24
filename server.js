const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const { Dog, Shelter, Tag, User } = require('./sequelize');
const passport = require('./passport');
const session = require("express-session");
const cors = require('cors');
const bodyParser = require('body-parser');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:3000'}));
app.use(session({ secret: "running elephant has broken waffle mountain", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

// create a dog
app.post('/api/dogs', (req, res) => {
    Dog.create(req.body)
        .then(dog => res.json(dog))
});
// get all dogs
app.get('/api/dogs', (req, res) => {
    Dog.findAll().then(dogs => res.json(dogs))
});

// create a Shelter post
app.post('/api/shelters', (req, res) => {
    const body = req.body
    // either find a tag with name or create a new one
    const tags = body.tags.map(tag => Tag.findOrCreate({ where: { name: tag.name }, defaults: { name: tag.name }})
                                         .spread((tag, created) => tag))
    User.findById(body.dogId)
        .then(() => Shelter.create(body))
        .then(shelter => Promise.all(tags).then(storedTags => shelter.addTags(storedTags)).then(() => shelter))
        .then(shelter => Shelter.findOne({ where: {id: shelter.id}, include: [Dog, Tag]}))
        .then(shelterWithAssociations => res.json(shelterWithAssociations))
        .catch(err => res.status(400).json({ err: `Dog with id = [${body.dogId}] doesn\'t exist.`}))
});

// find shelters belonging to one user or all shelters
app.get('/api/shelters/:dogId?', (req, res) => {
    let query;
    if(req.params.userId) {
        query = Shelter.findAll({ include: [
            { model: Dog, where: { id: req.params.dogId } },
            { model: Tag }
        ]})
    } else {
        query = Shelter.findAll({ include: [Tag, User]})
    }
    return query.then(shelters => res.json(shelters))
});

// find shelters by tag
app.get('/api/shelters/:tag/tag', (req, res) => {
    Shelter.findAll({
        include: [
            { model: Tag, where: { name: req.params.tag } }
        ]
    })
    .then(shelters => res.json(shelters))
});

app.post("/api/login", function(req, res) {
    passport.authenticate("local", function(err, user, info) {
        if (err) {
            res.status(404).json(err);
            return;
        }

        if (user) {
            res.status(200);
            res.json({
                user: user,
                success: true
            });
            console.log(user);
        } else {
            console.log('wrong');
            res.status(401).json(info);
        }
    })(req, res);
});
//
// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error
app.post("/api/signup", function(req, res) {
    User.create({
        email: req.body.email,
        password: req.body.password
    }).then(function() {
        res.redirect(307, "/api/login");
    }).catch(function(err) {
        console.log(err);
        res.json(err);
        // res.status(422).json(err.errors[0].message);
    });
});
//
// Route for logging user out
app.get("/api/logout", function(req, res) {
    req.logout();
    res.json({success: true});
});
//
// Route for getting some data about our user to be used client side
app.get("/api/user_data", function(req, res) {
    if (!req.user) {
        // The user is not logged in, send back an empty object
        res.json({});
    }
    else {
        // Otherwise send back the user's email and id
        // Sending back a password, even a hashed password, isn't a good idea
        res.json({
            email: req.user.email,
            id: req.user.id
        });
    }
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

