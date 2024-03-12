// app.js
const express = require("express");
const app = express();
const path = require("path");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res) => {
  // demande de rendu EJS
  res.render("home", { title: "Bienvenue sur Chat-App" }); // on donne le chemin dans views, et on omet le .ejs
});

module.exports = app;
