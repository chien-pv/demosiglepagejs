"use strict";

var arr = [3, 5, 6, 77, 8];
var x = arr[0],
  y = arr[1],
  z = arr[2],
  k = arr[3],
  l = arr[4],
  m = arr[5];
var abc = function abc() {
  var a = "Hello";
  return "<a> ".concat(a, " </a>");
};
document.getElementsByTagName("h1")[0].innerHTML = abc();
document.getElementsByTagName("h1")[0].innerHTML = "Hello ABC";