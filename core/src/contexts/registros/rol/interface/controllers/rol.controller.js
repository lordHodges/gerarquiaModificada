//const crearUsuario = require("../../aplication/useCase/crearUsuario");
class RolController {
	constructor({ CrearRol, ObtenerRoles, EliminarRol }) {
		this._crear = CrearRol;
		this._obtenerTodos = ObtenerRoles;
		this._eliminar = EliminarRol;
	}

	async createRol(req, res) {
		try {
			const { nombre } = req.body;

			const rol = await this._crear.exe(nombre);

			return res.status(201).send(rol);
		} catch (error) {
			console.log({ warning: error });
			return res.status(500).send({
				message:
					"no se ha procesado la informacion consulte con el equipo de soporte",
			});
		}
	}
	async obtenerRoles(req, res) {
		try {
			const roles = await this._obtenerTodos.exe();
			return res.status(200).send(roles);
		} catch (error) {
			console.log({ warning: error });
			return res.status(500).send({
				message:
					"no se ha procesado la informacion consulte con el equipo de soporte",
			});
		}
	}
	async eliminarRol(req, res) {
		try {
			const { id } = req.params;

			const respuesta = await this._eliminar.exe(id);

			return res.status(200).send(respuesta);
		} catch (error) {
			console.log({ warning: error });

			return res.status(500).send({
				message:
					"no se ha procesado la informacion consulte con el equipo de soporte",
			});
		}
	}
}
module.exports = RolController;
