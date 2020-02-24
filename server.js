const axios = require("axios");
const parser = require("body-parser");

const express = require("express");
const app = express();

const { users } = require("./endpoints");

app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

// Inyeccion de dependencias.
const usersHandlers = users({ axios });

app.get("/", usersHandlers.get);
app.post("/", usersHandlers.post);
app.put("/:id", usersHandlers.put);
app.delete("/:id", usersHandlers.delete);

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
