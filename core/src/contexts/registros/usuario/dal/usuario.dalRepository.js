"use strict";

class UsuarioDalRepository {
	constructor({ db }) {
		this._db = db;
		this._entity = "Usuario";
	}

	async getByName(nombreUsuario) {
		const usuarioFinded = await this._db[this._entity].findOne({
			where: { nombreUsuario: nombreUsuario },
		});
		return usuarioFinded;
	}

	async getAll() {
		const usuariosList = await this._db[this._entity].findAll();
		return usuariosList;
	}

	async get(id) {
		const usuarioFinded = await this._db[this._entity].findOne({
			where: { id },
		});
		return usuarioFinded;
	}
// FIXME realy necesary desglose user attr.??
	async create(usuario) {
		const { nombre, apellido, nombreUsuario, hash, RolID } = usuario;
		const usuarioCreated = await this._db[this._entity].create({
			nombre,
			apellido,
			nombreUsuario,
			hash,
			RolID,
		});
		return usuarioCreated;
	}

	async update(id, entity) {
		return await this._db[this._entity].update(entity, { where: { id } });
	}

	async delete(id) {
		return await this._db[this._entity].destroy({ where: { id } });
	}
}

module.exports = UsuarioDalRepository;
