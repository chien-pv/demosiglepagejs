var users = [
  { firstName: "Nguyen Van", lastName: "A", email: "nguyenvana@gmail.com" },
  { firstName: "Nguyen Van", lastName: "B", email: "nguyenvanb@gmail.com" },
  { firstName: "Nguyen Van", lastName: "C", email: "nguyenvanC@gmail.com" },
];

const home = () => {
  let page = `<table class="table">
    <thead class="table-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
    </thead>
    <tbody>
      ${listData(users)}
    </tbody>
</table>`;
  return page;
};

function listData(users) {
  let list = ``;

  for (const item of users) {
    list = list + buildItem(item);
  }

  return list;
}

function buildItem(item) {
  let { firstName, lastName, email } = item;
  return `<tr>
            <th scope="row">1</th>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${email}</td>
            <td>
            <button type="button" class="btn btn-info">Edit</button>
            <button type="button" class="btn btn-danger">Delete</button>
            <button id="abc" type="button" class="btn btn-success">Detail</button>
            </td>
          </tr>`;
}

window.onload = function () {
  document.getElementById("abc").onclick = function () {
    alert("abc");
  };
};
