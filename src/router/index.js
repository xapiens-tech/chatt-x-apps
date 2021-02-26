"use strict";

const express = require("express");
const routers = express.Router();

const user = require("./users/UserRouter");

// base router
routers.use("/users", user);

module.exports = routers;
