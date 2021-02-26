"use strict";

const express = require("express");
const routers = express.Router();

const { user: UserController } = require("../../modules");

routers.route("/auth/signup").post(UserController.signup);

module.exports = routers;