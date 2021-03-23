"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Rol extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Rol.hasMany(models.Usuario, {
				foreignKey: "RolID",
			});
		}
	}
	Rol.init(
		{
			nombre: DataTypes.STRING,
		},
		{
			sequelize,
			tableName: "Rol",
			modelName: "Rol",
		}
	);
	return Rol;
};
