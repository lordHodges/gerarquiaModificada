//const crearUsuario = require("../../aplication/useCase/crearUsuario");
//const obtenerUsuarios = require("../../aplication/useCase/obtenerUsuarios");

class UsuarioController {
	constructor({ ObtenerUsuarios, CrearUsuario }) {
		this._crear = CrearUsuario;
		this._obtenerUsuarios = ObtenerUsuarios;
	}

	async createUsuario(req, res) {
		try {
			const { nombre, apellido, nombreUsuario, hash, RolID } = req.body;

			const usuario = await this._crear.exe(
				nombre,
				apellido,
				nombreUsuario,
				hash,
				RolID
			);

			return res.status(201).send(usuario);
		} catch (error) {
			console.log({ warning: error });
			return res.status(500).send({
				message:
					"no se ha procesado la informacion consulte con el equipo de soporte",
			});
		}
	}
	async obtenerUsuarios(req, res) {
		try {
			const usuarios = await this._obtenerUsuarios.exe();
			return res.status(200).send(usuarios);
		} catch (error) {
			console.log({ warning: error });
			return res.status(500).send({
				message:
					"no se ha procesado la informacion consulte con el equipo de soporte",
			});
		}
	}
}
module.exports = UsuarioController;
