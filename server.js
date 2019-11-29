const express = require("express");
const server = express();
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const path = require("path");
const PORT = process.env.PORT || 2550;

require("dotenv/config");
mongoose.set("useCreateIndex", true);
//DB Connection
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log("DB IS CONNECTED");
  }
);
//MiddleWares
// server.use(
//   session({
//     secret: process.env.COOKIE_PASS,
//     resave: true,
//     saveUninitialized: true
//   })
// );
var whitelist = [
  "http://localhost:3000",
  "http://jeddahmallsguide.herokuapp.com/"
];

var corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      var message =
        "The CORS policy for this application does not allow access from origin " +
        origin;
      callback(new Error(message), false);
    }
  }
};

server.use(cors(corsOptions));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(express.static(path.join(__dirname, "build")));

//Routes
server.use("/api/v1/users", require("./routes/users.routes"));
server.use("/api/v1/malls", require("./routes/malls.routes"));
server.use("/api/v1/stores", require("./routes/stores.routes"));
server.use("/api/v1/bookings", require("./routes/bookings.routes"));
server.use("/admin", require("./routes/admin.routes"));
server.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

server.listen(PORT, () => {
  console.log("server is running");
});
