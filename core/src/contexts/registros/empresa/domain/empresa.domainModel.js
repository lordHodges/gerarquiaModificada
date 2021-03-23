const Sucursal = require("./sucursal");

class EmpresaDomainModel {
	constructor(
		id,
		razonSocial,
		rut,
		descripcion,
		giro,
		actividad,
		direccion,
		createdAt,
		updatedAt
	) {
		this.id = id;
		this.razonSocial = razonSocial;
		this.rut = rut;
		this.descripcion = descripcion;
		this.giro = giro;
		this.actividad = actividad;
		this.direccion = direccion;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

	//atributo solo existe en dominio
	//Sucursals = [Sucursal];
}
module.exports = EmpresaDomainModel;
