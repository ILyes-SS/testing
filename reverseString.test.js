const reverseString = require("./reverseString");

test("exist", () => {
  expect(reverseString).toBeDefined();
});
test("return a string", () => {
  expect(reverseString("hello")).toMatch(/./);
});
test("reverse a string", () => {
  let testCases = [
    { str: "hello", expected: "olleh" },
    { str: "good", expected: "doog" },
  ];
  testCases.forEach((testCase) => {
    expect(reverseString(testCase.str)).toMatch(testCase.expected);
  });
});
