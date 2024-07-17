const calculator = require("./calculator");

test("exist", () => {
  expect(calculator).toBeDefined();
});
test("calculation functions exist", () => {
  for (let operation of Object.values(calculator)) {
    expect(operation).toBeDefined();
  }
});
test("calculation functions return a number", () => {
  for (let operation of Object.values(calculator)) {
    expect(typeof operation(10, 3)).toMatch("number");
  }
});
test("add function return the sum", () => {
  expect(calculator.add(10, 3)).toBe(13);
});
test("subtract function return the subtraction", () => {
  expect(calculator.subtract(10, 3)).toBe(7);
});
test("division function return the division", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});
test("multiply function return the multiplication", () => {
  expect(calculator.multiply(10, 2)).toBe(20);
});
