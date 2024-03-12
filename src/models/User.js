class User {
  username;
  email;

  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  static create(username, email) {
    return new User(username, email);
  }
}

module.exports = User;
