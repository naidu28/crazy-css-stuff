var config = {
  "string" : "a",
  "color" : "white",
  "size" : "10"
}

$(document).ready(function () {
  console.log("hey");
  var letters = createAppendable();
  var root = $('#root');
  $(root).append(letters);
});

function createAppendable() {
  var letters = [];
  console.log("hey");
  for (var i = 0; i < config.string.length; i++) {
    var h = config.size*12 + "px", w = config.size*12 + "px";
    var letterNode = $("<div></div>").css({ "height" : h, "width" : w });
    console.log(config.string[i]+"("+config.size+", letterNode)");
    letterNode = eval(config.string[i]+"("+config.size+", letterNode)");
    letters.push(letterNode);
  }

  return letters;
}

function a(size, node) {
  var n = "<div></div>"
  for (var i = 0; i < size; i++) {
    var circle = $("<div></div>");
    $(circle).addClass("light-circle");
    $(circle).addClass("row");
    if (i == 0) {
      for (var j = 0; j < size; j++) {
        var c = $("<div></div>");
        $(c).addClass("light-circle");
        $(c).css("width", "10px");
        $(circle).append(c);
      }
    }

    $(node).append(circle);
  }

  /*var left = "<div></div>";
  $(left).addClass("column");
  for (var i = 0; i < size; i++) {
    var circle
  }*/

  console.log(node);

  return node;
}

function b(size) {

}

function c(size) {

}

function d(size) {

}

function e(size) {

}

function f(size) {

}
function g(size) {

}
function h(size) {

}
function i(size) {

}
function j(size) {

}
function l(size) {

}
function m(size) {

}
function n(size) {

}
function o(size) {

}
function p(size) {

}
function q(size) {

}
function r(size) {

}
function s(size) {

}
function t(size) {

}
function u(size) {

}
function v(size) {

}
function w(size) {

}
function x(size) {

}
function y(size) {

}
function z(size) {

}
function one(size) {

}
function two(size) {

}
function three(size) {

}
function four(size) {

}
function five(size) {

}
function six(size) {

}
function seven(size) {

}
function eight(size) {

}
function nine(size) {

}
function zero(size) {

}
