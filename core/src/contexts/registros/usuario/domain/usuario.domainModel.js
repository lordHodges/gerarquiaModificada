"use strict";
class UsuarioDomainModel {
	constructor(
		id = null,
		nombre,
		apellido,
		nombreUsuario,
		hash,
		RolID,
		createdAt,
		updatedAt
	) {
		this.id = id;
		this.nombre = nombre;
		this.apellido = apellido;
		this.nombreUsuario = nombreUsuario;
		this.hash = hash;
		this.RolID = RolID;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
}
module.exports = UsuarioDomainModel;
