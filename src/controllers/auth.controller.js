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
      res.redirect("/dashboard");
      // res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AuthController;
