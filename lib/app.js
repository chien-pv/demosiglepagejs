"use strict";

// console.log(window.location.pathname);

document.addEventListener("DOMContentLoaded", function () {
  document.body.addEventListener("click", function (e) {
    e.preventDefault();
    history.pushState(null, null, "/abc");
  });
  var pathname = window.location.pathname;
  switch (pathname) {
    case "/home":
      document.getElementById("app").innerHTML = home();
      break;
    case "/about":
      document.getElementById("app").innerHTML = about();
      break;
    default:
      document.getElementById("app").innerHTML = home();
      break;
  }
});