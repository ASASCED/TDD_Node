const handler = require("./index");

describe("Endpoints", () => {
  describe("users", () => {
    describe("get", () => {
      it("return to user json", async () => {
        const axios = { get: jest.fn().mockResolvedValue({ data: 1 }) };

        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn()
        };

        await handler({ axios }).get({}, res);
        // console.log(res.status.mock.calls);
        expect(res.status.mock.calls).toEqual([[200]]);
        expect(res.send.mock.calls).toEqual([[1]]);
      });
    });

    describe("post", () => {
      it("Creates a resource", async () => {
        const axios = {
          post: jest.fn().mockResolvedValue({ data: 1 })
        };

        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn()
        };

        const req = {
          body: "Request body"
        };

        await handler({ axios }).post(req, res);

        expect(res.status.mock.calls).toEqual([[201]]);
        expect(res.send.mock.calls).toEqual([[1]]);
        expect(axios.post.mock.calls).toEqual([
          ["https://jsonplaceholder.typicode.com/users", "Request body"]
        ]);
      });
    });

    describe("put", () => {
      it("Updates resource", async () => {
        const axios = {
          put: jest.fn().mockResolvedValue({ data: 1 })
        };

        const req = {
          body: "Request body",
          params: {
            id: 12
          }
        };

        const res = {
          sendStatus: jest.fn()
        };

        await handler({ axios }).put(req, res);

        expect(axios.put.mock.calls).toEqual([
          ["https://jsonplaceholder.typicode.com/users/12", "Request body"]
        ]);
        expect(res.sendStatus.mock.calls).toEqual([[204]]);
      });
    });

    describe("delete", () => {
      it("Deletes a resource", async () => {
        const axios = {
          delete: jest.fn()
        };

        const req = {
          params: {
            id: 54
          }
        };

        const res = {
          sendStatus: jest.fn()
        };

        await handler({ axios }).delete(req, res);

        expect(axios.delete.mock.calls).toEqual([
          ["https://jsonplaceholder.typicode.com/users/54"]
        ]);
        expect(res.sendStatus.mock.calls).toEqual([[204]]);
      });
    });
  });
});
