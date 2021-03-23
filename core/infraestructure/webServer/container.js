const { asClass, createContainer, asFunction, asValue } = require("awilix");

// app start
const StartUp = require("./startup");
const Server = require("./server");
const config = require("../config/env");
const Routes = require("./index.routes");

// importar Entidades
// ! Login
// ! Usuario
const {
	UsuarioController,
	UsuarioDalRepository,
	UsuarioDomainRepository,
	AccessToken,
	UsuarioDomainService,
	LoginController,
	Login,
	CrearUsuario,
	ObtenerUsuarios,
	/* crearUsuario,
	obtenerUsuarios, */
} = require("../../src/contexts/registros/usuario");

const UsuarioRoutes = require("../../src/contexts/registros/usuario/interface/routes/usuario.routes");
const LoginRoutes = require("../../src/contexts/registros/usuario/interface/routes/login.routes");
// ! Rol
const {
	CrearRol,
	ObtenerRoles,
	EliminarRol,

	RolController,
	RolDalRepository,
	RolDomainRepository,
	RolRoutes,
} = require("../../src/contexts/registros/rol");

//ENLACE A BD
const db = require("../orm/sequelize/sequelizeStart");

//security
const JWTTokenizer = require("../security/jwt_tokenizer.secure");
const ValidarToken = require("../security/validarToken.secure");

//INICIALIZAR CONTaINER
// ?(se debe registrar en main Index.js)
const container = createContainer();
// !register
// ? se deben inicializar aqui las clases requeridas por el contexto
container
	//configs
	.register({
		config: asValue(config),
		db: asValue(db),
		app: asClass(StartUp).singleton(),
		router: asFunction(Routes).singleton(),
		server: asClass(Server).singleton(),
	})
	// secure
	.register({
		JWTTokenizer: asClass(JWTTokenizer).singleton(),
		ValidarToken: asClass(ValidarToken).singleton(),
		AccessToken: asClass(AccessToken).singleton(),
		LoginController: asClass(LoginController).singleton(),
		LoginRoutes: asFunction(LoginRoutes).singleton(),
		Login: asClass(Login).singleton(), //caso de uso
	})

	// entidades
	.register({
		UsuarioController: asClass(UsuarioController).singleton(),
		UsuarioDalRepository: asClass(UsuarioDalRepository).singleton(),
		UsuarioDomainRepository: asClass(UsuarioDomainRepository).singleton(),
		UsuarioRoutes: asFunction(UsuarioRoutes).singleton(),
		UsuarioDomainService: asClass(UsuarioDomainService).singleton(),
		ObtenerUsuarios: asClass(ObtenerUsuarios).singleton(),
		CrearUsuario: asClass(CrearUsuario).singleton(),
	})

	.register({
		RolController: asClass(RolController).singleton(),
		RolDalRepository: asClass(RolDalRepository).singleton(),
		RolDomainRepository: asClass(RolDomainRepository).singleton(),
		RolRoutes: asFunction(RolRoutes).singleton(),
		CrearRol: asClass(CrearRol).singleton(),
		ObtenerRoles: asClass(ObtenerRoles).singleton(),
		EliminarRol: asClass(EliminarRol).singleton(),
		//
	});

module.exports = container;
