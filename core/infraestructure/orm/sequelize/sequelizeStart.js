// esto deberia estar en la capa de infraestructura
// de los recursos de configuracion de la aplicacion

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const { DB } = require("../../config/env");
const config = DB;
const db = {};
var dir = require("node-dir");
const sequelize = new Sequelize(
	config.database,
	config.username,
	config.password,
	config
);
dir.subdirs("./core/src/contexts", function (err, subdirs) {
	if (err) throw err;

	//we have an array of subdirs now, so now we'll iterate that array
	subdirs.forEach(function (filepath) {
		fs.readdirSync(filepath)
			.filter((file) => {
				return (
					file.indexOf(".") !== 0 &&
					file !== basename &&
					file.slice(-12) === ".dalModel.js"
				);
			})
			.forEach((file) => {
				console.log(file);
				const model = sequelize["import"](path.join(__dirname, file));
				db[model.name] = model;
			});
	});
});
/* fs.readdirSync("./core/src/contexts")
	.filter((file) => {
		return (
			file.indexOf(".") !== 0 &&
			file !== basename &&
			file.slice(-3) === ".dalModel.js"
		);
	})
	.forEach((file) => {
		const model = sequelize["import"](path.join(__dirname, file));
		db[model.name] = model;
	}); */
/* const Usuario = sequelize.import(
	"../../../src/contexts/registros/usuario/dal/usuario.dalModel.js"
);
db[Usuario.name] = Usuario;
const Rol = sequelize.import(
	"../../../src/contexts/registros/rol/dal/rol.dalModel.js"
);
db[Rol.name] = Rol;
const Empresa = sequelize.import(
	"../../../src/contexts/registros/empresa/dal/empresa.dalModel.js"
);
db[Empresa.name] = Empresa; */

/* sequelize.import(
	"../../../src/contexts/registros/agrofirma/dal/proyectoAgrofirma.js"
);
sequelize.import(
	"../../../src/contexts/registros/agrofirma/dal/egresoAgrofirma.js"
);
sequelize.import(
	"../../../src/contexts/registros/agrofirma/dal/ingresoAgrofirma.js"
); */
Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
