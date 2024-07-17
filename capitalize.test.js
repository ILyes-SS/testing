const capitalize = require("./capitalize");

test("exist", () => {
  expect(capitalize).toBeDefined();
});
test("return a string", () => {
  expect(capitalize("hello")).toMatch(/./);
});

test("capitalize first letter", () => {
  let words = [
    { str: "hello", expected: "Hello" },
    { str: "good", expected: "Good" },
  ];
  words.forEach((word) => {
    expect(capitalize(word.str)).toMatch(word.expected);
  });
});
