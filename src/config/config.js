require('dotenv').config({
  path: `../.env`
});
const {DB_USERNAME, DB_PASSWORD, DB_HOSTNAME, DB_PORT, DB_NAME, DB_DIALECT} = process.env
// console.log(DB_PORT)
module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOSTNAME,
    dialect: DB_DIALECT,
    port: DB_PORT
  },
}
