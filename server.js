const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const { Dog, Shelter, Tag } = require('./sequelize');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

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

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

