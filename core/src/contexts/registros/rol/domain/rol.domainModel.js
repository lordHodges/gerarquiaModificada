"use strict";
class RolDomainModel {
	constructor(id = null, nombre, createdAt, updatedAt) {
		this.id = id;
		this.nombre = nombre;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
}
module.exports = RolDomainModel;
