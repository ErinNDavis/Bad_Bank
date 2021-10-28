const login = require("./login");
describe("Login", () => {
  test("works", () => {
    expect(login.login()).toEqual("Login");
  });
});