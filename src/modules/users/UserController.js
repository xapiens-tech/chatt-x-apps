"use strict";

const baseResponse = require("../../utils/helper/Response");
const { user } = require("../../db/models");

class UserController {
	static async signup(req, res, next) {
		let { fullName, email, username, phoneNumber, password } = req.body;
		try {
			const payload = await user.create({
				full_name: fullName,
				username: username,
				email: email,
                phone_number: phoneNumber,
                password: password,
				created_at: Date.now(),
				updated_at: Date.now(),
			});
			baseResponse({ message: "user created", data: payload })(res);
		} catch (error) {
			res.status(400);
			next(error);
		}
	}

	static async sigin(req, res, next) {
        let { username, email, password } = req.
		try {
		} catch (error) {
			res.status(403);
			next(error);
		}
	}
}

module.exports = UserController;
