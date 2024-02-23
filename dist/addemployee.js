"use strict";
// import Emp from "../model/employeeModel" import Employee from "../model/employeeModel";
var Emp = /** @class */ (function () {
    function Emp(employeeName, employeeEmail, location, department, role, empNo, status, joinDt) {
        this.employeeName = employeeName;
        this.employeeEmail = employeeEmail;
        this.location = location;
        this.department = department;
        this.role = role;
        this.empNo = empNo;
        this.status = status;
        this.joinDt = joinDt;
    }
    return Emp;
}());
// Displaying the shortest nav bar
function disperseShortNav() {
    var shortNavBar = document.getElementsByClassName("vertical-shview");
    var navBar = document.getElementsByClassName("left-bodysec");
    var rightBodySec = document.getElementsByClassName("right-bodysec");
    var formButtons = document.getElementsByClassName("form-buttons");
    navBar[0].style.display = "none";
    shortNavBar[0].style.display = "flex";
    rightBodySec[0].style.width = "93%";
    formButtons[0].style.marginLeft = "47%";
}
//Displaying the expanded nav bar
function expandNavBar() {
    var shortNavBar = document.getElementsByClassName("vertical-shview");
    var rightBodySec = document.getElementsByClassName("right-bodysec");
    var formButtons = document.getElementsByClassName("form-buttons");
    shortNavBar[0].style.display = "none";
    var navBar = document.getElementsByClassName("left-bodysec");
    navBar[0].style.display = "";
    rightBodySec[0].style.width = "83%";
    formButtons[0].style.marginLeft = "53%";
}
var flag = 0;
var input = document.getElementsByClassName("form-input");
function dispErrorMsg(n, className) {
    var errMsg = document.getElementsByClassName(className);
    errMsg[0].style.display = "flex";
    input[n].style.border = "3px solid red";
}
function hideErrMsg(n, className) {
    var errMsg = document.getElementsByClassName(className);
    errMsg[0].style.display = "none";
    input[n].style.border = "1px solid black";
}
function dispBorderInput(n, className) {
    var errMsg = document.getElementsByClassName(className);
    errMsg[0].style.display = "none";
    input[n].style.border = "3px solid #5FA5FF";
    input[n].style.outline = "none";
}
function dispDangerText(n, msg) {
    var text = document.getElementsByClassName("danger-msg")[n];
    text.innerText = msg;
}
function checkFname(k) {
    var fname = document.getElementById("first-name").value;
    if (fname == "") {
        dispErrorMsg(1, "text-danger-fname");
        flag = 1;
        dispDangerText(1, "This field is required");
    }
    else {
        var regName = /^[a-zA-Z]+([ \-']{0,1}[a-zA-Z]+){0,2}[.]{0,1}$/;
        if (!regName.test(fname)) {
            dispDangerText(1, "Use only alphabets");
            dispErrorMsg(1, "text-danger-fname");
            flag = 1;
        }
        else {
            flag = 0;
            if (k == 0) {
                dispBorderInput(1, "text-danger-fname");
            }
            else {
                hideErrMsg(1, "text-danger-fname");
            }
        }
    }
}
function checkLname(k) {
    var lname = document.getElementById("last-name").value;
    if (lname == "") {
        dispErrorMsg(2, "text-danger-lname");
        flag = 1;
        dispDangerText(2, "This field is required");
    }
    else {
        var regName = /^[a-zA-Z]+([ \-']{0,1}[a-zA-Z]+){0,2}[.]{0,1}$/;
        if (!regName.test(lname)) {
            dispDangerText(2, "Use only alphabets");
            dispErrorMsg(2, "text-danger-lname");
            flag = 1;
        }
        else {
            flag = 0;
            if (k == 0) {
                dispBorderInput(2, "text-danger-lname");
            }
            else {
                hideErrMsg(2, "text-danger-lname");
            }
        }
    }
}
function checkEmpNo(k) {
    var empid = document.getElementById("employee-no").value;
    if (empid == "") {
        dispErrorMsg(0, "text-danger-empno");
        flag = 1;
        dispDangerText(0, "This field is required");
    }
    else {
        if (!/^[A-Za-z0-9]*$/.test(empid)) {
            dispDangerText(0, "Use only alphabets and numbers");
            dispErrorMsg(0, "text-danger-empno");
            flag = 1;
        }
        else {
            flag = 0;
            if (k == 0) {
                dispBorderInput(0, "text-danger-empno");
            }
            else {
                hideErrMsg(0, "text-danger-empno");
            }
        }
    }
}
function checkEmail(k) {
    var email = document.getElementById("email").value;
    if (email == "") {
        dispErrorMsg(4, "text-danger-email");
        flag = 1;
        dispDangerText(3, "This field is required");
    }
    else {
        var regName = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!regName.test(email)) {
            dispDangerText(3, "Fill the email correctly");
            dispErrorMsg(4, "text-danger-email");
            flag = 1;
        }
        else {
            flag = 0;
            if (k == 0) {
                dispBorderInput(4, "text-danger-email");
            }
            else {
                hideErrMsg(4, "text-danger-email");
            }
        }
    }
}
function checkMobNo() {
    var mobno = document.getElementById("mob-no").value;
    if (mobno && !/^\d{10}$/.test(mobno)) {
        dispDangerText(4, "use only numbers and length should be 10");
        dispErrorMsg(5, "text-danger-mobno");
    }
    else {
        hideErrMsg(5, "text-danger-mobno");
    }
}
function checkJoinDt() {
    var input1 = document.getElementsByClassName("form-input-large");
    var errMsgJnDate = document.getElementsByClassName("text-danger-jndate");
    var joinDt = document.getElementById("joining-date").value;
    if (joinDt == "") {
        errMsgJnDate[0].style.display = "flex";
        input1[0].style.border = "3px solid red";
        flag = 1;
    }
    else {
        errMsgJnDate[0].style.display = "none";
        input1[0].style.border = "1px solid black";
    }
}
function checkProfileImg() {
    var fileName = document.getElementById("profileImg").value;
    var allowedExtensions = new Array("jpg", "png", "gif");
    var formButtons = document.getElementsByClassName("form-buttons");
    if (fileName === undefined) {
        formButtons[0].style.position = "relative";
        flag = 1;
        alignItemsWrtProfile("column", "flex", "4%", "none", "50%");
    }
    else {
        var file_extension = fileName.split('.').pop();
        var temp = 0;
        for (var i = 0; i < allowedExtensions.length; i++) {
            if (allowedExtensions[i] == file_extension) {
                temp = 1;
                alignItemsWrtProfile("row", "none", "0%", "", "53%");
                break;
            }
        }
        if (temp == 0) {
            alignItemsWrtProfile("column", "flex", "4%", "none", "90%");
            flag = 1;
        }
    }
}
function alignItemsWrtProfile(direction, errDisp, marTop, editDisp, marLeft) {
    var edit = document.getElementsByClassName("edit-button");
    var container = document.getElementsByClassName("emp-container");
    var errMsg = document.getElementsByClassName("text-danger-img");
    var empInf = document.getElementsByClassName("emp-info");
    var formButtons = document.getElementsByClassName("form-buttons");
    container[0].style.flexDirection = direction;
    errMsg[0].style.display = errDisp;
    empInf[0].style.marginTop = marTop;
    edit[0].style.display = editDisp;
    formButtons[0].style.marginLeft = marLeft;
}
function checkEmpNoPresent() {
    var dt = localStorage.getItem("data");
    var empid = document.getElementById("employee-no").value;
    var data = JSON.parse(dt);
    var ind = 0;
    var temp = 0;
    var flag1 = false;
    data.forEach(function (emp) {
        if (empid === emp.empNo) {
            flag1 = true;
            ind = temp;
            console.log(empid);
        }
        temp += 1;
    });
    return { ind: ind, flag1: flag1 };
}
function deleteEmployee(ind) {
    var dt = localStorage.getItem("data");
    var data = JSON.parse(dt);
    data.splice(ind, 1);
    localStorage.setItem("data", JSON.stringify(data));
    localStorage.removeItem("data1");
}
document.getElementById('myButton').addEventListener('click', function (event) {
    event.preventDefault();
    checkFname(0);
    checkLname(0);
    checkEmpNo(0);
    checkEmail(0);
    checkJoinDt();
    checkProfileImg();
    var result = checkEmpNoPresent();
    var ind = result.ind;
    var flag1 = result.flag1;
    var data1 = localStorage.getItem("data1");
    if (data1)
        data1 = JSON.parse(data1);
    if (data1 && flag1 == true) {
        deleteEmployee(ind);
    }
    else if (flag1 == true) {
        dispDangerText(0, "Duplicated Employee no found");
        dispErrorMsg(0, "text-danger-empno");
        flag = 1;
    }
    if (flag == 0) {
        createEmployee();
    }
    else {
        console.log("Unsuccesfull attempt");
    }
});
function createEmployee() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    var email = document.getElementById("email").value;
    var empid = document.getElementById("employee-no").value;
    var lname = document.getElementById("last-name").value;
    var fname = document.getElementById("first-name").value;
    var role = document.getElementById("job-title").value;
    var location = document.getElementById("location").value;
    var dept = document.getElementById("department").value;
    var joinDt = document.getElementById("joining-date").value;
    console.log(joinDt);
    var jdt = joinDt.substring(8, 10) + "/" + joinDt.substring(5, 7) + "/" + joinDt.substring(0, 4);
    var newEmp = new Emp(fname + " " + lname, email, location, dept, role, empid, "Active", jdt);
    var dt = localStorage.getItem("data");
    var data = JSON.parse(dt);
    data.push(newEmp);
    localStorage.setItem("data", JSON.stringify(data));
    console.log("anand");
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    setTimeout(function () { window.location.href = "employee.html"; }, 1000);
}
function cancel() {
    var data1 = localStorage.getItem("data1");
    if (data1)
        localStorage.removeItem("data1");
    window.location.href = 'employee.html';
}
function checkImage() {
    var profileImg = document.getElementsByClassName('profile-pic');
    var fileName = document.getElementById("profileImg").value;
    var fileCrctName = "../Assets/" + fileName.split('\\').pop();
    if (fileCrctName) {
        profileImg[0].src = fileCrctName;
    }
}
var input = document.getElementsByClassName("form-input");
var input1 = document.getElementsByClassName("form-input-large");
document.getElementById("email").onfocus = function () {
    dispBorderInput(4, "text-danger-email");
};
document.getElementById("email").onblur = function () {
    checkEmail(1);
};
document.getElementById("first-name").onfocus = function () {
    dispBorderInput(1, "text-danger-fname");
};
document.getElementById("first-name").onblur = function () {
    checkFname(1);
};
document.getElementById("last-name").onfocus = function () {
    dispBorderInput(2, "text-danger-lname");
};
document.getElementById("last-name").onblur = function () {
    checkLname(1);
};
document.getElementById("employee-no").onfocus = function () {
    dispBorderInput(0, "text-danger-empno");
};
document.getElementById("employee-no").onblur = function () {
    checkEmpNo(1);
};
document.getElementById("joining-date").onfocus = function () {
    var errMsgJnDate = document.getElementsByClassName("text-danger-jndate");
    errMsgJnDate[0].style.display = "none";
    input1[0].style.border = "3px solid #5FA5FF";
    input1[0].style.outline = "none";
};
document.getElementById("joining-date").onblur = function () {
    var errMsgJnDate = document.getElementsByClassName("text-danger-jndate");
    var joinDt = document.getElementById("joining-date").value;
    if (joinDt == "") {
        errMsgJnDate[0].style.display = "flex";
        input1[0].style.border = "3px solid red";
        flag = 1;
    }
    else {
        errMsgJnDate[0].style.display = "none";
        input1[0].style.border = "1px solid black";
    }
};
document.addEventListener("DOMContentLoaded", function (event) {
    var dt1 = localStorage.getItem("data1");
    if (dt1 != null) {
        var email = document.getElementById("email");
        var empid = document.getElementById("employee-no");
        var lname = document.getElementById("last-name");
        var fname = document.getElementById("first-name");
        var role = document.getElementById("job-title");
        var location_1 = document.getElementById("location");
        var dept = document.getElementById("department");
        var joinDt = document.getElementById("joining-date");
        var data1 = JSON.parse(dt1);
        email.value = data1.employeeEmail;
        empid.value = data1.empNo;
        var fullName = data1.employeeName.split(" ");
        console.log(fullName);
        lname.value = fullName[fullName.length - 1];
        fname.value = fullName.slice(0, fullName.length - 1).join(" ");
        role.value = data1.role;
        location_1.value = data1.location;
        dept.value = data1.department;
        joinDt.value = data1.joinDt;
        console.log(fname);
    }
});
