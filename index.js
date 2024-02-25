const express = require("express");
const db1 = require("mysql2");
const app = express();
const port = 3307;

const db = require("./db");
db.initDB();

const bodParser = require("body-parser");

app.use(bodParser.urlencoded({ extended: true }));
app.use("/", require("./routes/index"));

app.listen(port, (err) => {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
