var nameList = "";
var generatedName = "";

// Get names and parse to JSON

var jsonNames = new XMLHttpRequest();
jsonNames.onreadystatechange = function() {
  if (jsonNames.readyState == 4 && jsonNames.status == 200) {
  nameList = JSON.parse(jsonNames.responseText);
  }
};
jsonNames.open("GET", "http://www.lightly.se/code/osr-name-generator/js/names.json", false);
jsonNames.send();

// Simple print function for re-use
function print (message, div){
  var divId = document.getElementById(div);
  divId.innerHTML = message;
}

// Random name generator

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function randomNameGenerator () {
  var firstNum = parseInt(getRandomNumber (0, 6));
  var secondNum = parseInt(getRandomNumber (0, 6));
  return nameList.nameParts.firstNamePart[firstNum] + nameList.nameParts.secondNamePart[secondNum];
}

generatedName = randomNameGenerator();

print (generatedName, "generated-name");
