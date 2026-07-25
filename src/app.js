const express = require("express");

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Welcome to ShopSphere API 🚀");
});

module.exports = app;