var firstNamePart = "Dor";
var secondNamePart = "nark";

jQuery("#generateButton").click(function() {
  jQuery("div#generated-name").html(firstNamePart + secondNamePart);
});
