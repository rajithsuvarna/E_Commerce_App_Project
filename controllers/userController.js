const db = require("../db");
module.exports.create = async function (req, res) {
  try {
    db.executQuery();
  } catch (err) {
    console.log(err);
    return;
  }
};

module.exports.login = async function (req, res) {
  try {
  } catch (err) {
    console.log(err);
    return;
  }
};