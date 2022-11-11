const timeRoutes = require("express").Router();

const time = require("../../controllers/time");

timeRoutes.get("/now", time.timeNow);
timeRoutes.get("/timezones", time.listTimezones);

module.exports = timeRoutes;
