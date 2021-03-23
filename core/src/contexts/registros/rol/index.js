module.exports = {
	// !casos de uso
	CrearRol: require("./aplication/useCase/crearRol"),
	ObtenerRoles: require("./aplication/useCase/obtenerRoles"),
	EliminarRol: require("./aplication/useCase/eliminarRol"),

	// !domain
	RolDalRepository: require("./dal/rol.DalRepository"),
	RolDomainRepository: require("./domain/rol.domainRepository"),
	// ! interfaces
	RolController: require("./interface/controllers/rol.controller"),
	RolRoutes: require("./interface/routes/rol.routes"),
};
