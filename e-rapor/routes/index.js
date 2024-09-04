const AuthController = require("../controller/AuthController");
const Dashobardcontroller = require("../controller/dashboardController");

server.get("/", (req, res) => {
  res.render("index", {
    message: "Welcome in Express !",
  });
});

server.get("/dashboard", (req, res) => {
  res.render("dashboard-page", {
    message: "",
  });
});

server.get("/login", (req, res) => {
  res.render("auth/login", {
    message: "",
  });
});

server.get("/home", AuthController.login);
server.get("/", Dashobardcontroller.dashboard);
server.get("/auth/login", AuthController.login);
