// const express = require("express");
// // const indexRouter = require('./routes');
// const cors = require("cors");
// const app = express();
// const port = 80;

// app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // app.use('/', indexRouter);  // 라우터로 이동함

// module.exports = app.listen(port, () => {
//   console.log(`      🚀 Server is starting on ${port}`);
// });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const router = require("./app/routes/tutorial.routes");

const db = require("./models/index");

db.sequelize.sync();

var corsOptions = {
  origin: "http://localhost:4000",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
