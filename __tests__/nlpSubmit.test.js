// Test to make sure the submitUrl throws an error when it submits a
// non-article url
let url = "www.google.com";

test("correctly identifies non-article links", () => {
  expect(() => {
    Client.submitUrl(url);
  }).toThrow();
});
