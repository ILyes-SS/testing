const caesarCipher = require("./caesarCipher");

test("exist", () => {
  expect(caesarCipher).toBeDefined();
});
test("do not shift alphabets when factor is zero", () => {
  expect(caesarCipher("hey", 0)).toMatch("hey");
});
test("shift alphabets", () => {
  expect(caesarCipher("abc", 1)).toMatch("bcd");
});
test("wrap from z to a", () => {
  expect(caesarCipher("xyz", 3)).toMatch("abc");
});
test("non alphabetical letters remain unchanged", () => {
  expect(caesarCipher("Hello, World!", 3)).toMatch("Khoor, Zruog!");
});
