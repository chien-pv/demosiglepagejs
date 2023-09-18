"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var users = [{
  firstName: "Nguyen Van",
  lastName: "A",
  email: "nguyenvana@gmail.com"
}, {
  firstName: "Nguyen Van",
  lastName: "B",
  email: "nguyenvanb@gmail.com"
}, {
  firstName: "Nguyen Van",
  lastName: "C",
  email: "nguyenvanC@gmail.com"
}];
var home = function home() {
  var page = "<table class=\"table\">\n    <thead class=\"table-dark\">\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">FirstName</th>\n      <th scope=\"col\">LastName</th>\n      <th scope=\"col\">Email</th>\n      <th scope=\"col\">Action</th>\n    </tr>\n    </thead>\n    <tbody>\n      ".concat(listData(users), "\n    </tbody>\n</table>");
  return page;
};
function listData(users) {
  var list = "";
  var _iterator = _createForOfIteratorHelper(users),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      list = list + buildItem(item);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return list;
}
function buildItem(item) {
  var firstName = item.firstName,
    lastName = item.lastName,
    email = item.email;
  return "<tr>\n            <th scope=\"row\">1</th>\n            <td>".concat(firstName, "</td>\n            <td>").concat(lastName, "</td>\n            <td>").concat(email, "</td>\n            <td>\n            <button type=\"button\" class=\"btn btn-info\">Edit</button>\n            <button type=\"button\" class=\"btn btn-danger\">Delete</button>\n            <button id=\"abc\" type=\"button\" class=\"btn btn-success\">Detail</button>\n            </td>\n          </tr>");
}
window.onload = function () {
  document.getElementById("abc").onclick = function () {
    alert("abc");
  };
};