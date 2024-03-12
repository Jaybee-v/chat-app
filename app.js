// app.js
const express = require("express");
const app = express();
const path = require("path");
const router = require("./src/routes");
const compression = require("compression");
const helmet = require("helmet");
const session = require("express-session");

app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    secret: "s3Cur3",
    name: "sessionId",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(helmet());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", router);

app.use((req, res) => {
  console.log(req.session.user);
  // demande de rendu EJS
  res.render("home", {
    title: "Bienvenue sur Chat-App",
    user: req.session.user,
  }); // on donne le chemin dans views, et on omet le .ejs
});

module.exports = app;
