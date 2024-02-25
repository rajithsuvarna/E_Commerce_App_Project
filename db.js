const mysql = require("mysql2/promise");
const config = require("./config/config");
var resp = {
  ecommerce: null,
};
async function connectToDB(dbName = "ecommerce") {
  const connection = await mysql.createConnection(config[dbName]);
  if (connection) {
    console.log("Connected to MySQL DB");
  }
  return connection;
}

module.exports.initDB = async function initDB(dbName = "ecommerce") {
  resp[dbName] = await connectToDB(dbName);
};

//ddl
//dml

module.exports.executQuery = async function executQuery(
  query,
  placeholders,
  dbName = "ecommerce"
) {
  if (!resp[dbName]) {
    await this.initDB(dbName);
  }

  const [results, fields] = await resp[dbName].execute(query, placeholders);
  return results;
};
