// import role from "../model/rolemodel";
// import addRole from "../model/rolemodel";
//To display the employees who are available for assign
var expanded = false;
function showCheckboxes() {
  let checkboxes = document.getElementById("checkboxes") as HTMLInputElement;
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}
