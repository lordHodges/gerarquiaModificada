"use strict";
const RolDomainModel = require("../domain/rol.domainModel");

class RolDomainRepository {
	constructor({ RolDalRepository }) {
		this._dalRepository = RolDalRepository;
	}
	async create(usuario) {
		const rolCreated = await this._dalRepository.create(usuario);

		rolCreated.save();

		return new RolDomainModel(rolCreated.id, rolCreated.nombre);
	}

	update(domainEntity) {
		//throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
	}

	async delete(entityId) {
		const rol = await this._dalRepository.get(entityId);

		if (rol) {
			rol.save();
			await this._dalRepository.delete(rol.id);
			return { message: "elemento eliminado" };
		}

		return { message: "elemento no encontrado" };
	}

	async get(entityId) {
		const rol = await this._dalRepository.get(entityId);
		if (rol) {
			rol.save();
			return new RolDomainModel(rol.id, rol.nombre);
		}
		return { message: "elemento no encontrado" };
	}

	async getAll() {
		const rols = await this._dalRepository.getAll();

		return rols.map((rol) => {
			return new RolDomainModel(rol.id, rol.nombre);
		});
	}
}
module.exports = RolDomainRepository;
