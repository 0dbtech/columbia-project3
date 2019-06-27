// Requiring necessary npm middleware packages 
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var passport = require("./config/passport");
// Setting up port
var PORT = process.env.PORT || 8080;
var db = require("./models");
// Creating express app and configuring middleware 
//needed to read through our public folder
var app = express();
app.use(bodyParser.urlencoded({ extended: false })); //For body parser
app.use(bodyParser.json());
app.use(express.static("public"));

app.use(session({ secret: "keyboard car", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
//
//we are doing a GET to test if our server is working fine
// app.get('/', function(req, res) {    
//        res.send('Welcome');
// });
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
//
//this will listen to and show all activities on our terminal to 
//let us know what is happening in our app
// app.listen(PORT, function() {
//     console.log("http://localhost:8080");
//   });

// db.sequelize.sync().then(function() {
//     app.listen(PORT, function() {
//       console.log("==> 🌎  Listening on port. Visit http://localhost:8080 in your browser.", PORT, PORT);
//     });
//   });

  db.sequelize.sync({force:true}).then(function(){
    console.log("Nice Database looks fine!")
  
    app.listen(PORT,function(){
      console.log(`App listening on ${PORT}`)
    });
  
  }).catch(function(err){
    console.log(err, "Something went wrong with the Database Update!")
  });