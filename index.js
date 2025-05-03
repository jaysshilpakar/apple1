const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the eCommerce API!");
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
