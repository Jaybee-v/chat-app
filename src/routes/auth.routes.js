const express = require("express");
const authRouter = express.Router();
const AuthController = require("../controllers/auth.controller");

const authController = new AuthController();

authRouter.get("/logout", authController.disconnect);
authRouter.post("/login", authController.login);

module.exports = authRouter;
