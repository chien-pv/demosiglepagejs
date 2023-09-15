var arr = [3, 5, 6, 77, 8];
let [x, y, z, k, l, m] = arr;

let abc = () => {
  var a = "Hello";
  return `<a> ${a} </a>`;
};

document.getElementsByTagName("h1")[0].innerHTML = abc();
document.getElementsByTagName("h1")[0].innerHTML = "Hello ABC";
