const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello From chef recipe server");
});

app.listen(port, () => {
  console.log(`Listening from port: ${port}`);
});
