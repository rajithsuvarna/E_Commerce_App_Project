require("dotenv").config(); //process.env

module.exports.ecommerce = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  timezone: "Z",
  dateString: true,
};
