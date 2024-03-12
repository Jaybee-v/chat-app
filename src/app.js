// app.js
const express = require("express");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Autres middlewares ...

module.exports = app;
