module.exports = (sequelize, dataType) => {
  const user = sequelize.define("user", {
    firstName: {
      type: dataType.STRING,
    },
    lastName: {
      type: dataType.STRING,
    },
    email: {
      type: dataType.STRING,
    },
  });
  return user;
};
