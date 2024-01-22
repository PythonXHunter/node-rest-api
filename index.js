require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.port || 3000;

app.get("/", (req, res) => {
  res.send({ "Success": true});
});

app.listen(PORT, () => {
  console.log("Server Listening on Port:", PORT);
});