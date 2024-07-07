const express = require("express");
const compression = require("compression");
const cors = require("cors");

const { db } = require("./models");
const routes = require("./routers/v1");
const httpStatus = require("http-status");
const ApiError = require("./utils/ApiError");
const { errorConverter, errorHandler } = require("./middlewares/error");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(compression());

app.use(cors());
app.options("*", cors());

// V1: Your application routers
app.use("/v1", routes);

app.get("/", (req, res) => {
  res.send("Hello there 👋");
});

app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

// initialize db
// db.sequelize.sync();

module.exports = app;
