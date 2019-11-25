const express = require("express");
const server = express();
const cors = require("cors");
const mongoose = require("mongoose");


require("dotenv/config");
mongoose.set('useCreateIndex', true);
//DB Connection
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify:false},
  () => {
    console.log("DB IS CONNECTED");
  }
);
//MiddleWares
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

//Routes
server.use("/users", require("./routes/users.routes"));
server.use("/malls", require("./routes/malls.routes"));
server.use("/stores", require("./routes/stores.routes"));
server.use("/admin", require("./routes/admin.routes"));

server.listen(2550, () => {
  console.log("server is running");
});
