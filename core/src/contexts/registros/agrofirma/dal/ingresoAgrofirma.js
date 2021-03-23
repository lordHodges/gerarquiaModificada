"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class IngresoAgrofirma extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			IngresoAgrofirma.belongsTo(models.Usuario, {
				foreignKey: "idUsuario",
			});
			IngresoAgrofirma.hasMany(models.RespaldoIngreso, {
				foreignKey: "idIngresoAgrofirma",
			});
			IngresoAgrofirma.belongsTo(models.ProyectoAgrofirma, {
				foreignKey: "idProyecto",
			});
			IngresoAgrofirma.belongsTo(models.CuentasProyecto, {
				foreignKey: "idCuentaProyecto",
			});
		}
	}
	IngresoAgrofirma.init(
		{
			fecha: DataTypes.STRING,
			monto: DataTypes.INTEGER,
			nDocumento: DataTypes.STRING,
			descripcionIngreso: DataTypes.STRING,
			tipoIngreso: DataTypes.STRING,
			estadoPago: DataTypes.STRING,
			nAutorizacion: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "IngresoAgrofirma",
			tableName: "IngresoAgrofirma",
		}
	);
	return IngresoAgrofirma;
};
