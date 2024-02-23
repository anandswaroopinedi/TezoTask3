"use strict";
// import role from "../model/rolemodel";
// import addRole from "../model/rolemodel";
//To display the employees who are available for assign
var expanded = false;
function showCheckboxes() {
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    }
    else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}
