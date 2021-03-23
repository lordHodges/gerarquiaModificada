module.exports = {
	// !casos de uso

	CrearUsuario: require("./aplication/useCase/crearUsuario"),

	ObtenerUsuarios: require("./aplication/useCase/obtenerUsuarios"),
	Login: require("./aplication/useCase/login"),

	// !clases
	UsuarioDalRepository: require("./dal/usuario.dalRepository"),
	UsuarioDomainRepository: require("./domain/usuario.domainRepository"),
	UsuarioDomainService: require("./domain/usuario.domainService"),
	UsuarioController: require("./interface/controllers/usuario.controller"),
	LoginController: require("./interface/controllers/login.controller"),
	AccessToken: require("./aplication/security/accessToken.secure"),
};
