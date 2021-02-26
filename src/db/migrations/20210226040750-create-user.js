"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("users", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			full_name: {
				type: Sequelize.STRING,
			},
			username: {
				type: Sequelize.STRING,
			},
			email: {
				type: Sequelize.STRING,
			},
			phone_number: {
				type: Sequelize.INTEGER,
			},
			delete_at: {
				type: Sequelize.STRING,
			},
			delete_status: {
				type: Sequelize.INTEGER,
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	// eslint-disable-next-line no-unused-vars
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("users");
	},
};
