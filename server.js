const axios = require("axios");
const parser = require("body-parser");

const express = require("express");
const app = express();

app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

app.get("/", async (_req, res) => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  res.sendStatus(200).send(data);
});

app.post("/", async (req, res) => {
  const { body } = req;
  const { data } = await axios.post(
    "https://jsonplaceholder.typicode.com/users",
    body
  );
  res.sendStatus(201).send(data);
});

app.put("/:id", async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, body);
  res.sendStatus(204);
});

app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  res.sendStatus(204);
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
