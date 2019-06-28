module.exports = (sequelize, type) => {
    return sequelize.define('dog', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        BREED: type.STRING,
        GENDER: type.STRING,
        IMAGE:type.STRING,
        CURRENT_TIMESTAMP: type.DATE,
        BOOKED_TIMESTAMP: type.DATE,

    })
}
