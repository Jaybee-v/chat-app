const AuthService = require("../services/auth.service");

class AuthController {
  constructor() {}
  async login(req, res, next) {
    try {
      console.log(req.body);
      const { username, email } = req.body;
      const user = await AuthService.login(username, email);
      if (user) {
        req.session.user = user;
      }
      console.log("User logged in", user);
      res.redirect("/");
      // res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }

  async disconnect(req, res, next) {
    try {
      if (req.session && req.session.user !== undefined)
        req.session.user = undefined;
      res.redirect("/");
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AuthController;
