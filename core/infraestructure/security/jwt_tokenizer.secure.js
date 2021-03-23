"use strict";

const jwt = require("jsonwebtoken");

const { SECRET } = require("../config/env");

const JWT_SECRET_KEY = SECRET;

class JWTTokenizer {
	async generate(payload) {
		return await jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: "8h" });
	}

	async decode(payload) {
		return await jwt.verify(payload, JWT_SECRET_KEY);
	}
}
module.exports = JWTTokenizer;
