"use strict";
const bcrypt = require("bcryptjs");
const UsuarioDomainModel = require("../../domain/usuario.domainModel");
class Login {
	constructor({ UsuarioDomainRepository, AccessToken }) {
		this._repository = UsuarioDomainRepository;
		this._access = AccessToken;
	}
	async exe(nombreUsuario, hash) {
		console.log(nombreUsuario);
		const usuarioFinded = await this._repository.getByName(nombreUsuario);

		const verifyReq = await bcrypt.compare(hash, usuarioFinded.hash);
		if (!verifyReq) {
			return { message: "algo anda mal, intente otra combinacion!" };
		}

		const usuario = new UsuarioDomainModel(
			usuarioFinded.id,
			usuarioFinded.nombre,
			usuarioFinded.apellido,
			usuarioFinded.nombreUsuario,
			null,
			usuarioFinded.RolID,
			null,
			null
		);
		const token = await this._access.generate({ id: usuario.id });
		return { usuario, token };
	}
}
module.exports = Login;
