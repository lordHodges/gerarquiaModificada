"use strict";
const RolDomainModel = require("../../domain/rol.domainModel");
class CrearRol {
	constructor({ RolDomainRepository }) {
		this._domainRepository = RolDomainRepository;
	}
	async exe(nombre) {
		const rol = new RolDomainModel(null, nombre);
		return await this._domainRepository.create(rol);
	}
}
module.exports = CrearRol;
