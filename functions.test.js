const { expect } = require("@jest/globals");
const functions = require("./functions");

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

//toBe
test("adds 1 + 2 to equal 3", () => {
  expect(functions.add(1, 2)).toBe(3);
});

//to be null
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

//to be falsy
test("Should be false", () => {
  expect(functions.checkValue(0)).toBeFalsy();
});

//to Equal
test("User should be John", () => {
  expect(functions.createUser()).toEqual({
    firstName: "John",
    lastName: "Doe",
  });
});

//less than or greater than
test("Should be less than", () => {
  const a = 100;
  const b = 300;
  expect(a + b).toBeLessThanOrEqual(400);
});

//Regex
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/i);
});

//arrays

test("Must contain apple", () => {
  let arr = functions.checkArray();
  expect(arr).toContain("apple");
});
