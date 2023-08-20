
const Logger = require('./logger');    // Exercise 6 - c) Create another library class for logging, and use it in the Calculator class.

class Calculator {

  constructor() {
    this.id = Math.floor(Math.random() * 1000000);       // Exercise 6 - b) Generates a random integer between 0 and 999999
    this.logger = new Logger();
  }

  #log = (value) => {
    console.log(`[Calculator:${this.id}]:${value}`);
  };

  add(num1, num2) {
    const value = num1 + num2;
    this.#log(value);
    return value;
  }

  subtract(num1, num2) {
  const value = num1 - num2;
  this.#log(value);
  return value;
  }

  multiply(num1, num2) {
  const value = num1 * num2;
  this.#log(value);
  return value;
 }

  divide(num1, num2) {
    if (num2 === 0) {
      throw new Error("Infinity");
    }
  const value = num1 / num2;
  this.#log(value);
  return value;
  }

}


module.exports = Calculator;
