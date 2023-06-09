const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const db = require("./app/models");

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to quackshop." });
});

<<<<<<< HEAD
app.post('/register', (req, res) => {
  res.send({
    message: `helloo ${req.body.username}!!`
  })
}) 

app.get("/product", (req, res) => {
  // create mon product et save in db
  console.log("product returned!")
  res.json({ message: "product returned!" });
});

app.post("/product", (req, res) => {
  // create mon product et save in db
  console.log("post product")
  console.log(req.config)
  res.json({ message: "product created!" });
});

=======
>>>>>>> 4ffa767 (comunication)
// set port, listen for requests
const PORT = process.env.PORT || 8080;

require('./app/routes/routes.js')(app)

db.sequelize.sync({ 
  force: true 
  }).then( () => {
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
});