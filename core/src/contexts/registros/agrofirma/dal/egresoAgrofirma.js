"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class EgresoAgrofirma extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			EgresoAgrofirma.belongsTo(models.ProyectoAgrofirma, {
				foreignKey: "idProyecto",
			});
			EgresoAgrofirma.belongsTo(models.Usuario, {
				foreignKey: "idUsuario",
			});
			EgresoAgrofirma.hasMany(models.RespaldoEgreso, {
				foreignKey: "idEgresoAgrofirma",
			});
		}
	}
	EgresoAgrofirma.init(
		{
			tipoEgreso: DataTypes.STRING,
			fecha: DataTypes.STRING,
			monto: DataTypes.INTEGER,
			responsable: DataTypes.STRING,
			descripcion: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "EgresoAgrofirma",
			tableName: "EgresoAgrofirma",
		}
	);
	return EgresoAgrofirma;
};
