"use strict";
//Checking wheather the localstorage data is accidentally deleted
if (!localStorage.getItem("data")) {
    fetch("../JSON/employees.json")
        .then(function (response) { return response.json(); })
        .then(function (data) {
        localStorage.clear();
        localStorage.setItem("data", JSON.stringify(data));
    })
        .catch(function (error) {
        console.error("Error fetching JSON file:", error);
    });
    location.reload();
}
//Select all the checkboxes when head checkbox is selected
function selectAll() {
    var headBox = document.getElementsByClassName("head-check-box");
    var childBoxes = document.getElementsByClassName("check-box");
    var flag = false;
    for (var i = 0; i < childBoxes.length; i++) {
        if (headBox[0].checked == true) {
            childBoxes[i].checked = true;
            flag = true;
        }
        else {
            childBoxes[i].checked = false;
            flag = false;
        }
    }
    if (flag == true) {
        activateDelete();
    }
    else {
        deActivateDelete();
    }
}
//Activate Delete Button
function activateDelete() {
    var dltBtn = document.getElementsByClassName("delete");
    dltBtn[0].style.background = "red";
    dltBtn[0].style.cursor = "pointer";
    dltBtn[0].disabled = false;
}
//Deactivate Delete Button
function deActivateDelete() {
    var dltBtn = document.getElementsByClassName("delete");
    dltBtn[0].style.background = "#F89191";
    dltBtn[0].style.cursor = "default";
    dltBtn[0].disabled = true;
}
//Deselecting checkboxes individually includes deselecting head checkbox and toggling the delete button
function selectOne() {
    var headBox = document.getElementsByClassName("head-check-box");
    var childBoxes = document.getElementsByClassName("check-box");
    var flag_0 = 0, flag_1 = 0;
    for (var i = 0; i < childBoxes.length; i++) {
        if (childBoxes[i].checked == true) {
            flag_0 += 1;
        }
        else {
            flag_1 += 1;
        }
    }
    if (flag_1 >= 1) {
        headBox[0].checked = false;
    }
    else {
        headBox[0].checked = true;
    }
    if (flag_0 == 0) {
        deActivateDelete();
    }
    else {
        activateDelete();
    }
}
//Deleting Employee rows
function deleteRows() {
    var dt = localStorage.getItem("data");
    var data = JSON.parse(dt);
    var headBox = document.getElementsByClassName("head-check-box");
    var childBoxes = document.getElementsByClassName("check-box");
    var childclass = document.getElementsByClassName("emp-details");
    var empNO = document.getElementsByClassName("emp-no");
    var temp = 0;
    var _loop_1 = function (i) {
        if (childBoxes[i].checked == true) {
            temp = 0;
            if (data) {
                data.forEach(function (emp) {
                    if (empNO[i].innerText === emp.empNo && data) {
                        data.splice(temp, 1);
                    }
                    temp += 1;
                });
            }
        }
    };
    for (var i = 0; i < childclass.length; i++) {
        _loop_1(i);
    }
    localStorage.setItem("data", JSON.stringify(data));
    if (headBox[0].checked == true) {
        headBox[0].checked = false;
    }
    deActivateDelete();
    location.reload();
}
//Filtering the Employee data using Alphabets
function filterDataByAlphabet(char) {
    var check_char = document.getElementsByClassName("emp-name");
    var childclass = document.getElementsByClassName("emp-details");
    var button = document.getElementsByClassName("vector-element");
    var filter = document.getElementsByClassName("vector-image");
    var result = char.charCodeAt(0);
    if (!checkAlphabetPrevSelected(result)) {
        filter[0].src = "../Assets/filter.svg";
        for (var i = 0; i < check_char.length; i++) {
            if (check_char[i].innerHTML[0].toLowerCase() != char.toLowerCase()) {
                childclass[i].style.display = "none";
            }
            else {
                childclass[i].style.display = "";
            }
        }
        for (var i = 0; i < 26; i++)
            button[i].style.backgroundColor = "#F0F0F0";
        button[result - 65].style.backgroundColor = "#F44848";
    }
}
//Check whether the filter operation is performed on same alphabet
function checkAlphabetPrevSelected(result) {
    var check_char = document.getElementsByClassName("emp-name");
    var childclass = document.getElementsByClassName("emp-details");
    var button = document.getElementsByClassName("vector-element");
    var filter = document.getElementsByClassName("vector-image");
    if (button[result - 65].style.backgroundColor === "rgb(244, 72, 72)") {
        for (var i = 0; i < check_char.length; i++) {
            childclass[i].style.display = "";
        }
        button[result - 65].style.backgroundColor = "#F0F0F0";
        filter[0].src = "../Assets/filterBlack.svg";
        return true;
    }
    return false;
}
//To export the data as excel file
function exportData() {
    var rows = document.getElementsByClassName("emp-details");
    var empHead = document.getElementsByClassName("emp-head");
    var empName = document.getElementsByClassName("emp-name");
    var empEmail = document.getElementsByClassName("emp-mail");
    var csvData = [];
    var row = [];
    for (var j = 0; j < empHead.length; j++) {
        row.push(empHead[j].innerText);
        if (j == 0) {
            row.push("EMAIL");
        }
    }
    csvData.push(row.join(","));
    for (var i = 0; i < rows.length; i++) {
        var row_1 = [], cols = rows[i].querySelectorAll("td,th");
        row_1.push(empName[i].innerText);
        row_1.push(empEmail[i].innerText);
        for (var j = 1; j < cols.length; j++) {
            row_1.push(cols[j].innerText);
        }
        csvData.push(row_1.join(","));
    }
    var blob = new Blob([csvData.join("\n")], { type: "text/csv" });
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "data.csv";
    link.click();
}
//Displaying operation buttons like reset and apply when user selects any 1 of the filter option.
function displayButtons() {
    var buttons = document.getElementsByClassName("filter-reset-apply");
    var flag = checkOptionsClicked() || checkFiterPerformed();
    if (flag === false) {
        buttons[0].style.display = "none";
    }
    else {
        buttons[0].style.display = "flex";
    }
}
//check any filter performed on the employee data
function checkFiterPerformed() {
    var flag = false;
    var empRow = document.getElementsByClassName("emp-details");
    for (var i = 0; i < empRow.length; i++)
        if (empRow[i].style.display === "none") {
            flag = true;
        }
    return flag;
}
//Check Whether any options in dropdown are clicked
function checkOptionsClicked() {
    var flag = false;
    for (var i = 0; i < 3; i++) {
        if (cntArr[i] != 0) {
            flag = true;
        }
    }
    return flag;
}
//Loading Employee data
document.addEventListener("DOMContentLoaded", function (event) {
    var dat = localStorage.getItem("data");
    var data = JSON.parse(dat);
    createTableData(data);
});
//Creating EmployeeData from the local Storage
function createTableData(data) {
    data.forEach(function (emp) {
        var table = document.getElementById("employeeDataTable");
        var row = document.createElement("tr");
        row.classList.add("emp-details");
        var checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.addEventListener("click", selectOne);
        checkBox.classList.add("check-box");
        row.appendChild(checkBox);
        var tdata = document.createElement("td");
        var empImgDiv = document.createElement("div");
        empImgDiv.classList.add("emp-image");
        var innerDiv = document.createElement("div");
        var img = document.createElement("img");
        img.src = "../Assets/Anand.jpg";
        img.classList.add("user-img");
        innerDiv.appendChild(img);
        empImgDiv.appendChild(innerDiv);
        var innerDiv2 = document.createElement("div");
        var p = document.createElement("p");
        var b = document.createElement("b");
        b.classList.add("emp-name");
        var br = document.createElement("br");
        b.innerText = emp.employeeName;
        p.appendChild(b);
        p.appendChild(br);
        var p1 = document.createElement("p");
        p1.classList.add("emp-mail");
        p1.innerText = emp.employeeEmail;
        p.appendChild(p1);
        innerDiv2.appendChild(p);
        innerDiv2.classList.add("user-details");
        empImgDiv.appendChild(innerDiv);
        empImgDiv.appendChild(innerDiv2);
        tdata.appendChild(empImgDiv);
        row.appendChild(tdata);
        var tdata2 = document.createElement("td");
        tdata2.innerText = emp.location;
        tdata2.classList.add("emp-location");
        row.appendChild(tdata2);
        var tdata3 = document.createElement("td");
        tdata3.innerText = emp.department;
        tdata3.classList.add("emp-department");
        row.appendChild(tdata3);
        var tdata4 = document.createElement("td");
        tdata4.innerText = emp.role;
        row.appendChild(tdata4);
        var tdata5 = document.createElement("td");
        tdata5.innerText = emp.empNo;
        tdata5.classList.add("emp-no");
        row.appendChild(tdata5);
        var tdata6 = document.createElement("td");
        var status = document.createElement("button");
        status.innerText = emp.status;
        status.classList.add("active-status");
        if (emp.status == "In Active") {
            status.style.backgroundColor = "#F89191";
            status.style.color = "white";
        }
        tdata6.appendChild(status);
        row.appendChild(tdata6);
        var tdata7 = document.createElement("td");
        tdata7.innerText = emp.joiningDate;
        row.appendChild(tdata7);
        var tdata8 = document.createElement("div");
        tdata8.classList.add("ellipsis-menu");
        var p8 = document.createElement("i");
        p8.classList.add("fa");
        p8.classList.add("fa-ellipsis-h");
        p8.classList.add("ellipsis-charc");
        tdata8.appendChild(p8);
        var innerdiv8 = document.createElement("div");
        innerdiv8.classList.add("menu-options");
        tdata8.appendChild(innerdiv8);
        var option1 = document.createElement("div");
        option1.classList.add("menu-option");
        option1.innerText = "View Details";
        var option2 = document.createElement("div");
        option2.classList.add("menu-option");
        option2.classList.add("edit-inf");
        option2.innerText = "Edit";
        var td8 = document.createElement("td");
        var option3 = document.createElement("div");
        option3.classList.add("menu-option");
        option3.classList.add("mo-dlt");
        option3.innerText = "Delete";
        innerdiv8.appendChild(option1);
        innerdiv8.appendChild(option2);
        innerdiv8.appendChild(option3);
        td8.appendChild(tdata8);
        row.appendChild(td8);
        table.appendChild(row);
    });
}
//Sorting the Employee Table
function sortTable(colIndex, ord) {
    var table, rows, switching, i, shouldSwitch = false, switchcount = 0, d1, d2;
    table = document.getElementById("employeeDataTable");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < rows.length - 1; i++) {
            shouldSwitch = false;
            var x = rows[i].getElementsByTagName("TD")[colIndex];
            var y = rows[i + 1].getElementsByTagName("TD")[colIndex];
            if (colIndex == 6) {
                d1 = new Date(x.innerHTML.split("/").reverse().join(", "));
                d2 = new Date(y.innerHTML.split("/").reverse().join(", "));
            }
            if (ord == "asc") {
                if (colIndex == 6 && d1 && d2) {
                    if (d1 > d2) {
                        shouldSwitch = true;
                        break;
                    }
                }
                else {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
            else if (ord == "desc") {
                if (colIndex == 6 && d1 && d2) {
                    if (d1 < d2) {
                        shouldSwitch = true;
                        break;
                    }
                }
                else {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        }
        else {
            if (switchcount == 0 && ord == "asc") {
                ord = "desc";
                switching = true;
            }
        }
    }
}
//Click Events
document.addEventListener("click", function (event) {
    dispellipsisMenu(event);
    editInfo(event);
    deleteBtnEllipseMenu(event);
    clickOptionsSelect(event);
});
// check whether any click event happened over the select menus in filter
function clickOptionsSelect(event) {
    var dropDown = document.getElementsByClassName("dropdown");
    var flag = false;
    var dropdownContent = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropDown.length; i++) {
        if (dropDown[i].contains(event.target)) {
            flag = true;
            countSelectedOptions(i);
            countDisplay(i);
        }
        else {
            if (dropdownContent[i].classList.contains("show")) {
                dropdownContent[i].classList.remove("show");
            }
        }
    }
    if (flag == false) {
        makeAllDropDownsClose();
    }
}
//Implementation of Delete operation in Ellipsemenu
function deleteBtnEllipseMenu(event) {
    var buttons = document.getElementsByClassName("mo-dlt");
    var childBoxes = document.getElementsByClassName("check-box");
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].contains(event.target)) {
            childBoxes[i].checked = true;
            deleteRows();
        }
        else {
        }
    }
}
//To Edit Information using ellipsismenu edit option
function editInfo(event) {
    var empNO = document.getElementsByClassName("emp-no");
    var dt = localStorage.getItem("data");
    var data = JSON.parse(dt);
    var editInfo = document.getElementsByClassName("edit-inf");
    var _loop_2 = function (i) {
        if (editInfo[i].contains(event.target)) {
            data.forEach(function (emp) {
                if (empNO[i].innerText === emp.empNo) {
                    localStorage.setItem("data1", JSON.stringify(emp));
                    window.location.href = "addemployee.html";
                }
            });
        }
    };
    for (var i = 0; i < editInfo.length; i++) {
        _loop_2(i);
    }
}
//To display ellipsis menu in the employee table
function dispellipsisMenu(event) {
    var ellipsisMenu = document.getElementsByClassName("ellipsis-menu");
    var menuOptions = document.querySelectorAll(".menu-options");
    for (var i = 0; i < ellipsisMenu.length; i++)
        if (!ellipsisMenu[i].contains(event.target)) {
            menuOptions[i].style.display = "none";
        }
        else {
            menuOptions[i].style.display = "block";
        }
}
//To close all select dropdowns when we click outside of their scope
function makeAllDropDownsClose() {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < 3; i++) {
        if (dropdowns[i].classList.contains("show")) {
            dropdowns[i].classList.remove("show");
        }
    }
}
var cntArr = [0, 0, 0];
//To count the selected options in the particular select menu
function countSelectedOptions(n) {
    var checkBoxes = document.getElementsByClassName("status-check");
    var cntOptions = [2, 4, 4];
    var temp = cntOptions.slice(0, n).reduce(function (a, b) { return a + b; }, 0);
    var cnt = 0;
    for (var i = 0; i < cntOptions[n]; i++) {
        if (checkBoxes[temp + i].checked === true) {
            cnt += 1;
        }
    }
    cntArr[n] = cnt;
    displayButtons();
    return cnt;
}
//To display the count in the select menu
function countDisplay(n) {
    var button = document.getElementsByClassName("dropbtn");
    var cnt;
    var str = ["Status", "Location", "Department"];
    for (var i = 0; i < 3; i++) {
        cnt = countSelectedOptions(i);
        if (cnt >= 1) {
            button[i].innerText = String(cnt) + " Selected";
        }
        else {
            button[i].innerText = str[i];
        }
    }
}
function filterByUserInputs() {
    var status, dept, loc;
    var statusCls = document.getElementsByClassName("active-status");
    var location = document.getElementsByClassName("emp-location");
    var department = document.getElementsByClassName("emp-department");
    var empRow = document.getElementsByClassName("emp-details");
    status = getEntriesSelected(0);
    loc = getEntriesSelected(1);
    dept = getEntriesSelected(2);
    for (var i = 0; i < statusCls.length; i++) {
        var flag_2 = false;
        if (status.length) {
            if (status.indexOf(statusCls[i].innerText.toLowerCase()) == -1) {
                flag_2 = true;
            }
        }
        if (loc.length) {
            if (loc.indexOf(location[i].innerHTML.toLowerCase()) == -1) {
                flag_2 = true;
            }
        }
        if (dept.length) {
            if (dept.indexOf(department[i].innerHTML.toLowerCase()) == -1) {
                flag_2 = true;
            }
        }
        if (flag_2 == true) {
            empRow[i].style.display = "none";
        }
        else {
            empRow[i].style.display = "";
        }
    }
}
function getEntriesSelected(n) {
    var arr = [];
    var checkBoxes = document.getElementsByClassName("status-check");
    var cntOptions = [2, 4, 4];
    var temp = cntOptions.slice(0, n).reduce(function (a, b) { return a + b; }, 0);
    for (var i = 0; i < cntOptions[n]; i++) {
        if (checkBoxes[temp + i].checked === true) {
            arr.push(checkBoxes[temp + i].value.toLowerCase());
        }
    }
    return arr;
}
function selectDropDown(n) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    if (dropdowns[n].classList.contains("show")) {
        dropdowns[n].classList.remove("show");
    }
    else {
        dropdowns[n].classList.add("show");
    }
}
