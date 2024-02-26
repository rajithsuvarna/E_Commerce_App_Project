const db = require("../db");
module.exports.placeOrder = async function (req, res) {
  try {
    await db.executQuery(`INSERT INTO Myorder (user_id,total_price,payment_mode,address,status) 
    VALUES ('${req.body.userid}','${req.body.price}', '${req.body.paymentmode}','${req.body.address}','${req.body.status}');`);
    res.send(200);
  } catch (err) {
    console.log(err);
    return;
  }
};

module.exports.getOrder = async function (req, res) {
  try {
    let product = await db.executQuery(`SELECT * FROM Myorder`);
    res.send(product);
  } catch (err) {
    console.log(err);
    return;
  }
};
