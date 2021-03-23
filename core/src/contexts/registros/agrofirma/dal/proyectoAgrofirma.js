"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class ProyectoAgrofirma extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			ProyectoAgrofirma.belongsTo(models.Usuario, {
				foreignKey: "idUsuario",
			});
			ProyectoAgrofirma.belongsToMany(models.Banco, {
				through: "CuentasProyecto",
				foreignKey: "idProyecto",
			});
			ProyectoAgrofirma.hasMany(models.IngresoAgrofirma, {
				foreignKey: "idProyecto",
			});
			ProyectoAgrofirma.hasMany(models.CuentasProyecto, {
				foreignKey: "idProyecto",
			});
			ProyectoAgrofirma.hasMany(models.EgresoAgrofirma, {
				foreignKey: "idProyecto",
			});
		}
	}
	ProyectoAgrofirma.init(
		{
			nombre: DataTypes.STRING,
			ubicacion: DataTypes.STRING,
			geoLocalizacion: DataTypes.STRING,
			fechaInicio: DataTypes.STRING,
			estado: DataTypes.STRING,
			totalInversion: DataTypes.INTEGER,
			capitalInicial: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "ProyectoAgrofirma",
			tableName: "ProyectoAgrofirma",
		}
	);
	return ProyectoAgrofirma;
};
