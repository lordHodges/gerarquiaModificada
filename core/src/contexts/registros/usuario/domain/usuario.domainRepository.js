"use strict";
const UsuarioDomainModel = require("../domain/usuario.domainModel");

class UsuarioDomainRepository {
	constructor({ UsuarioDalRepository }) {
		this._dalRepository = UsuarioDalRepository;
	}
	async create(usuario) {
		const usuarioCreated = await this._dalRepository.create(usuario);
		if (usuarioCreated) {
			usuarioCreated.save();

			return new UsuarioDomainModel(
				usuarioCreated.id,
				usuarioCreated.nombre,
				usuarioCreated.apellido,
				usuarioCreated.nombreUsuario,
				usuarioCreated.hash,
				usuarioCreated.RolID
			);
		}
		return { message: "elemento no creado" };
	}

	async update(domainEntity) {
		const usuario = await this._dalRepository.get(domainEntity.id);
		if (usuario) {
			usuario.save();
			delete usuario.createdAt;
			delete usuario.updatedAt;
			await this._dalRepository.update(usuario.id, usuario);
			return { message: "elemento modificado" };
		}
		return { message: "elemento no encontrado" };
	}

	async delete(entityId) {
		const usuario = await this._dalRepository.get(entityId);
		if (usuario) {
			await this._dalRepository.delete(usuairo.id);
			return { message: "elemento eliminado" };
		}
		return { message: "elemento no encontrado" };
	}

	async get(entityId) {
		const usuario = await this._dalRepository.get(entityId);
		if (usuario) {
			usuario.save();
			return new UsuarioDomainModel(
				usuario.id,
				usuario.nombre,
				usuario.apellido,
				usuario.nombreUsuario,
				usuario.hash,
				usuario.RolID
			);
		}
		return { message: "elemento no encontrado" };
	}

	async getByName(entityName) {
		const usuario = await this._dalRepository.getByName(entityName);
		if (usuario) {
			usuario.save();
			return new UsuarioDomainModel(
				usuario.id,
				usuario.nombre,
				usuario.apellido,
				usuario.nombreUsuario,
				usuario.hash,
				usuario.RolID
			);
		}
		return { message: "elemento no encontrado" };
	}

	async getAll() {
		const usuarios = await this._dalRepository.getAll();

		return usuarios.map((usuario) => {
			return new UsuarioDomainModel(
				usuario.id,
				usuario.nombre,
				usuario.apellido,
				usuario.nombreUsuario,
				(usuario.hash = null),
				usuario.RolID,
				usuario.createdAt,
				usuario.updatedAt
			);
		});
	}
}
module.exports = UsuarioDomainRepository;
