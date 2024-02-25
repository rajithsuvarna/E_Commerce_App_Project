const express = require("express");
const app = express();
const port = 8000;

const bodParser = require("body-parser");

app.use(bodParser.urlencoded({ extended: true }));
app.use("/", require("./routes/index"));

app.listen(port, (err) => {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
