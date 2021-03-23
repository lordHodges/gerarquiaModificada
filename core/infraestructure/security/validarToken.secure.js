"use strict";
const JWTTokenizer = require("./jwt_tokenizer.secure");
class ValidarToken {
	constructor({}) {}
	async exe(req, res, next) {
		const token = req.headers["authorization"];
		if (!token) {
			return res
				.status(401)
				.send({ auth: false, message: "No posee token de seguridad" });
		}
		try {
			const _tokenizer = new JWTTokenizer();
			const decoded = await _tokenizer.decode(token);
			req.body.id = decoded.id;
			next();
		} catch (error) {
			console.log(error);
			return res
				.status(401)
				.send({ auth: false, message: "No token no corresponde" });
		}
	}
}
module.exports = ValidarToken;
