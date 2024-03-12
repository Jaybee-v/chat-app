const User = require("../models/User");

class AuthService {
  constructor() {}

  static async login(username, email) {
    const user = new User();
    user.username = username;
    user.email = email;
    console.log(user);
    return user;
  }
}

module.exports = AuthService;
