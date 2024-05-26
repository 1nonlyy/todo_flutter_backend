const express = require("express");
const bodyParser = require("body-parser")
const UserRoute = require("./routers/user_router");
const ToDoRoute = require('./routers/todo_router');
const app = express();
const cors = require("cors");
app.use(bodyParser.json())
app.use(cors());
app.use("/",UserRoute);
app.use("/",ToDoRoute);

module.exports = app;
