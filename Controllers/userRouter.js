const Router = require("express").Router();
const User = require("../Models/user.model.js");

Router.get("/", (req, res) => {
	User.find({}).exec((err, users) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).json(users);
		}
	});
});
Router.post("/", (req, res) => {
	const newuser = new User();
	newuser.username = req.body.username;
	newuser.password = req.body.password;
	newuser.isOver21 = req.body.isOver21;
	newuser.save((err, user) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(401).send("saved successfully");
		}
	});
});

Router.put("/:id", (req, res) => {
	User.findById(req.params.id, (err, user) => {
		if (err) {
			res.status(500).send(err);
		} else {
			user.username = req.body.username || user.username;
			user.password = req.body.password || user.password;
			user.isOver21 = req.body.isOver21 || user.isOver21;
			user.save((err, user) => {
				if (err) {
					res.status(500).send(err);
				} else {
					res.status(200).send("updated successfully");
				}
			});
		}
	});
});
Router.delete("/:id", (req, res) => {
	User.findByIdAndRemove(req.params.id, (err, user) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(403).send("deleted successfully");
		}
	});
});
module.exports = Router;
