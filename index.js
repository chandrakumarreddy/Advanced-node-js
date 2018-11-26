const express = require("express"),
	ejs = require("ejs"),
	path = require("path"),
	PORT = process.env.PORT || 3000,
	app = express();

app.set("view engine", ejs);
app.set("views", path.join(__dirname + "/views/"));
app.use(express.static("public"));

app.get("/", (req, res) => {
	const user = {
		title: "Einstein CI theory",
		name: "chandra",
		image: "einstein_compound_intrest.png",
		friends: ["chandra01", "chandra02", "chandra03", "chandra04"]
	};
	res.render("home.ejs", { user: user });
});

app.listen(PORT, err => {
	if (!err) {
		console.log("server is up and running");
	}
});
