const Sequelize = require('sequelize');
const DogModel = require('./models/dog');
const ShelterModel = require('./models/Shelter');

const sequelize = new Sequelize('Dogs', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 100,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const Dog = DogModel(sequelize, Sequelize);
const Shelter = ShelterModel(sequelize, Sequelize);

dbSync = () => {
  sequelize.sync({ force: true })
    .then(() => {
      console.log(`Database & tables created!`)
    });
}


module.exports = {
  Dog,
  Shelter,
  dbSync
};
