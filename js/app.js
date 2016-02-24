var content = "";
var generatedName = "";
var generatedClass = "";

var jsonContent = new XMLHttpRequest();
jsonContent.onreadystatechange = function() {
  if (jsonContent.readyState == 4 && jsonContent.status == 200) {
  content = JSON.parse(jsonContent.responseText);
  }
};
jsonContent.open("GET", "http://www.lightly.se/code/osr-name-generator/js/content.json", false);
jsonContent.send();

function print (message, div){
  var divId = document.getElementById(div);
  divId.innerHTML = message;
}

function randomNameGenerator () {
  var firstNum = parseInt(Math.random() * (content.nameParts.firstNamePart.length));
  var secondNum = parseInt(Math.random() * (content.nameParts.secondNamePart.length));
  return content.nameParts.firstNamePart[firstNum] + content.nameParts.secondNamePart[secondNum];
}

function randomClassGenerator () {
  var number = parseInt(Math.random() * (content.classes.length));
  return content.classes[number];
}

function newCharacter () {
  generatedName = randomNameGenerator();
  generatedClass = randomClassGenerator();
  print (generatedName + " the level 1 " + generatedClass + ".", "generated-name");
}

newCharacter ();

jQuery("#generateNameButton").click(function (){
  newCharacter ();
});
