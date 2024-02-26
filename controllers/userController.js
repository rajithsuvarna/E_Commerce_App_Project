const db = require("../db");

module.exports.create = async function (req, res) {
  try {
    await db.executQuery(`INSERT INTO User (username,email, password) 
    VALUES ('${req.body.username}','${req.body.email}', '${req.body.password}');`);
    res.send(200);
  } catch (err) {
    console.log(err);
    return;
  }
};

module.exports.login = async function (req, res) {
  try {
    let pass = await db.executQuery(
      `SELECT password from User where email='${req.body.email}'`
    );
    if (pass === req.body.password) {
      res.send("Login Successful");
    } else {
      res.send("Invalid credential");
    }
    return;
  } catch (err) {
    console.log(err);
    return;
  }
};
