const router = require("express").Router();

const validate = require("../../middlewares/validate");
const userController = require("../../controllers/user.controller");
const userValidation = require("../../validations/user.validation");

router.post(
  "/",
  validate(userValidation.createUser),
  userController.createUser
);

module.exports = router;
