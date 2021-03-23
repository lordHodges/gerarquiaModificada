"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Empresa extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		/* static associate(models) {
			Empresa.hasMany(models.Sucursal, {
				foreignKey: "idEmpresa",
			});
		} */
	}
	Empresa.init(
		{
			razonSocial: DataTypes.STRING,
			rut: DataTypes.STRING,
			descripcion: DataTypes.STRING,
			giro: DataTypes.STRING,
			actividad: DataTypes.STRING,
			direccion: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Empresa",
			tableName: "Empresa",
		}
	);
	return Empresa;
};
