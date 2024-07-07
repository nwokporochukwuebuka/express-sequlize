const { db } = require("../models");

const createUser = async (body) => await db.users.create(body);

module.exports = {
  createUser,
};
