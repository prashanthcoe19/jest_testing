const functions = {
  add: (a, b) => {
    return a + b;
  },
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = {
      firstName: "John",
    };
    user["lastName"] = "Doe";
    return user;
  },
  checkArray: () => {
    return ["apple", "dell", "lenovo"];
  },
};
module.exports = functions;
