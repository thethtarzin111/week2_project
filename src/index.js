const submitButton = document.getElementById("submit-data");

submitButton.addEventListener("click", () => {
  let table = document.getElementById("data-table");
  let row = table.insertRow(4);
  let adminY = document.getElementById("input-admin");
  let column1 = row.insertCell(0);
  let column2 = row.insertCell(1);
  let column3 = row.insertCell(2);
  let column4 = row.insertCell(3);
  column1.innerHTML = document.getElementById("input-username").value;
  column2.innerHTML = document.getElementById("input-email").value;
  column3.innerHTML = document.getElementById("input-address").value;

  if (adminY.checked) {
    column4.innerHTML = "X";
  }
  console.log(table.rows.length);
});

let emptyTableButton = document.getElementById("empty-table");
emptyTableButton.addEventListener("click", () => {
  let table = document.getElementById("data-table");
  for (let i = 0; i <= table.rows.length + 1; i++) {
    table.deleteRow(1);
  }
});
