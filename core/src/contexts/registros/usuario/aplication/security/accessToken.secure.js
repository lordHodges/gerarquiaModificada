class AccessToken {
	constructor({ JWTTokenizer }) {
		this._tokenizer = JWTTokenizer;
	}
	async generate(payload) {
		try {
			const tokenGenerated = await this._tokenizer.generate(payload);
			return tokenGenerated;
		} catch (error) {
			console.log(error);
			return "no es posible generar token";
		}
	}
	async verify(token) {
		try {
			const decoded = await this._tokenizer.decode(token);
			return decoded;
		} catch (error) {
			console.log(error);
			return "no es posible procesar la informacion";
		}
	}
}
module.exports = AccessToken;
