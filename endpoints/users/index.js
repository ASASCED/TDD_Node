const axios = require("axios");

const handlers = {
  get: async (_req, res) => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    res.sendStatus(200).send(data);
  },
  post: async (req, res) => {
    const { body } = req;
    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      body
    );
    res.sendStatus(201).send(data);
  },
  put: async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, body);
    res.sendStatus(204);
  },
  delete: async (req, res) => {
    const { id } = req.params;
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    res.sendStatus(204);
  }
};

module.exports = handlers;
