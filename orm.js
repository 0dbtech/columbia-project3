const Sequelize = require("sequelize");

const sequelize = new Sequelize('Dogs', 'root', 'root', {
    dialect: 'mysql',
    port:8889
  })

var Dog = sequelize.define('Dog', {
  //Id: Sequelize.INTEGER ,
  Breed: Sequelize.STRING,
  Name: Sequelize.STRING,
  Images: Sequelize.STRING,
  BOOKED_TIMESTAMP:Sequelize.DATE,
  CURRENT_TIMESTAMP:Sequelize.DATE,
  
});

sequelize.sync().then(function() {
  return Dog.create({
    Name: 'Woof'
  });
}).then(function(Dog) {
  console.log(Dog.get({
    plain: true
  }));
});
