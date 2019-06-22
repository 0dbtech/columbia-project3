module.exports = (sequelize, type) => {
  return sequelize.define('shelter', {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Name: type.STRING,
      Phone: type.INTEGER,
      ZipCode: type.INTEGER,
      CURRENT_TIMESTAMP: type.DATE,
  })
}
