const express = require("express"),
	ejs = require("ejs"),
	path = require("path"),
	PORT = process.env.PORT || 3000,
	app = express();

app.set("view engine", ejs);
app.set("views", path.join(__dirname + "/views/"));
app.use(express.static("public"));

app.get("/", (req, res) => {
	res.render("home.ejs", { title: "Einstein CI theory" });
});

app.listen(PORT, err => {
	if (!err) {
		console.log("server is up and running");
	}
});
