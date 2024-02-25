const query = require("../createTableQueries");
const db = require("../db");
module.exports.create = async function (req, res) {
  try {
    db.executQuery(query.queries.queryToCreateCart, []);
    db.executQuery(query.queries.queryToCreateCategory, []);
    db.executQuery(query.queries.queryToCreateOrder, []);
    db.executQuery(query.queries.queryToCreateProduct, []);
    db.executQuery(query.queries.queryToCreateUser, []);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return;
  }
};
