"use strict";

const express = require("express");
const routers = express.Router();

const { user: UserController } = require("../../modules");
const Authentication = require("../../utils/middleware/Auth");
const schemaValidation = require("../../utils/middleware/SchemaValidator");

routers.route("/auth/signup").post( schemaValidation.user(), schemaValidation.validate, UserController.signup);
routers.route("/auth/signin").post(UserController.signin);
routers.route("/profile").get(Authentication, UserController.profile);

module.exports = routers;
