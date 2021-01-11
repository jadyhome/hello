require("dotenv").config();
module.exports = {
  development: {
    database: "mother-tongue_development",
    dialect: "postgres",
  },
  test: {
    database: "mother-tongue_test",
    dialect: "postgres",
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true,
      },
    },
  },
};
