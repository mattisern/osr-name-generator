var nameList = "";
var generatedName = "";

var jsonNames = new XMLHttpRequest();
jsonNames.onreadystatechange = function() {
  if (jsonNames.readyState == 4 && jsonNames.status == 200) {
  nameList = JSON.parse(jsonNames.responseText);
  }
};
jsonNames.open("GET", "http://www.lightly.se/code/osr-name-generator/js/names.json", false);
jsonNames.send();

function print (message, div){
  var divId = document.getElementById(div);
  divId.innerHTML = message;
}

function getRandomNumber () {
  return Math.random() * (nameList.nameParts.firstNamePart.length);
}

function randomNameGenerator () {
  var firstNum = parseInt(getRandomNumber());
  var secondNum = parseInt(getRandomNumber());
  return nameList.nameParts.firstNamePart[firstNum] + nameList.nameParts.secondNamePart[secondNum];
}

generatedName = randomNameGenerator();

print (generatedName + " ..?", "generated-name");

jQuery("#generateNameButton").click(function (){
  generatedName = randomNameGenerator();
  print (generatedName + " ..?", "generated-name");
});
