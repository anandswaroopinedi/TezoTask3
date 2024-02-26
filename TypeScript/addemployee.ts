// import Emp from "../model/employeeModel" import Employee from "../model/employeeModel";

//  import {Employee} from "../model/employeeModel";
//  import Emp from "../model/employeeModel";
interface Employee {
  employeeName: string;
  employeeEmail: string;
  location: string;
  department: string;
  role: string;
  empNo: string;
  status: string;
  joinDt: string;
}
var flag: boolean = false;
class Emp implements Employee {
  constructor(
    public employeeName: string,
    public employeeEmail: string,
    public location: string,
    public department: string,
    public role: string,
    public empNo: string,
    public status: string,
    public joinDt: string
  ) {}
}

// Displaying the shortest nav bar
function disperseShortNav(): void {
  const shortNavBar = document.getElementsByClassName(
    "vertical-shview"
  ) as HTMLCollectionOf<HTMLInputElement>;
  const navBar = document.getElementsByClassName(
    "left-bodysec"
  ) as HTMLCollectionOf<HTMLInputElement>;
  const rightBodySec = document.getElementsByClassName(
    "right-bodysec"
  ) as HTMLCollectionOf<HTMLInputElement>;
  const formButtons = document.getElementsByClassName(
    "form-buttons"
  ) as HTMLCollectionOf<HTMLInputElement>;
  navBar[0].style.display = "none";
  shortNavBar[0].style.display = "flex";
  rightBodySec[0].style.width = "93%";
  formButtons[0].style.marginLeft = "47%";
}

//Displaying the expanded nav bar
function expandNavBar(): void {
  const shortNavBar = document.getElementsByClassName(
    "vertical-shview"
  ) as HTMLCollectionOf<HTMLInputElement>;
  const rightBodySec = document.getElementsByClassName(
    "right-bodysec"
  ) as HTMLCollectionOf<HTMLInputElement>;
  const formButtons = document.getElementsByClassName(
    "form-buttons"
  ) as HTMLCollectionOf<HTMLInputElement>;
  shortNavBar[0].style.display = "none";
  const navBar = document.getElementsByClassName(
    "left-bodysec"
  ) as HTMLCollectionOf<HTMLInputElement>;
  navBar[0].style.display = "";
  rightBodySec[0].style.width = "83%";
  formButtons[0].style.marginLeft = "53%";
}

