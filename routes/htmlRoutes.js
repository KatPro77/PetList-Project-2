var path = require("path");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/login.html"));
  });

  // Load contact page
  app.get("/contact", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/contact.html"));
  });

  // Load volunteer page 
  app.get("/volunteer", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/volunteer.html"));
  });

  // Load login page
  app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  // Load mealRequest page
  app.get("/meals", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/mealRequest.html"));
  });
};


