let db  =require('./sequelize');

const controls = {
     getDogs() {
       return console.log(db.Dog);
    },
    getShelters() {
       return console.log(db.Shelter);
    }
}

module.exports = {
controls
};