// let value = user-Input; 
// let i = value;
// (number − 32) × 5/9 = 0°C

function calcCelsius() {
    var valueToConvert = document.getElementById("inputButton").value;
    var answer = (valueToConvert - 32) * 5/9;
     document.getElementById("answer").innerHTML = answer;
}


