

const express = require("express");
const router = express.Router();
const calculatorController = require('../controllers/calculatorController')


//new controller methods added to router

router.get('/addition', (req, res) => {
    calculatorController.addNumbers(req, res);
});

router.get('/subtract', (req, res) => {
    calculatorController.subtractNumbers(req, res);
});

router.get('/multiply', (req, res) => {
    calculatorController.multiplyNumbers(req, res);
});

router.get('/divide', (req, res) => {
    calculatorController.divideNumbers(req, res);
});

router.get('/add/:num1/:num2', calculatorController.addNumbers);     //working with path parameters

module.exports = router;