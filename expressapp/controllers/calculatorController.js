const Calculator = require('../libraries/Calculator');

let myCalc = new Calculator()

const addNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);               //working with QUERY parameters
  let number2 = parseInt(req.query.num2);                 
  
  let sum = myCalc.add(number1, number2);

  res.status(200).json({ result: sum });
};

// const addNumbers = (req, res) => {              //working with PATH parameters
//   let number1 = parseInt(req.params.num1);
//   let number2 = parseInt(req.params.num2);
// }

const subtractNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  
  let difference = myCalc.subtract(number1, number2);

  res.status(200).json({ result: difference });
};

const multiplyNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  
  let product = myCalc.multiply(number1, number2);

  res.status(200).json({ result: product });
};

const divideNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  
  if(number2 !== 0) {
    let quotient = myCalc.divide(number1, number2);
    res.status(200).json({ result: quotient });
  } else {
    res.status(400).json({ error: "Division by zero" });
  }
};

module.exports = {
  addNumbers,
  subtractNumbers,
  multiplyNumbers,
  divideNumbers
};
