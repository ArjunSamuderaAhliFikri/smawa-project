const AuthController = require("../controller/AuthController");
server.get("/", (request, response) => {
  response.render("index", {
    message: "Welcome in Express !",
  });
});

server.get("/home", AuthController.login);
