const addFive = require("./addFive");

test("addFive(1) should return 6", () => {
  expect(addFive(1)).toBe(6);
});

test("addFive(2) should return 7", () => {
  expect(addFive(2)).toBe(7);
});

test("addFive(3) should return 8", () => {
  expect(addFive(3)).toBe(8);
});
