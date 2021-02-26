"use strict";

class UserController {
	static async createUser(req, res, next) {
		try {
			const payload = "a";
		} catch (error) {
			res.status(400);
			next(error);
		}
	}
}

module.exports = UserController;
