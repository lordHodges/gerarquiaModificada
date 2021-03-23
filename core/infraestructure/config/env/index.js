require("dotenv").config();

const DEVELOPMENT = require("./development");
const NUEVAGER = require("./nuevaGerarquia");
const QA = require("./qa");
const NEW = require("./newShema");
const NUEVA = require("./newbd");
const { NODE_ENV } = process.env;

//consultar entorno seteado
let currentEnv = DEVELOPMENT;

if (NODE_ENV === "production") {
	currentEnv = PRODUCTION;
} else if (NODE_ENV === "qa") {
	currentEnv = QA;
} else if (NODE_ENV === "newShema") {
	currentEnv = NEW;
} else if (NODE_ENV === "newbd") {
	currentEnv = NUEVA;
} else if (NODE_ENV === "nueva_gerarquia") {
	currentEnv = NUEVAGER;
}

module.exports = currentEnv;
