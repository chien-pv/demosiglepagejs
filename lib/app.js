"use strict";

var page = "<ul>\n            <li>Coffee</li>\n            <li>Tea</li>\n            <li>Milk</li>\n            </ul>";
var aboutpage = "<dl>\n            <dt>Coffee</dt>\n            <dd>- black hot drink</dd>\n            <dt>Milk</dt>\n            <dd>- white cold drink</dd>\n          </dl>";

// console.log(window.location.pathname);

var pathname = window.location.pathname;
switch (pathname) {
  case "/home":
    document.getElementById("app").innerHTML = page;
    break;
  case "/about":
    document.getElementById("app").innerHTML = aboutpage;
    break;
  default:
    document.getElementById("app").innerHTML = page;
    break;
}