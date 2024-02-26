const db = require("../db");

module.exports.create = async function (req, res) {
  try {
    await db.executQuery(`INSERT INTO product (title, price, description, availability, qty) 
    VALUES ('${req.body.title}', ${req.body.price},'${req.body.description}',${req.body.availability},${req.body.qty});`);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return;
  }
};

module.exports.getProduct = async function (req, res) {
  try {
    let product = await db.executQuery(
      `SELECT * FROM product where id='${req.params.id}'`
    );
    res.send(product);
  } catch (err) {
    console.log(err);
    return;
  }
};
module.exports.getAllProduct = async function (req, res) {
  try {
    let product = await db.executQuery(`SELECT * FROM product`);
    res.send(product);
  } catch (err) {
    console.log(err);
    return;
  }
};
module.exports.createCategory = async function (req, res) {
  try {
    await db.executQuery(`INSERT INTO category (category_name,product_id) 
    VALUES ('${req.body.name}','${req.body.product_id}')`);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return;
  }
};
module.exports.getCategory = async function (req, res) {
  try {
    let category = await db.executQuery(`SELECT * FROM category`);
    res.send(category);
  } catch (err) {
    console.log(err);
    return;
  }
};
