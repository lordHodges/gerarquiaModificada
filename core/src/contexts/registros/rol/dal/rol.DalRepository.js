"use strict";

class RolDalRepository {
	constructor({ db }) {
		this._db = db;
		this._entity = "Rol";
	}

	getAll() {
		const rolList = this._db[this._entity].findAll();
		return rolList;
	}

	async get(id) {
		const rolFinded = await this._db[this._entity].findOne({
			where: { id },
		});
		return rolFinded;
	}

	async create(entity) {
		const { nombre } = entity;
		const rolCreated = await this._db[this._entity].create({
			nombre,
		});
		return rolCreated;
	}

	async update(id, entity) {
		delete entity.createdAt;
		delete entity.updatedAt;
		return await this._db[this._entity].update(entity, { where: { id } });
	}

	async delete(id) {
		return await this._db[this._entity].destroy({ where: { id } });
	}
}

module.exports = RolDalRepository;
