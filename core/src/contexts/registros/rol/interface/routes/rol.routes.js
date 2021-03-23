"use strict";
const { Router } = require("express");
module.exports = function ({ RolController }) {
	const router = Router();

	router.get("/obtenerRoles", RolController.obtenerRoles.bind(RolController));
	router.post("/crearRol", RolController.createRol.bind(RolController));
	router.delete(
		"/eliminarRol/:id",
		RolController.eliminarRol.bind(RolController)
	);
	return router;
};
