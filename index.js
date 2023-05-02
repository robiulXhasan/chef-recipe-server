const express = require("express");

const cors = require("cors");
const data = require("./data/chefData.json");

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello From chef recipe server");
});
app.get("/chef", (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`Listening from port: ${port}`);
});
