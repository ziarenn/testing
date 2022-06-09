import { expect, it } from "vitest";
import fetch2 from "./fetch2.js";
var XMLHttpRequest = require("xhr2");
it("should return a value", () => {
  return fetch2("https://jsonplaceholder.typicode.com/posts/").then((data) => {
    expect(data).toBeDefined();
  });
});
