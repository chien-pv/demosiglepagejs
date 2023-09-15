let page = `<ul>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
            </ul>`;

let aboutpage = `<dl>
            <dt>Coffee</dt>
            <dd>- black hot drink</dd>
            <dt>Milk</dt>
            <dd>- white cold drink</dd>
          </dl>`;

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
