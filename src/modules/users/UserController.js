"use strict";

const baseResponse = require("../../utils/helper/Response");
const { user } = require("../../db/models");

class UserController {
	static async createUser(req, res, next) {
		try {
			const payload = await user.create({
				full_name: req.body.fullName,
				username: req.body.username,
				email: req.body.email,
				phone_number: req.body.phoneNumber,
				created_at: Date.now(),
				updated_at: Date.now()
			});
			baseResponse({ message: "user created", data: payload })(res);
		} catch (error) {
			res.status(400);
			next(error);
		}
	}
}

module.exports = UserController;
