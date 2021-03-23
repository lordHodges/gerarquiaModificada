"use strict";
const { Router } = require("express");
module.exports = function ({ LoginController }) {
	const router = Router();

	router.post("/login", LoginController.login.bind(LoginController));

	return router;
};
