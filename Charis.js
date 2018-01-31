function coverImage() {
  var image = document.getElementById("projectOne").src="Owen.jpg";
}

function returnToNormal() {
  var image = document.getElementById("projectOne").src="building.jpg";
}

//menu script
var toggleStatus = 1;
function toggleMenu() {
  if (toggleStatus == 1) {
    document.getElementById("topMenu").style.left = "-15em";
    toggleStatus = 0;
  } else if(toggleStatus == 0) {
    document.getElementById("topMenu").style.left = "0px";
    return toggleStatus = 1;
  }
}

//date script
//document.getElementById("date").innerHTML = Date();
var day;

switch (new Date().getDay()) {
  case 1:
    day = "Monday";
      break;
  case 2:
    day = "Tuesday";
      break;
  case 3:
    day = "Wednesday";
      break;
  case 4:
    day = "Thursday";
      break;
  case 5:
    day = "Friday";
      break;
  case 6:
    day = "Saturday";
      break;
  case 0:
    day = "Sunday";
}

document.getElementById("date").innerHTML = day;

//loop
var names = ["one", "two", "three", "four", "five"]
var text = "";

for (var i = 0; i < names.length; i++ ) {
  text += names[i] + "<br>";
}

document.getElementById("loop").innerHTML = text;
