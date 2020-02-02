const Adder = require("./Adder.js");

let values = new Adder(
  {
    a: 5,
    b: 15
  }
);

console.log(values.render());
