"use strict";
const UsuarioDomainModel = require("../../domain/usuario.domainModel");
//

class CrearUsuario {
	constructor({ UsuarioDomainRepository, UsuarioDomainService }) {
		this._repository = UsuarioDomainRepository;
		this._service = UsuarioDomainService;
	}
	async exe(
		nombre,
		apellido,
		nombreUsuario,
		_hash,
		RolID
		//{ UsuarioDomainRepository, UsuarioDomainService }
	) {
		const hash = await this._service.encriptarPass(_hash);
		const usuario = new UsuarioDomainModel(
			null,
			nombre,
			apellido,
			nombreUsuario,
			hash,
			RolID
		);
		const usuarioCreated = await this._repository.create(usuario);
		return usuarioCreated;
	}
}
module.exports = CrearUsuario;
