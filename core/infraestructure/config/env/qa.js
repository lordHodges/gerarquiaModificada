module.exports = {
  PORT: process.env.PORT,
  HOOD: process.env.HOOD,
  HAAD: process.env.HAAD,
  DB: {
    username: "root",
    password: "almendra",
    database: "ng_finanzas_db",
    host: "localhost",
    dialect: "mysql",
    logging: false,
  },
  SECRET: "lordhodges_generateToken",
};
