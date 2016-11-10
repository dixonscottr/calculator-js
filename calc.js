var Calculation = function(numOne, numTwo, operator){
  this.numOne = numOne;
  this.numTwo = numTwo;
  this.operator = operator;
}

var Calculator = function(calculation) {
  this.calculation = calculation;
  this.calculate = function() {
    var op = this.calculation.operator;
    var nOne = this.calculation.numOne;
    var nTwo = this.calculation.numTwo;
    switch(op) {
      case '+':
        return nOne + nTwo;
        break;
      case '-':
        return nOne - nTwo;
        break;
      case '*':
        return nOne * nTwo;
        break;
      case '/':
        return nOne / nTwo;
        break;
      default:
        return 'Invalid Operation';
    }
  }
};

window.onload = function() {
  var form = document.querySelector('.input-form');
  form.addEventListener('submit',runCalculation);
}

var runCalculation = function(event) {
  event.preventDefault();
  var x = Number(this.numberOne.value);
  var y = Number(this.numberTwo.value);
  var op = this.operator.value;
  var calculation = new Calculation(x, y, op);
  var calculator = new Calculator(calculation);
  var outputDiv = document.querySelector('.output');
  outputDiv.innerText = ("The result is: " + calculator.calculate());
}