var input = document.getElementsByClassName(
  "form-input"
) as HTMLCollectionOf<HTMLInputElement>;
function displayErrorMsg(n: number, className: string): void {
  const errMsg = document.getElementsByClassName(
    className
  ) as HTMLCollectionOf<HTMLInputElement>;
  errMsg[0].style.display = "flex";
  input[n].style.border = "3px solid red";
}
function hideErrMsg(n: number, className: string): void {
  const errMsg = document.getElementsByClassName(
    className
  ) as HTMLCollectionOf<HTMLInputElement>;
  errMsg[0].style.display = "none";
  input[n].style.border = "1px solid black";
}
function displayBorderInput(n: number, className: string): void {
  const errMsg = document.getElementsByClassName(
    className
  ) as HTMLCollectionOf<HTMLInputElement>;
  errMsg[0].style.display = "none";
  input[n].style.border = "3px solid #5FA5FF";
  input[n].style.outline = "none";
}
function displayDangerText(n: number, msg: string): void {
  const text = document.getElementsByClassName("danger-msg")[
    n
  ] as HTMLInputElement;
  text.innerText = msg;
}
function checkFirstName(k: number): boolean {
  const fname: string = (
    document.getElementById("first-name")! as HTMLInputElement
  ).value;
  if (fname == "") {
    displayErrorMsg(1, "text-danger-fname");
    flag = true;
    displayDangerText(1, "This field is required");
  } else {
    const regName: RegExp = /^[a-zA-Z]+([ \-']{0,1}[a-zA-Z]+){0,2}[.]{0,1}$/;
    if (!regName.test(fname)) {
      displayDangerText(1, "Use only alphabets");
      displayErrorMsg(1, "text-danger-fname");
      flag = true;
    } else {
      flag = false;
      if (k == 0) {
        displayBorderInput(1, "text-danger-fname");
      } else {
        hideErrMsg(1, "text-danger-fname");
      }
    }
  }
  return flag;
}
function checkLastName(k: number): boolean {
  const lname = (document.getElementById("last-name")! as HTMLInputElement)
    .value;
  if (lname == "") {
    displayErrorMsg(2, "text-danger-lname");
    flag = true;
    displayDangerText(2, "This field is required");
  } else {
    const regName: RegExp = /^[a-zA-Z]+([ \-']{0,1}[a-zA-Z]+){0,2}[.]{0,1}$/;
    if (!regName.test(lname)) {
      displayDangerText(2, "Use only alphabets");
      displayErrorMsg(2, "text-danger-lname");
      flag = true;
    } else {
      flag = false;
      if (k == 0) {
        displayBorderInput(2, "text-danger-lname");
      } else {
        hideErrMsg(2, "text-danger-lname");
      }
    }
  }
  return flag;
}
function checkEmployeeNo(k: number): boolean {
  const empid: string = (
    document.getElementById("employee-no")! as HTMLInputElement
  ).value;
  if (empid == "") {
    displayErrorMsg(0, "text-danger-empno");
    flag = true;
    displayDangerText(0, "This field is required");
  } else {
    if (!/^[A-Za-z0-9]*$/.test(empid)) {
      displayDangerText(0, "Use only alphabets and numbers");
      displayErrorMsg(0, "text-danger-empno");
      flag = true;
    } else {
      flag = false;
      if (k == 0) {
        displayBorderInput(0, "text-danger-empno");
      } else {
        hideErrMsg(0, "text-danger-empno");
      }
    }
  }
  return flag;
}
function checkEmail(k: number): boolean {
  const email: string = (document.getElementById("email")! as HTMLInputElement)
    .value;
  if (email == "") {
    displayErrorMsg(4, "text-danger-email");
    flag = true;
    displayDangerText(3, "This field is required");
  } else {
    const regName: RegExp =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!regName.test(email)) {
      displayDangerText(3, "Fill the email correctly");
      displayErrorMsg(4, "text-danger-email");
      flag = true;
    } else {
      flag = false;
      if (k == 0) {
        displayBorderInput(4, "text-danger-email");
      } else {
        hideErrMsg(4, "text-danger-email");
      }
    }
  }
  return flag;
}
function checkMobileNo(): void {
  const mobno: string = (document.getElementById("mob-no")! as HTMLInputElement)
    .value;
  if (mobno && !/^\d{10}$/.test(mobno)) {
    displayDangerText(4, "use only numbers and length should be 10");
    displayErrorMsg(5, "text-danger-mobno");
  } else {
    hideErrMsg(5, "text-danger-mobno");
  }
}
function checkJoinDate(): boolean {
  const input1 = document.getElementsByClassName(
    "form-input-large"
  ) as HTMLCollectionOf<HTMLInputElement>;
  const errMsgJnDate = document.getElementsByClassName(
    "text-danger-jndate"
  ) as HTMLCollectionOf<HTMLInputElement>;
  let joinDt = (document.getElementById("joining-date") as HTMLInputElement)
    .value;
  if (joinDt == "") {
    errMsgJnDate[0].style.display = "flex";
    input1[0].style.border = "3px solid red";
    flag = true;
  } else {
    errMsgJnDate[0].style.display = "none";
    input1[0].style.border = "1px solid black";
    flag=false;
  }
  return flag;
}
//To validate Profile Image
function checkProfileImage(): boolean {
  const fileName: string = (
    document.getElementById("profileImg") as HTMLInputElement
  ).value;
  const allowedExtensions: string[] = new Array("jpg", "png", "gif");
  const formButtons = document.getElementsByClassName(
    "form-buttons"
  ) as HTMLCollectionOf<HTMLInputElement>;
  if (fileName === undefined) {
    formButtons[0].style.position = "relative";
    flag = true;
    alignItemsWrtProfile("column", "flex", "4%", "none", "50%");
  } else {
    const file_extension: string = fileName.split(".").pop()!;
    let temp: number = 0;
    for (let i = 0; i < allowedExtensions.length; i++) {
      if (allowedExtensions[i] == file_extension) {
        temp = 1;
        alignItemsWrtProfile("row", "none", "0%", "", "53%");
        break;
      }
    }
    if (temp == 0) {
      alignItemsWrtProfile("column", "flex", "4%", "none", "90%");
      flag = true;
    }
  }
  return flag;
}
//To align the form items with respect to image
function alignItemsWrtProfile(
  direction: string,
  errDisp: string,
  marTop: string,
  editDisp: string,
  marLeft: string
): void {
  const edit = document.getElementsByClassName(
    "edit-button"
  ) as HTMLCollectionOf<HTMLInputElement>;
  const container = document.getElementsByClassName(
    "emp-container"
  ) as HTMLCollectionOf<HTMLInputElement>;
  const errMsg = document.getElementsByClassName(
    "text-danger-img"
  ) as HTMLCollectionOf<HTMLInputElement>;
  const empInf = document.getElementsByClassName(
    "emp-info"
  ) as HTMLCollectionOf<HTMLInputElement>;
  const formButtons = document.getElementsByClassName(
    "form-buttons"
  ) as HTMLCollectionOf<HTMLInputElement>;
  container[0].style.flexDirection = direction;
  errMsg[0].style.display = errDisp;
  empInf[0].style.marginTop = marTop;
  edit[0].style.display = editDisp;
  formButtons[0].style.marginLeft = marLeft;
}
//To check whether Empno is already exisisted
function checkEmpNoPresent() {
  const dt: string = localStorage.getItem("data")!;
  const empid: string = (
    document.getElementById("employee-no")! as HTMLInputElement
  ).value;
  let data: Employee[] = JSON.parse(dt);
  let ind: number = 0;
  let temp: number = 0;
  let flag1: boolean = false;
  data.forEach((emp) => {
    if (empid === emp.empNo) {
      flag1 = true;
      ind = temp;
    }
    temp += 1;
  });
  return { ind, flag1 };
}
function deleteEmployee(ind: number): void {
  let dt: string = localStorage.getItem("data")!;
  let data: Employee[] = JSON.parse(dt);
  data.splice(ind, 1);
  localStorage.setItem("data", JSON.stringify(data));
  localStorage.removeItem("data1");
}
document
  .getElementById("myButton")!
  .addEventListener("click", function (event): void {
    event.preventDefault();
    flag=checkFirstName(0) ||  checkLastName(0) || checkEmployeeNo(0) ||  checkEmail(0) || checkJoinDate() || checkProfileImage();
    let result = checkEmpNoPresent();
    let ind: number = result.ind;
    let flag1: boolean = result.flag1;
    let data1: string | null = localStorage.getItem("data1");
    if (data1) data1 = JSON.parse(data1);
    if (data1 && flag1 == true) {
      deleteEmployee(ind);
    } else if (flag1 == true) {
      displayDangerText(0, "Duplicated Employee no found");
      displayErrorMsg(0, "text-danger-empno");
      flag = true;
    }
    if (flag == false) {
      createEmployee();
    } else {
      console.log("Unsuccesfull attempt");
    }
  });
function createEmployee(): void {
  const x = document.getElementById("snackbar") as HTMLInputElement;
  x.className = "show";
  const email: string = (document.getElementById("email")! as HTMLInputElement)
    .value;
  const empid: string = (
    document.getElementById("employee-no")! as HTMLInputElement
  ).value;
  const lname: string = (
    document.getElementById("last-name")! as HTMLInputElement
  ).value;
  const fname: string = (
    document.getElementById("first-name")! as HTMLInputElement
  ).value;
  const role: string = (
    document.getElementById("job-title")! as HTMLInputElement
  ).value;
  const location: string = (
    document.getElementById("location")! as HTMLInputElement
  ).value;
  const dept: string = (
    document.getElementById("department")! as HTMLInputElement
  ).value;
  const joinDt = (document.getElementById("joining-date") as HTMLInputElement)
    .value;
  const jdt: string =
    joinDt.substring(8, 10) +
    "/" +
    joinDt.substring(5, 7) +
    "/" +
    joinDt.substring(0, 4);
  const newEmp: Emp = new Emp(
    fname + " " + lname,
    email,
    location,
    dept,
    role,
    empid,
    "Active",
    jdt
  );
  const dt: string = localStorage.getItem("data")!;
  const data: Employee[] = JSON.parse(dt);
  data.push(newEmp);
  localStorage.setItem("data", JSON.stringify(data));
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
  setTimeout(function () {
    window.location.href = "employee.html";
  }, 1000);
}

function cancel(): void {
  const data1: string | null = localStorage.getItem("data1");
  if (data1) localStorage.removeItem("data1");
  window.location.href = "employee.html";
}
function checkImage(): void {
  const profileImg = document.getElementsByClassName(
    "profile-pic"
  ) as HTMLCollectionOf<HTMLInputElement>;
  const fileName = (document.getElementById("profileImg")! as HTMLInputElement)
    .value;
  const fileCrctName = "../Assets/" + fileName.split("\\").pop();
  if (fileCrctName) {
    profileImg[0].src = fileCrctName;
  }
}
var input = document.getElementsByClassName(
  "form-input"
) as HTMLCollectionOf<HTMLInputElement>;
var input1 = document.getElementsByClassName(
  "form-input-large"
) as HTMLCollectionOf<HTMLInputElement>;
document.getElementById("email")!.onfocus = function (): void {
  displayBorderInput(4, "text-danger-email");
};
document.getElementById("email")!.onblur = function (): void {
  checkEmail(1);
};
document.getElementById("first-name")!.onfocus = function (): void {
  displayBorderInput(1, "text-danger-fname");
};
document.getElementById("first-name")!.onblur = function (): void {
  checkFirstName(1);
};
document.getElementById("last-name")!.onfocus = function (): void {
  displayBorderInput(2, "text-danger-lname");
};
document.getElementById("last-name")!.onblur = function (): void {
  checkLastName(1);
};
document.getElementById("employee-no")!.onfocus = function (): void {
  displayBorderInput(0, "text-danger-empno");
};
document.getElementById("employee-no")!.onblur = function (): void {
  checkEmployeeNo(1);
};
document.getElementById("joining-date")!.onfocus = function (): void {
  const errMsgJnDate = document.getElementsByClassName(
    "text-danger-jndate"
  ) as HTMLCollectionOf<HTMLInputElement>;
  errMsgJnDate[0].style.display = "none";
  input1[0].style.border = "3px solid #5FA5FF";
  input1[0].style.outline = "none";
};
document.getElementById("joining-date")!.onblur = function (): void {
  const errMsgJnDate = document.getElementsByClassName(
    "text-danger-jndate"
  ) as HTMLCollectionOf<HTMLInputElement>;
  const joinDt: string = (
    document.getElementById("joining-date")! as HTMLInputElement
  ).value;
  if (joinDt == "") {
    errMsgJnDate[0].style.display = "flex";
    input1[0].style.border = "3px solid red";
    flag = true;
  } else {
    errMsgJnDate[0].style.display = "none";
    input1[0].style.border = "1px solid black";
  }
};

document.addEventListener("DOMContentLoaded", (event) => {
  const dt1: string | null = localStorage.getItem("data1");
  if (dt1 != null) {
    const email = document.getElementById("email")! as HTMLInputElement;
    const empid = document.getElementById("employee-no")! as HTMLInputElement;
    const lname = document.getElementById("last-name")! as HTMLInputElement;
    const fname = document.getElementById("first-name")! as HTMLInputElement;
    const role = document.getElementById("job-title")! as HTMLInputElement;
    const location = document.getElementById("location")! as HTMLInputElement;
    const dept = document.getElementById("department")! as HTMLInputElement;
    const joinDt = document.getElementById("joining-date")! as HTMLInputElement;
    const data1: Emp = JSON.parse(dt1);
    email.value = data1.employeeEmail;
    empid.value = data1.empNo;
    const fullName: string[] = data1.employeeName.split(" ");
    lname.value = fullName[fullName.length - 1];
    fname.value = fullName.slice(0, fullName.length - 1).join(" ");
    role.value = data1.role;
    location.value = data1.location;
    dept.value = data1.department;
    joinDt.value = data1.joinDt;
  }
});
