// Exercise 6 - c) Create another library class for logging, and use it in the Calculator class.

class Logger {

    constructor() {
        this.id = Math.floor(Math.random() * 1000000);    // Exercise 6 - b) Generates a random integer between 0 and 999999
    }

    log(value) {
        console.log(`[Calculator:${this.id}]:${value}`);
    };

}


class Logger {
    log(context, value) {
      console.log(`[${context}]:${value}`);
    }
  }
  
  module.exports = Logger;