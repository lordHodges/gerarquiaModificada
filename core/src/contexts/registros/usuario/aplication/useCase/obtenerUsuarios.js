"use strict";

class ObtenerUsuarios {
	constructor({ UsuarioDomainRepository }) {
		this._repository = UsuarioDomainRepository;
	}
	async exe() {
		const list = await this._repository.getAll();
		return list;
	}
}
module.exports = ObtenerUsuarios;
