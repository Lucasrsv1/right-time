const v1 = require("express").Router();

const generalRoutes = require("./general");
const timeRoutes = require("./time");

v1.use("/", generalRoutes);
v1.use("/time", timeRoutes);

module.exports = v1;
