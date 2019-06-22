module.exports = (sequelize, type) => {
    return sequelize.define('dog', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        Name: type.STRING,
        Breed: type.STRING,
        Gender: type.STRING,
        Image:type.STRING,
        CURRENT_TIMESTAMP: type.DATE,
        BOOKED_TIMESTAMP: type.DATE,

    })
}
