const axios = require("axios");
const parser = require("body-parser");

const {} = require("./middlewares");
const express = require("express");
const app = express();

const { posts } = require("./endpoints");

app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

// Inyeccion de dependencias.
const postsHandlers = users({ axios });

app.post("/", authenticate, postsHandlers.post);

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
