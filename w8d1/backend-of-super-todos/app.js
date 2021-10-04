const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const axios = require("axios");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

let someTodos = {
	1: {
		id: 1,
		name: "Get coffee",
		description: "Good coffee is good",
		isComplete: true,
	},
	2: {
		id: 2,
		name: "Get the data flowing in the app",
		description: "Pass down props",
		isComplete: false,
	},
};

app.get("/api/todos", (req, res) => {
	res.json(someTodos);
});

app.post("/api/todos", (req, res) => {
	const newTodo = req.body.todo;
	someTodos[newTodo.id] = newTodo;

	res.send("ok");
});

app.put("/api/todos/:todo_id", (req, res) => {
	someTodos[req.params.todo_id].isComplete = true;
	res.send("ok");
});

app.delete("/api/todos/:todo_id", (req, res) => {
	delete someTodos[req.params.todo_id];
	res.send("ok");
});

app.get("/api/weather/:city_name", (req, res) => {
	const API = "09fd719b4b698ec0260e424f83378e3d";
	axios
		.get(
			`https://api.openweathermap.org/data/2.5/weather?q=${req.params.city_name}&appid=${API}`
		)
		.then((apiRes) => {
			res.json(apiRes.data);
		});
});

module.exports = app;
