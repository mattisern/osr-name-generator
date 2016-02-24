var nameList = "";
var generatedName = "";
var generatedClass = "";

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

function randomNameGenerator () {
  var firstNum = parseInt(Math.random() * (nameList.nameParts.firstNamePart.length));
  var secondNum = parseInt(Math.random() * (nameList.nameParts.secondNamePart.length));
  return nameList.nameParts.firstNamePart[firstNum] + nameList.nameParts.secondNamePart[secondNum];
}

// randomClassGenerator should inherit from randomNameGenerator

function randomClassGenerator () {
  var number = parseInt(Math.random() * (nameList.classes.length));
  return nameList.classes[number];
}

generatedName = randomNameGenerator();
generatedClass = randomClassGenerator();

print (generatedName + " the level 1 " + generatedClass + ".", "generated-name");

// Too much repetition here

jQuery("#generateNameButton").click(function (){
  generatedName = randomNameGenerator();
  generatedClass = randomClassGenerator();
  print (generatedName+ " the level 1 " + generatedClass + ".", "generated-name");
});
