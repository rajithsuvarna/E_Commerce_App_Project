const db = require("../db");
module.exports.create = async function (req, res) {
  try {
    await db.executQuery(`INSERT INTO cart (product_id,user_id,order_id,qty,total_price) 
    VALUES ('${req.body.product_id}', ${req.body.user_id},'${req.body.order_id}',${req.body.qty},${req.body.total_price});`);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return;
  }
};

module.exports.getCart = async function (req, res) {
  try {
    let cart = await db.executQuery(
      `SELECT * FROM cart where id=${req.params.id}`
    );
    res.send(cart);
  } catch (err) {
    console.log(err);
    return;
  }
};

module.exports.deleteCart = async function (req, res) {
  try {
    await db.executQuery(
      `DELETE FROM cart
      WHERE id = ${req.params.id};`
    );
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return;
  }
};
