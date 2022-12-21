let enterRows;
let enterCells;

document.getElementById("myButton").onclick = function () {
  enterRows = document.getElementById("numberRows").value;
  console.log(enterRows);
};

document.getElementById("myButton1").onclick = function () {
  enterCells = document.getElementById("numberCollumns").value;
  console.log(enterCells);
};

function myDynamicTable() {
  let table = document.createElement("table");
  let tableBody = document.createElement("tbody");

  // let enterRows = parseInt(prompt("Enter number of rows"));
  // let enterCells = parseInt(prompt("Enter number of collumns"));

  for (i = 1; i <= enterRows; i++) {
    let rows = document.createElement("tr");

    for (j = 1; j <= enterCells; j++) {
      let cells = document.createElement("td");
      let cellsText = document.createTextNode(`Row ${i} Collumn ${j}`);

      cells.style.backgroundColor = "red";

      cells.appendChild(cellsText);
      rows.appendChild(cells);
    }

    tableBody.appendChild(rows);
  }

  table.appendChild(tableBody);
  document.body.appendChild(table);

  table.setAttribute("border", "10");
}
