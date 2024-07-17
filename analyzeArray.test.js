const analyzeArray = require("./analyzeArray");

test("exist", () => {
  expect(analyzeArray).toBeDefined();
});
test("return an object", () => {
  expect(typeof analyzeArray([1, 2, 3])).toMatch("object");
});
test("object's properties are defined", () => {
  for (let prop of Object.values(analyzeArray([1, 2, 3]))) {
    expect(prop).toBeDefined();
  }
});
test("properties values are numbers", () => {
  for (let prop of Object.values(analyzeArray([1, 2, 3]))) {
    expect(typeof prop).toMatch("number");
  }
});
test("average", () => {
  expect(analyzeArray([1, 2, 3])["average"]).toBe(2);
});
test("min", () => {
  expect(analyzeArray([1, 2, 3])["min"]).toBe(1);
});
test("max", () => {
  expect(analyzeArray([1, 2, 3])["max"]).toBe(3);
});
test("length", () => {
  expect(analyzeArray([1, 2, 3])["length"]).toBe(3);
});
