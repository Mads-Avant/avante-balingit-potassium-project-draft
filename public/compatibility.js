function addRow() {
  var table = document.getElementById('inputTable').getElementsByTagName('tbody')[0]; // Gets <tbody> element
  var newRow = table.insertRow(); // Inserts row at end
  var cell1 = newRow.insertCell(0); // Inserts cell in new row
  var cell2 = newRow.insertCell(1); // Inserts cell in new row
  
  // Makes the cells an input element
  cell1.innerHTML = '<input type="text">';
  cell2.innerHTML = '<input type="text">';
}

function deleteRow() {
  var table = document.getElementById('inputTable').getElementsByTagName('tbody')[0];// Gets <tbody> element
  if (table.rows.length <= 2) { // checks how many rows present
    alert("Minimum 2 inputs"); 
  }
  
  else {
    table.deleteRow(table.row) // deletes row
  }
}

function finish() {
  
}