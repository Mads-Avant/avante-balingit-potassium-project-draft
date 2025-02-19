const persTypes = ["WRDS", "RIDL", "CONN", "WDCRD", "DETEC", "GRDM", "STRAT", "CIPMD"]

function updateInputs() {
  let numPpl = parseInt(document.getElementById("numPpl").value);
  let database = document.getElementById("inputTypes")
  database.innerHTML = "";
  
  for (let i=0; i < numPpl; i++) {
    database.innerHTML += "<label>Person"+ (i+1) + ": </label>"
    let select = "<select id='person" + i + "'>";
    for (let j=0; j<persTypes.length; j++){
      select += "<option value='" + persTypes[j] + "'>" + persTypes[j] + "</option>"
    }
    select += "</select>";
    database.innerHTML += select + "<br>"
    
    }
}

function generateMatrix() {
  let numPpl = parseInt(document.getElementById("numPpl").value);
  let typesToTest = []
  
  for (let i=0; i < numPpl; i++) {
    let person = document.getElementById("person" + i).value;
    typesToTest.push(person);
  }
  
  let tableMatrix = document.getElementById("tableMatrix");
  tableMatrix.innerHTML = '';
  let fullTable = "<table><tr><th></th>"
  
  for (let i=0; i<typesToTest.length; i++){
    fullTable += "<th>" + typesToTest[i] + "</th>"
  }
  fullTable += "</tr>"
  
  for (let i=0; i<typesToTest.length; i++){
    let row = "<tr><th>"+ typesToTest[i] + "</th>"
    
    for (let j=0; j<typesToTest.length; j++){
      let compat = computeCompat(typesToTest[i], typesToTest[j]);
      row += "<td>" + compat + "</td>"
    }
    row += "</tr>"
    fullTable += row
    tableMatrix.innerHTML = fullTable;
  }
  document.getElementById("compatMatrix").style.display = "block";
  
  
}


function computeCompat(type1, type2) {
    let compatData = {
    // "Perfect", "Good", "Okay", "Bad", "Mess",
    "WRDS":  {"WRDS":"Good", "RIDL":"Good", "CONN":"Good", "WDCRD":"Okay", "DETEC":"Good", "GRDM":"Perfect", "STRAT":"Okay", "CIPMD":"Perfect"},
    "RIDL":  {"WRDS":"Good", "RIDL":"Good", "CONN":"Perfect", "WDCRD":"Okay", "DETEC":"Perfect", "GRDM":"Good", "STRAT":"Bad", "CIPMD":"Mess"},
    "CONN":  {"WRDS":"Good", "RIDL":"Perfect", "CONN":"Good", "WDCRD":"Good", "DETEC":"Good", "GRDM":"Good", "STRAT":"Bad", "CIPMD":"Good"},
    "WDCRD": {"WRDS":"Okay", "RIDL":"Okay", "CONN":"Good", "WDCRD":"Good", "DETEC":"Mess", "GRDM":"Mess", "STRAT":"Good", "CIPMD":"Bad"},
    "DETEC": {"WRDS":"Good", "RIDL":"Perfect", "CONN":"Good", "WDCRD":"Mess", "DETEC":"Good", "GRDM":"Okay", "STRAT":"Bad", "CIPMD":"Perfect"},
    "GRDM":  {"WRDS":"Perfect", "RIDL":"Good", "CONN":"Good", "WDCRD":"Mess", "DETEC":"Okay", "GRDM":"Good", "STRAT":"Okay", "CIPMD":"Okay"},
    "STRAT": {"WRDS":"Okay", "RIDL":"Bad", "CONN":"Bad", "WDCRD":"Good", "DETEC":"Bad", "GRDM":"Okay", "STRAT":"Good", "CIPMD":"Mess"},
    "CIPMD": {"WRDS":"Perfect", "RIDL":"Mess", "CONN":"Good", "WDCRD":"Okay", "DETEC":"Perfect", "GRDM":"Okay", "STRAT":"Mess", "CIPMD":"Good"},
  }
  
  if (compatData[type1] && compatData[type1][type2]){
    return compatData[type1][type2];
  }
  
}
updateInputs()
