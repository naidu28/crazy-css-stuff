var arrowElems;
var arrowIndex = 0;

$(document).ready(function() {
  arrowElems = $(".animated-arrow").children();
  console.log(arrowElems);
  window.setInterval(function() {
    if (arrowIndex == arrowElems.length) {
      arrowIndex = 0;
    }

    var prev;
    if (arrowIndex == 0) {
      prev = arrowElems[arrowElems.length - 1];
    } else {
      prev = arrowElems[arrowIndex - 1];
    }
    var curr = arrowElems[arrowIndex];

    //change color style on these elements
    console.log(prev);
    console.log(curr);

    var prevElems = $(prev).children();
    var currElems = $(curr).children();
    if (currElems.length > 0) {
      for (var i = 0; i < currElems.length; i++) {
        currElems[i].style.backgroundColor = "#FA9223";
      }
    } else {
      curr.style.backgroundColor = "#FA9223";
    }

    if (prevElems.length > 0) {
      for (var i = 0; i < prevElems.length; i++) {
        prevElems[i].style.backgroundColor = "white";
      }
    } else {
      prev.style.backgroundColor = "white";
    }

    arrowIndex++;
  }, 130);
})
