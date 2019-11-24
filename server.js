const express = require("express");
const server = express();
const cors = require("cors");
const mongoose = require("mongoose");

//DB Connection
mongoose
  .connect("mongodb://localhost/JeddahMalls", {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(res => console.log("db is connected"))
  .catch(err => console.log(err));

//MiddleWares
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

//Routes
server.use("/users", require("./routes/users.routes"));
server.use("/malls", require("./routes/malls.routes"));

server.listen(2550, () => {
  console.log("server is running");
});
