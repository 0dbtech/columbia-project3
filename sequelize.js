const Sequelize = require('sequelize');
const DogModel = require('./models/Dog');
const ShelterModel = require('./models/Shelter');
const TagModel = require('./models/tag');
const UserModel = require('./models/user');

const sequelize = new Sequelize('Dogs', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const Dog = DogModel(sequelize, Sequelize);

// ShelterTag will be our way of tracking relationship between Shelter and Tag models
// each Shelter can have multiple tags and each Tag can have multiple Shelters
const ShelterTag = sequelize.define('Shelter_tag', {});
const Shelter = ShelterModel(sequelize, Sequelize);
const Tag = TagModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);

Shelter.belongsToMany(Tag, { through: ShelterTag, unique: false });
Tag.belongsToMany(Shelter, { through: ShelterTag, unique: false });
Shelter.belongsTo(Dog);

sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  });

module.exports = {
  Dog,
  Shelter,
  Tag,
  User
};
