const postHandlers = require("./index");

describe("Endpoints", () => {
  describe("posts", async () => {
    it("should create", () => {
      const mockUsers = [
        {
          id: 1
        },
        {
          id: 2
        }
      ];

      const post = {
        userId: 1,
        title: "Title",
        body: "Body post"
      };

      const req = {
        body: post
      };

      const res = {
        status: jest.fn(),
        send: jest.fn()
      };

      const axios = {
        get: jest.fn().mockResolvedValue({ data: mockUsers }),
        post: jest.fn().mockResolvedValue({data: 1000})
      };

      await postHandlers({axios}).post(req, res);
      expect(res.status.mock.calls).toEqual([[201]]);
      expect(axios.post.mock.calls).toEqual([
          [ 'https://jsonplaceholder.typicode.com/posts', post ]
      ])
    });
  });
});
