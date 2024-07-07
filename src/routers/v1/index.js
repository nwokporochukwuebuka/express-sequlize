const express = require("express");

const userRouter = require("./user.route");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/",
    route: userRouter,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
