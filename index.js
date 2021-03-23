const container = require("./core/infraestructure/webServer/container");
const db = container.resolve("db");
const application = container.resolve("app");

application
	.start()
	.then(async () => {
		await db.sequelize.sync({ alter: true }).then(() => {
			console.log("tablas sincronizadas");
		});
	})
	.catch((err) => {
		console.log(err);
		process.exit();
	});
