const AuthController = {
  login: (req, res) => {
    res.render("index", {
      message: "login page!",
    });
  },
};

module.exports = AuthController;
