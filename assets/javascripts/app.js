
var calcButtons = document.getElementsByClassName('calc_button');
var inputOp = document.getElementsByClassName('calc_button');
var values = {
  "first": null,
  "second": null,
  "operator": null
}

for(var i = 0; i < calcButtons.length; i++) {
  var button = calcButtons[i];
  button.addEventListener('click', function(event) {
    handleInput(event);
  });
}
// function checkInput(e) {
//   document.getElementById('calc_button').innerHTML =
//     (cars instanceof Array) + "<br>" +
//     (cars instanceof Object) + "<br>" +
//     (cars instanceof String) + "<br>" +
//     (cars instanceof Number);
// }


function handleInput(event) {
  var buttonValue = event.target.innerHTML;
  var inputValue = calc_input.innerHTML;
  // +, -, /
  if (isOperation(buttonValue)) {
      values["first"] = inputValue;
      values["operator"] = buttonValue;
      calc_input.innerHTML = 0;
  // =
  } else if (buttonValue === "=") {
    values["second"] = inputValue;
    calculate()
  // any ol number
  } else if (buttonValue === "C") {
    
  } else {
    if (inputValue === "0") {
      calc_input.innerHTML = buttonValue;
    } else {
        calc_input.innerHTML = inputValue + buttonValue;
    }
  }




  // If we press equals, save the second value
  // Perform the operation
  // Set the calculator display to the result
}
// function isNumber(buttonValue) {
//   while(buttonValue != operators)
// }

function isOperation(buttonValue) {
  switch(buttonValue) {
    case '+':
        return true
        break;
    case '-':
        return true
        break;
    case '*':
        return true
        break;
    case '/':
        return true
        break;
    default:
      return false
  }
}

function setValue(value) {
  console.log(value);
}

function calculate() {
  var result;

  switch(values["operator"]) {
    case '+':
        result = values["first"] + values["second"];
        break;
    case '-':
        result = values["first"] - values["second"];
        break;
    case '*':
        result = values["first"] * values["second"];
        break;
    case '/':
        result = values["first"] / values["second"];
        break;
    default:
      result = 'Not a valid operator';
  }
  document.getElementById('calc_input').innerHTML = result;
}
