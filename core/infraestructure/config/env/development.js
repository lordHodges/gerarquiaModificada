module.exports = {
	PORT: process.env.PORT,
	DB: {
		username: "root",
		password: "nanco2121",
		database: "ng_finanzasDev_db",
		host: "localhost",
		dialect: "mysql",
		logging: false,
	},
	SECRET: "lordhodges_generateToken",
};
//sequelize db:migrate --url "mysql://root:nanco2121@localhost:3306/ng_finanzas_db
/*  sequelize model:create --name Course --attributes name:string,status:string

sequelize model:create --name Usuario --attributes nombre:string, apellido:string, nombreUsuario:string, hash:string, nombreUsuario:string

sequelize model:create --name Teacher --attributes name:string,lastname:string,biography:string,birthdate:date,email:string,username:string,password:string,status:string

sequelize model:create --name Section --attributes teacherId:integer,subjectId:integer,courseId:integer,status:string

sequelize model:create --name Student --attributes name:string,lastname:string,birthdate:date,email:string,username:string,password:string,status:string

sequelize model:create --name Registration --attributes sectionId:integer,studentId:integer,status:string*/
