const submitButton = document.getElementById("submit-data");
submitButton.addEventListener("click", () => {
  let y = 0;
  let table = document.getElementById("data-table");
  let targetTDs = table.querySelectorAll("tr > td:first-child");
  let columns = table.querySelectorAll("tr>td");
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

  for (let i = 1; i < targetTDs.length; i++) {
    let td = targetTDs[i];
    console.log(td.innerHTML);
    if (document.getElementById("input-username").value === td.innerHTML) {
      //console.log("The same username");
      columns[5 + y].innerHTML = document.getElementById("input-email").value;
      columns[6 + y].innerHTML = document.getElementById("input-address").value;
      if (document.getElementById("input-admin").checked) {
        columns[7 + y].innerHTML = "X";
      } else {
        columns[7 + y].innerHTML = "-";
      }
      table.deleteRow(-1);
      break;
    } else {
      y = y + 4;
      if (
        i > targetTDs.length &&
        td.innerHTML !== document.getElementById("input-username").value
      ) {
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
      }
    }
  }
});

let emptyTableButton = document.getElementById("empty-table");
emptyTableButton.addEventListener("click", () => {
  let table = document.getElementById("data-table");
  for (let i = 0; i <= table.rows.length + 1; i++) {
    table.deleteRow(1);
  }
});

const firstColData = document.getElementById("print-firstCol");
firstColData.addEventListener("click", () => {
  let table = document.getElementById("data-table");
  let targetTDs = table.querySelectorAll("tr > td:first-child");

  for (let i = 1; i < targetTDs.length; i++) {
    let td = targetTDs[i];
    console.log(td.innerHTML);
  }
});

const uploadButton = document.getElementById("input-image");
uploadButton.addEventListener("click", () => {
  let table = document.getElementById("data-table");
  let row = table.insertRow(1);
  let column5 = row.insertCell(0);

  let file = document.getElementsByName("input-image")[0].files[0];
  let src = URL.createObjectURL(file);
  let image = document.createElement("img");
  image.src = src;
  column5.appendChild(image);
});
