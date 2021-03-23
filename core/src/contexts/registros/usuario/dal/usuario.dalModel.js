"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Usuario extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Usuario.belongsTo(models.Rol, {
				foreignKey: "RolID",
			});
		}
	}
	Usuario.init(
		{
			nombre: DataTypes.STRING,
			apellido: DataTypes.STRING,
			nombreUsuario: DataTypes.STRING,
			hash: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Usuario",
			tableName: "Usuario",
		}
	);
	return Usuario;
};
