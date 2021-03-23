"use strict";
const { Router } = require("express");
module.exports = function ({ UsuarioController }) {
	const router = Router();

	router.get(
		"/obtenerUsuarios",
		UsuarioController.obtenerUsuarios.bind(UsuarioController)
	);
	router.post(
		"/crearUsuario",
		UsuarioController.createUsuario.bind(UsuarioController)
	);

	return router;
};
