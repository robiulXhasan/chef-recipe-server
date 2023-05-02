const express = require("express");

const cors = require("cors");
const allData = require("./data/chefData.json");

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

// all data
app.get("/", (req, res) => {
  res.send("Hello From chef recipe server");
});
app.get("/chef", (req, res) => {
  res.send(allData);
});
// specific data
app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  const specificData = allData.find((data) => data.id == id);
  res.send(specificData);
});

app.listen(port, () => {
  console.log(`Listening from port: ${port}`);
});
