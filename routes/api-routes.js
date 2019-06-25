// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
//
module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  /*
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/members");
  });
  */
 app.post('/api/login', function(req, res, next) {
   passport.authenticate('local', function(err, user, info) {
     console.log('USET', user)
    if (err) { return next(err); }
    // if (!user) { return res.redirect('/login'); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      res.json(user)
      // return res.redirect('/users/' + user.username);
    });
   })(req, res, next);
 })
//
  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function(user) {
      res.json(user);
      // res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });
//
  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
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
};