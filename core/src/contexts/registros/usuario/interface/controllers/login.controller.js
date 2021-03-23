class LoginController {
	constructor({ Login }) {
		this._login = Login;
	}
	async login(req, res) {
		try {
			const { body } = req;

			const { usuario, token } = await this._login.exe(
				body.nombreUsuario,
				body.hash
			);
			return res.status(200).send({ usuario, token });
		} catch (error) {
			console.log(error);
			return res.status(500).send({
				message:
					"no se ha procesado la informacion consulte con el equipo de soporte",
			});
		}
	}
}
module.exports = LoginController;
