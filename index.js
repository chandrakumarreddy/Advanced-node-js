const express = require("express");
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const user = require("./Models/user.model.js");
const PORT = process.env.PORT || 3001;
const userRouter = require("./Controllers/userRouter");
mongoose.connect("mongodb://localhost/advnode");

//creating instances
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//middlewares
app.use("/users", userRouter);
//root route
app.get("/", (req, res) => {
	res.send("hello");
});

//establishing successful connection
app.listen(PORT, err => {
	if (!err) {
		console.log("server is up and running");
	}
});
