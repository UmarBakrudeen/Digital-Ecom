const express = require("express");
const cors = require("cors");

const Products = require("./Pages/Product");

const app = express();

// Pages

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to our client");
});
app.get("/products", (req, res) => {
  res.send(Products);
});

const port = process.env.PORT || 5000;

app.listen(5000, console.log(`Server Running port ${port}`));
