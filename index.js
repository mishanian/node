const express = require("express");
const dotenv = require("dotenv");
const Joi = require("joi");
dotenv.config();

const app = express();
app.use(express.json());

const genres = [
  { id: 1, name: "SciFi" },
  { id: 2, name: "Action" },
  { id: 3, name: "Fantasy" },
];

app.get("/", (req, res) => {
  res.send("Hi");
});

app.get("/api/genres", (req, res) => {
  res.send(genres);
});

app.get("/api/genres/:id", (req, res) => {
  genre = genres.find((g) => g.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send("Genre not found");
  res.send(genre);
});

app.delete("/api/genres/:id", (req, res) => {
  genre = genres.find((g) => g.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send("Genre not found");
  const index = genres.indexOf(genre);
  genres.splice(index, 1);
  res.send(genre);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`istening on port ${port}`));
