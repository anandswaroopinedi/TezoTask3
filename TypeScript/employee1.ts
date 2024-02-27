interface Employee {
    employeeName: string;
    employeeEmail: string;
    location: string;
    department: string;
    role: string;
    empNo: string;
    status: string;
    joiningDate: string;
}
class EmployeePage
{
    cntArr: number[] = [0, 0, 0];
    constructor()
    {
        this.checkDataDeleted();
        this.checkAnyCheckBoxClicked()
        this.checkDeleteButtonClicked();
        this.checkAlphabetsClicked();
        this.checkExportButtonClicked();
        this.domContentLoad();
        this.checkHeadCheckBoxClicked();
        this.checkSortApplied()
        this.captureDropDownClicks();
        this.checkApplyButtonClicked();
        this.captureEllipsisMenuClicks()
    }
    checkAnyCheckBoxClicked()
    {
      const checkBox=document.getElementsByClassName("check-box");
      for(let i=0;i<checkBox.length;i++)
          checkBox[i].addEventListener("click",(e:Event) => this.selectOne());
    }
    checkDeleteButtonClicked()
    {
      const deleteBtn=document.getElementsByClassName("delete");
      deleteBtn[0].addEventListener("click",(e:Event) => this.deleteRows());
    }
    checkAlphabetsClicked()
    {
      const buttons = document.querySelectorAll('.vector-element');
        buttons.forEach(button => {
            button.addEventListener('click', (event) => {
                const buttonText = (event.target as HTMLButtonElement).innerText;
                this.filterDataByAlphabet(buttonText);
            });
        });
    }
    checkExportButtonClicked()
    {
      const exportBtn=document.getElementsByClassName("export-button");
      exportBtn[0].addEventListener("click",(e:Event) => this.exportData());
    }
    domContentLoad()
    {
      document.addEventListener("DOMContentLoaded", (event) => {
        let dat: string = localStorage.getItem("data")!;
        let data: Employee[] = JSON.parse(dat);
        this.createTableData(data);
      });
    }
    checkHeadCheckBoxClicked()
    {
      const headCheckBox=document.getElementsByClassName("head-check-box")[0];
      headCheckBox.addEventListener("click",(e:Event) => {
        this.selectAll();
        // this.selectAll.bind(this)
      });
    }
    checkSortApplied()
    {
      for (let i = 0; i < 7; i++) {
        const lessThanIcon = document.querySelectorAll(`.less-than`)[i] as HTMLElement;
        const greaterThanIcon = document.querySelectorAll(`.greater-than`)[i] as HTMLElement;

        lessThanIcon.addEventListener('click', this.sortTable.bind(this, i, "asc"));
        greaterThanIcon.addEventListener('click', this.sortTable.bind(this, i, "desc"));
    }
    }
    checkApplyButtonClicked()
    {
      // debugger;
        const filterApply=document.querySelectorAll(".apply");
        filterApply[0].addEventListener("click",(e:Event) =>this.filterByUserInputs());
    }
    captureEllipsisMenuClicks()
    {
      document.addEventListener("click",(event: MouseEvent): void=> {
        this.dispellipsisMenu(event);
        this.editInfo(event);
        this.deleteBtnEllipseMenu(event);
        this.clickOptionsSelect(event);
      });
    }
    captureDropDownClicks()
    {
        const dropBtn=document.querySelectorAll(".dropbtn");
          for(let i=0;i<dropBtn.length;i++)
          {
            dropBtn[i].addEventListener('click', (e:Event) => {
              this.selectDropDown(i);
          });
          }
    }
    checkDataDeleted()
    {
      // debugger;
        if (!localStorage.getItem("data")) {
            fetch("../JSON/employees.json")
              .then((response) => response.json())
              .then((data) => {
                localStorage.clear();
                localStorage.setItem("data", JSON.stringify(data));
              })
              .catch((error) => {
                console.error("Error fetching JSON file:", error);
              });
            location.reload();
          }
    }
    selectAll(): void
    {
      // debugger;
        const headBox = document.getElementsByClassName(
          "head-check-box"
        ) as HTMLCollectionOf<HTMLInputElement>;
        const childBoxes = document.getElementsByClassName(
          "check-box"
        ) as HTMLCollectionOf<HTMLInputElement>;
        let flag: boolean = false;
        for (let i: number = 0; i < childBoxes.length; i++) {
          if (headBox[0].checked == true) {
            childBoxes[i].checked = true;
            flag = true;
          } else {
            childBoxes[i].checked = false;
            flag = false;
          }
        }
        if (flag == true) {
          this.activateDelete();
        } else {
          this.deActivateDelete();
        }
    }
    activateDelete(): void 
    {
        const dltBtn = document.getElementsByClassName(
          "delete"
        ) as HTMLCollectionOf<HTMLInputElement>;
        dltBtn[0].style.background = "red";
        dltBtn[0].style.cursor = "pointer";
        dltBtn[0].disabled = false;
    }
      //Deactivate Delete Button
    deActivateDelete(): void 
    {
        const dltBtn = document.getElementsByClassName(
          "delete"
        ) as HTMLCollectionOf<HTMLInputElement>;
        dltBtn[0].style.background = "#F89191";
        dltBtn[0].style.cursor = "default";
        dltBtn[0].disabled = true;
    }
    selectOne(): void {
        const headBox = document.getElementsByClassName(
          "head-check-box"
        ) as HTMLCollectionOf<HTMLInputElement>;
        const childBoxes = document.getElementsByClassName(
          "check-box"
        ) as HTMLCollectionOf<HTMLInputElement>;
        let flag_0: number = 0,
          flag_1: number = 0;
        for (let i = 0; i < childBoxes.length; i++) {
          if (childBoxes[i].checked == true) {
            flag_0 += 1;
          } else {
            flag_1 += 1;
          }
        }
        if (flag_1 >= 1) {
          headBox[0].checked = false;
        } else {
          headBox[0].checked = true;
        }
        if (flag_0 == 0) {
          this.deActivateDelete();
        } else {
          this.activateDelete();
        }
    }
    deleteRows(): void 
    {
        let dt: string = localStorage.getItem("data")!;
        let data: Employee[] = JSON.parse(dt);
        const headBox = document.getElementsByClassName(
          "head-check-box"
        ) as HTMLCollectionOf<HTMLInputElement>;
        const childBoxes = document.getElementsByClassName(
          "check-box"
        ) as HTMLCollectionOf<HTMLInputElement>;
        const childclass = document.getElementsByClassName(
          "emp-details"
        ) as HTMLCollectionOf<HTMLInputElement>;
        const empNO = document.getElementsByClassName(
          "emp-no"
        ) as HTMLCollectionOf<HTMLInputElement>;
        let temp: number = 0;
        for (let i = 0; i < childclass.length; i++) {
          if (childBoxes[i].checked == true) {
            temp = 0;
            if (data) {
              data.forEach((emp) => {
                if (empNO[i].innerText === emp.empNo && data) {
                  data.splice(temp, 1);
                }
                temp += 1;
              });
            }
          }
        }
        localStorage.setItem("data", JSON.stringify(data));
        if (headBox[0].checked == true) {
          headBox[0].checked = false;
        }
        this.deActivateDelete();
        location.reload();
    }
    filterDataByAlphabet(char: string): void {
        const check_char = document.getElementsByClassName(
          "emp-name"
        ) as HTMLCollectionOf<HTMLInputElement>;
        const childclass = document.getElementsByClassName(
          "emp-details"
        ) as HTMLCollectionOf<HTMLInputElement>;
        const button = document.getElementsByClassName(
          "vector-element"
        ) as HTMLCollectionOf<HTMLInputElement>;
        const filter = document.getElementsByClassName(
          "vector-image"
        ) as HTMLCollectionOf<HTMLInputElement>;
        const result: number = char.charCodeAt(0);
        if (!this.checkAlphabetPrevSelected(result)) {
          filter[0].src = "../Assets/filter.svg";
          for (let i = 0; i < check_char.length; i++) {
            if (check_char[i].innerHTML[0].toLowerCase() != char.toLowerCase()) {
              childclass[i].style.display = "none";
            } else {
              childclass[i].style.display = "";
            }
          }
          for (let i = 0; i < 26; i++) button[i].style.backgroundColor = "#F0F0F0";
          button[result - 65].style.backgroundColor = "#F44848";
        }
    }
    checkAlphabetPrevSelected(result: number): boolean 
    {
        const check_char = document.getElementsByClassName(
          "emp-name"
        ) as HTMLCollectionOf<HTMLInputElement>;
        const childclass = document.getElementsByClassName(
          "emp-details"
        ) as HTMLCollectionOf<HTMLInputElement>;
        const button = document.getElementsByClassName(
          "vector-element"
        ) as HTMLCollectionOf<HTMLInputElement>;
        const filter = document.getElementsByClassName(
          "vector-image"
        ) as HTMLCollectionOf<HTMLInputElement>;
        if (button[result - 65].style.backgroundColor === "rgb(244, 72, 72)") {
          for (let i = 0; i < check_char.length; i++) {
            childclass[i].style.display = "";
          }
          button[result - 65].style.backgroundColor = "#F0F0F0";
          filter[0].src = "../Assets/filterBlack.svg";
          return true;
        }
        return false;
    }
    exportData(): void {
        const rows = document.getElementsByClassName(
          "emp-details"
        ) as HTMLCollectionOf<HTMLInputElement>;
        const empHead = document.getElementsByClassName(
          "emp-head"
        ) as HTMLCollectionOf<HTMLInputElement>;
        const empName = document.getElementsByClassName(
          "emp-name"
        ) as HTMLCollectionOf<HTMLInputElement>;
        const empEmail = document.getElementsByClassName(
          "emp-mail"
        ) as HTMLCollectionOf<HTMLInputElement>;
        const csvData: string[] = [];
        const row: string[] = [];
        // cols = rows[0].querySelectorAll("td,th") as NodeListOf<HTMLInputElement>;
        for (let j = 0; j < empHead.length; j++) {
          row.push(empHead[j].innerText);
          if (j == 0) {
            row.push("EMAIL");
          }
        }
        csvData.push(row.join(","));
        for (let i = 0; i < rows.length; i++) {
          const row: string[] = [],
            cols = rows[i].querySelectorAll("td,th") as NodeListOf<HTMLInputElement>;
          row.push(empName[i].innerText);
          row.push(empEmail[i].innerText);
          for (let j = 1; j < cols.length; j++) {
            row.push(cols[j].innerText);
          }
          csvData.push(row.join(","));
        }
        const blob: Blob = new Blob([csvData.join("\n")], { type: "text/csv" });
        const link: HTMLAnchorElement = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "data.csv";
        link.click();
    }
      //Displaying operation buttons like reset and apply when user selects any 1 of the filter option.
    dispButtons(): void 
    {
        const buttons = document.getElementsByClassName(
          "filter-reset-apply"
        ) as HTMLCollectionOf<HTMLInputElement>;
      
        let flag = this.checkOptionsClicked() || this.checkFiterPerformed();
        if (flag === false) {
          buttons[0].style.display = "none";
        } else {
          buttons[0].style.display = "flex";
        }
    }
    checkFiterPerformed(): boolean {
        let flag = false;
        const empRow = document.getElementsByClassName(
          "emp-details"
        ) as HTMLCollectionOf<HTMLInputElement>;
        for (let i = 0; i < empRow.length; i++)
          if (empRow[i].style.display === "none") {
            flag = true;
          }
        return flag;
    }
    checkOptionsClicked(): boolean {
        let flag = false;
        for (let i: number = 0; i < 3; i++) {
          if (this.cntArr[i] != 0) {
            flag = true;
          }
        }
        return flag;
    }
    createTableData(data: Employee[]): void 
    {
        data.forEach((emp) => {
          let table = document.getElementById(
            "employeeDataTable"
          ) as HTMLInputElement;
          let row: HTMLElement = document.createElement("tr");
          row.classList.add("emp-details");
          let checkBox: HTMLInputElement = document.createElement("input");
          checkBox.type = "checkbox";
          checkBox.addEventListener("click", this.selectOne);
          checkBox.classList.add("check-box");
          row.appendChild(checkBox);
      
          let tdata: HTMLElement = document.createElement("td");
          let empImgDiv: HTMLDivElement = document.createElement("div");
          empImgDiv.classList.add("emp-image");
          let innerDiv: HTMLDivElement = document.createElement("div");
          let img: HTMLImageElement = document.createElement("img");
          img.src = "../Assets/Anand.jpg";
          img.classList.add("user-img");
          innerDiv.appendChild(img);
          empImgDiv.appendChild(innerDiv);
          let innerDiv2: HTMLDivElement = document.createElement("div");
          let p: HTMLParagraphElement = document.createElement("p");
          let b: HTMLElement = document.createElement("b");
          b.classList.add("emp-name");
          let br: HTMLBRElement = document.createElement("br");
          b.innerText = emp.employeeName;
          p.appendChild(b);
          p.appendChild(br);
          let p1: HTMLParagraphElement = document.createElement("p");
          p1.classList.add("emp-mail");
          p1.innerText = emp.employeeEmail;
          p.appendChild(p1);
          innerDiv2.appendChild(p);
          innerDiv2.classList.add("user-details");
          empImgDiv.appendChild(innerDiv);
          empImgDiv.appendChild(innerDiv2);
          tdata.appendChild(empImgDiv);
          row.appendChild(tdata);
      
          let tdata2: HTMLTableCellElement = document.createElement("td");
          tdata2.innerText = emp.location;
          tdata2.classList.add("emp-location");
          row.appendChild(tdata2);
      
          let tdata3: HTMLTableCellElement = document.createElement("td");
          tdata3.innerText = emp.department;
          tdata3.classList.add("emp-department");
          row.appendChild(tdata3);
      
          let tdata4: HTMLTableCellElement = document.createElement("td");
          tdata4.innerText = emp.role;
          row.appendChild(tdata4);
      
          let tdata5: HTMLTableCellElement = document.createElement("td");
          tdata5.innerText = emp.empNo;
          tdata5.classList.add("emp-no");
          row.appendChild(tdata5);
      
          let tdata6: HTMLTableCellElement = document.createElement("td");
          let status: HTMLButtonElement = document.createElement("button");
          status.innerText = emp.status;
          status.classList.add("active-status");
          if (emp.status == "In Active") {
            status.style.backgroundColor = "#F89191";
            status.style.color = "white";
          }
          tdata6.appendChild(status);
          row.appendChild(tdata6);
      
          let tdata7: HTMLTableCellElement = document.createElement("td");
          tdata7.innerText = emp.joiningDate;
          row.appendChild(tdata7);
      
          let tdata8: HTMLDivElement = document.createElement("div");
          tdata8.classList.add("ellipsis-menu");
          let p8: HTMLElement = document.createElement("i");
          p8.classList.add("fa");
          p8.classList.add("fa-ellipsis-h");
          p8.classList.add("ellipsis-charc");
          tdata8.appendChild(p8);
          let innerdiv8: HTMLDivElement = document.createElement("div");
          innerdiv8.classList.add("menu-options");
          tdata8.appendChild(innerdiv8);
          let option1: HTMLDivElement = document.createElement("div");
          option1.classList.add("menu-option");
          option1.innerText = "View Details";
          let option2: HTMLDivElement = document.createElement("div");
          option2.classList.add("menu-option");
          option2.classList.add("edit-inf");
          option2.innerText = "Edit";
          let td8: HTMLTableCellElement = document.createElement("td");
          let option3: HTMLDivElement = document.createElement("div");
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
    sortTable(colIndex: number, order:string): void {
        let table,
          rows: HTMLCollectionOf<HTMLTableRowElement>,
          switching: boolean,
          i: number,
          shouldSwitch: boolean = false,
          switchcount: number = 0,
          d1,
          d2;
        table = document.getElementById("employeeDataTable") as HTMLTableElement;
        switching = true;
        while (switching) {
          switching = false;
          rows = table.rows;
          for (i = 1; i < rows.length - 1; i++) {
            shouldSwitch = false;
            let x = rows[i].getElementsByTagName("TD")[colIndex] as HTMLTableCellElement;
            let y = rows[i + 1].getElementsByTagName("TD")[colIndex] as HTMLTableCellElement;
            if (colIndex == 6) {
              d1 = new Date(x.innerHTML.split("/").reverse().join(", ")) as Date;
              d2 = new Date(y.innerHTML.split("/").reverse().join(", ")) as Date;
            }
            if (order == "asc") {
              if (colIndex == 6 && d1 && d2) {
                if (d1 > d2) {
                  shouldSwitch = true;
                  break;
                }
              } else {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                  shouldSwitch = true;
                  break;
                }
              }
            } else if (order == "desc") {
              if (colIndex == 6 && d1 && d2) {
                if (d1 < d2) {
                  shouldSwitch = true;
                  break;
                }
              } else {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                  shouldSwitch = true;
                  break;
                }
              }
            }
          }
          if (shouldSwitch) {
            rows[i].parentNode!.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
          } else {
            if (switchcount == 0 && order == "asc") {
                order = "desc";
              switching = true;
            }
          }
        }
    }
    clickOptionsSelect(event: MouseEvent): void {
        const dropDown = document.getElementsByClassName(
          "dropdown"
        ) as HTMLCollectionOf<HTMLInputElement>;
        let flag = false;
        const dropdownContent = document.getElementsByClassName("dropdown-content");
        for (let i: number = 0; i < dropDown.length; i++) {
          if (dropDown[i].contains(event.target as Node)) {
            flag = true;
            this.countSelectedOptions(i);
            this.cntDisplay(i);
          } else {
            if (dropdownContent[i].classList.contains("show")) {
              dropdownContent[i].classList.remove("show");
            }
          }
        }
        if (flag == false) {
          this.makeAllDropDownsClose();
        }
      }
      //Implementation of Delete operation in Ellipsemenu
    deleteBtnEllipseMenu(event: MouseEvent): void {
        const buttons = document.getElementsByClassName(
          "mo-dlt"
        ) as HTMLCollectionOf<HTMLInputElement>;
        const childBoxes = document.getElementsByClassName(
          "check-box"
        ) as HTMLCollectionOf<HTMLInputElement>;
        for (let i = 0; i < buttons.length; i++) {
          if (buttons[i].contains(event.target as Node)) {
            childBoxes[i].checked = true;
            this.deleteRows();
          } else {
          }
        }
    }
      //To Edit Information using ellipsismenu edit option
    editInfo(event: MouseEvent): void {
        const empNO = document.getElementsByClassName(
          "emp-no"
        ) as HTMLCollectionOf<HTMLInputElement>;
        let dt: string = localStorage.getItem("data")!;
        let data: Employee[] = JSON.parse(dt);
        const editInfo = document.getElementsByClassName(
          "edit-inf"
        ) as HTMLCollectionOf<HTMLInputElement>;
        for (let i = 0; i < editInfo.length; i++) {
          if (editInfo[i].contains(event.target as Node)) {
            data.forEach((emp) => {
              if (empNO[i].innerText === emp.empNo) {
                localStorage.setItem("data1", JSON.stringify(emp));
                window.location.href = "addemployee.html";
              }
            });
          }
        }
      }
      //To display ellipsis menu in the employee table
    dispellipsisMenu(event: MouseEvent): void {
        const ellipsisMenu = document.getElementsByClassName(
          "ellipsis-menu"
        ) as HTMLCollectionOf<HTMLInputElement>;
        const menuOptions = document.querySelectorAll(
          ".menu-options"
        ) as NodeListOf<HTMLInputElement>;
        for (let i: number = 0; i < ellipsisMenu.length; i++)
          if (!ellipsisMenu[i].contains(<Node>event.target)) {
            menuOptions[i].style.display = "none";
          } else {
            menuOptions[i].style.display = "block";
          }
      }
      //To close all select dropdowns when we click outside of their scope
    makeAllDropDownsClose(): void {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i: number = 0; i < 3; i++) {
          if (dropdowns[i].classList.contains("show")) {
            dropdowns[i].classList.remove("show");
          }
        }
    }
    countSelectedOptions(n: number): number {
        const checkBoxes = document.getElementsByClassName(
          "status-check"
        ) as HTMLCollectionOf<HTMLInputElement>;
        const cntOptions = [2, 4, 4];
        const temp: number = cntOptions.slice(0, n).reduce((a, b) => a + b, 0);
        let cnt = 0;
        for (let i: number = 0; i < cntOptions[n]; i++) {
          if (checkBoxes[temp + i].checked === true) {
            cnt += 1;
          }
        }
        this.cntArr[n] = cnt;
        this.dispButtons();
        return cnt;
      }
    cntDisplay(n: number): void {
        const button = document.getElementsByClassName(
          "dropbtn"
        ) as HTMLCollectionOf<HTMLInputElement>;
        let cnt: number;
        let str: string[] = ["Status", "Location", "Department"];
        for (let i: number = 0; i < 3; i++) {
          cnt = this.countSelectedOptions(i);
          if (cnt >= 1) {
            button[i].innerText = String(cnt) + " Selected";
          } else {
            button[i].innerText = str[i];
          }
        }
    }
    filterByUserInputs(): void {
        let status: string[], dept: string[], loc: string[];
        const statusCls = document.getElementsByClassName(
          "active-status"
        ) as HTMLCollectionOf<HTMLInputElement>;
        const location = document.getElementsByClassName(
          "emp-location"
        ) as HTMLCollectionOf<HTMLInputElement>;
        const department = document.getElementsByClassName(
          "emp-department"
        ) as HTMLCollectionOf<HTMLInputElement>;
        const empRow = document.getElementsByClassName(
          "emp-details"
        ) as HTMLCollectionOf<HTMLInputElement>;
        status = this.getEntriesSelected(0);
        loc =this.getEntriesSelected(1);
        dept = this.getEntriesSelected(2);
        for (let i: number = 0; i < statusCls.length; i++) {
          let flag: number = 0;
          if (status.length) {
            if (status.indexOf(statusCls[i].innerText.toLowerCase()) == -1) {
              flag = 1;
            }
          }
          if (loc.length) {
            if (loc.indexOf(location[i].innerHTML.toLowerCase()) == -1) {
              flag = 1;
            }
          }
          if (dept.length) {
            if (dept.indexOf(department[i].innerHTML.toLowerCase()) == -1) {
              flag = 1;
            }
          }
          if (flag == 1) {
            empRow[i].style.display = "none";
          } else {
            empRow[i].style.display = "";
          }
        }
    }
    getEntriesSelected(n: number): string[] {
        let arr: string[] = [];
        const checkBoxes = document.getElementsByClassName(
          "status-check"
        ) as HTMLCollectionOf<HTMLInputElement>;
        let cntOptions: number[] = [2, 4, 4];
        let temp: number = cntOptions.slice(0, n).reduce((a, b) => a + b, 0);
        for (let i: number = 0; i < cntOptions[n]; i++) {
          if (checkBoxes[temp + i].checked === true) {
            arr.push(checkBoxes[temp + i].value.toLowerCase());
          }
        }
        return arr;
    }
    selectDropDown(n: number): void {
        let dropdowns = document.getElementsByClassName(
          "dropdown-content"
        ) as HTMLCollectionOf<HTMLInputElement>;
        if (dropdowns[n].classList.contains("show")) {
          dropdowns[n].classList.remove("show");
        } else {
          dropdowns[n].classList.add("show");
        }
      }       
}
new EmployeePage();
