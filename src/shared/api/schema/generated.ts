export type paths = {
  "/test/{test_id}": {
    GET: {
      request: {
        url: "/test/{test_id}",
        method: "GET",
        path: {
          test_id: number,
        },
      },
      response: {
        status: number,
        body: TestSchema,
      }
    },
  },
}
export type TestSchema = {
        code?: string;
        message?: string;
    };
