const Sequelize = require("sequelize");
const config = require("../config/config");

const db = {};

const sequelizeInstance = new Sequelize(
  config.sequelize.database,
  config.sequelize.user,
  config.sequelize.password,
  {
    host: config.sequelize.host,
    dialect: config.sequelize.dialect,
    pool: {
      min: 0,
      max: 100,
      acquire: 5000,
      idle: 1000,
    },
  }
);

db.sequelize = sequelizeInstance;
db.Sequelize = Sequelize;

db.users = require("./user.model")(sequelizeInstance, Sequelize);

module.exports = { db };
