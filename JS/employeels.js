
//When user selects header checkbox all the child checkboxes in the table should be selected
let empDetails=document.getElementsByClassName("emp-details");
if(!localStorage.getItem('data'))
{
  fetch('../JSON/employees.json')
  .then(response => response.json())
  .then(data => {
      localStorage.clear();
      localStorage.setItem("data",JSON.stringify(data));
  })
  .catch(error => {
      console.error('Error fetching JSON file:', error);
  });
  location.reload(true);
//   window.location.href="employee.html";
}
function selectAll()
{
    let headBox=document.getElementsByClassName("head-check-box");
    let childBoxes=document.getElementsByClassName("check-box");
    let flag=0;
    let dltBtn=document.getElementsByClassName("delete");
    for(let i=0;i<childBoxes.length;i++)
    {
        if(headBox[0].checked == 1)
        {
            childBoxes[i].checked=1;
            flag=1;
        }
        else{
            childBoxes[i].checked=0;
            flag=0;
        }
    }
    if(flag==1)
    {
        dltBtn[0].style.background="red";
        dltBtn[0].style.cursor="pointer"
    }
    else{
        dltBtn[0].style.background="#F89191";
        dltBtn[0].style.cursor="default"
    }
}
//Selecting a single checkbox includes wheather head check box is unchecked or not and delete button should be enabled 
function selectOne()
{
    let headBox=document.getElementsByClassName("head-check-box");
    let childBoxes=document.getElementsByClassName("check-box");
    let flag_0=0,flag_1=0;
    let dltBtn=document.getElementsByClassName("delete");
    for(let i=0;i<childBoxes.length;i++)
    {
        if(childBoxes[i].checked == 1)
        {
            flag_0+=1;
        }
        else
        {
            flag_1+=1;
        }
    }
    if(flag_1>=1)
    {
        headBox[0].checked =0;
    }
    else{
        headBox[0].checked =1;
    }
    if(flag_0==0)
    {
        dltBtn[0].style.background="#F89191";
        dltBtn[0].style.cursor="default";
    }
    else{
        dltBtn[0].style.background="red";
        dltBtn[0].style.cursor="pointer";
    }
}
//To delete the employee information in the table
function deleteRows(){
    var data=localStorage.getItem("data");
    data=JSON.parse(data);
    let headBox=document.getElementsByClassName("head-check-box");
    var rows=document.getElementsByClassName("emp-details");
    let childBoxes=document.getElementsByClassName("check-box");
    let childclass=document.getElementsByClassName("emp-details");
    let dltBtn=document.getElementsByClassName("delete");
    let empNO=document.getElementsByClassName("emp-no");
    var temp=0;
    for(var i=0;i<childclass.length;i++)
        {
            if(childBoxes[i].checked==1)
            {
                temp=0;
                data.forEach((emp) => 
                {
                    if(empNO[i].innerText===emp.empNo)
                    {
                        data.splice(temp,1);
                    }
                    temp+=1;
                });       
            }
        }
    localStorage.setItem("data",JSON.stringify(data));
    if(headBox[0].checked==1){
        headBox[0].checked =0;
    }
    dltBtn[0].style.background="#F89191";
    dltBtn[0].style.cursor="default";
    location.reload();
}
//Filtering the employee data through starting alphabets
function filterDataByAlphabet(char){
    // localStorage.setItem("key", char);
    var check_char=document.getElementsByClassName("emp-name");
    let childclass=document.getElementsByClassName("emp-details");
    let button=document.getElementsByClassName("vector-element");
    let filter=document.getElementsByClassName("vector-image");
    const result = char.charCodeAt(0);
    if(button[result-65].style.backgroundColor=== "rgb(244, 72, 72)")
    {
        for(var i=0;i<check_char.length;i++)
    {
            childclass[i].style.display="";
    }
    button[result-65].style.backgroundColor="#F0F0F0";
    filter[0].src="../Assets/filterBlack.svg";
    }
    else
    {
        filter[0].src="../Assets/filter.svg";
    for(var i=0;i<check_char.length;i++)
    {
        if(check_char[i].innerHTML[0].toLowerCase()!=char.toLowerCase())
        {
            childclass[i].style.display="none";
        }
        else{
            childclass[i].style.display="";
        }
    }
    for(var i=0;i<26;i++)
        button[i].style.backgroundColor="#F0F0F0";
    button[result-65].style.backgroundColor="#F44848";
    }

}
//Exporting Jsondata to Excel file and making it download to user machine.
function exportData() {
    const table = document.getElementById("employeeDataTable");
    var rows=document.getElementsByClassName("emp-details");
    var empHead=document.getElementsByClassName("emp-head");
    var empName=document.getElementsByClassName("emp-name");
    var empEmail=document.getElementsByClassName("emp-mail");
    const csvData=[];
    const row=[],cols=rows[0].querySelectorAll("td,th");
    for(var j=0;j<empHead.length;j++)
        {
            row.push(empHead[j].innerText);
            if(j==0)
            {
                row.push("EMAIL")
            }           
        }
        csvData.push(row.join(","));
    for (var i = 0; i < rows.length; i++)
    {
        const row=[],cols=rows[i].querySelectorAll("td,th");
        row.push(empName[i].innerText);
        row.push(empEmail[i].innerText);
        for(var j=1;j<cols.length;j++)
        {
            row.push(cols[j].innerText);
        }
        csvData.push(row.join(","));
    }
    const blob=new Blob([csvData.join("\n")],{type:"text/csv"});
    const link=document.createElement("a");
    link.href=window.URL.createObjectURL(blob);
    link.download="data.csv";
    link.click();
  }
function dltbymenu(n)
{
    let childBoxes=document.getElementsByClassName("check-box");
    childBoxes[n].checked=1;
    deleteRows();
}


var cnt=0;
var arr=[0,0,0];    
var count=document.getElementsByClassName("count")[0];
var filterName=document.getElementsByClassName("filter-name")[0];

//Displaying operation buttons like reset and apply when user selects any 1 of the filter option.
function dispButtons(index)
{
    var statusVal=document.getElementsByClassName("filter-select")[index].value;
    var buttons=document.getElementsByClassName("filter-reset-apply");
    if(statusVal)
    {
        buttons[0].style.display="flex";
        if(arr[index]<1)
        {
            arr[index]+=1;
            cnt+=1;
        }
    }
    count.innerHTML=cnt;
    if(cnt>1)
    {
        filterName.innerHTML="Filters";
    }
}
// document.getElementsByClassName("mo-dlt")
document.addEventListener("DOMContentLoaded", (event) => {
    var data=localStorage.getItem("data");
data=JSON.parse(data);
console.log(typeof data);
createTableData(data);
  });
//Creating table through json
function createTableData(data)
{
    data.forEach((emp) => 
    {
        var table=document.getElementById("employeeDataTable");
        var row=document.createElement("tr");
        row.classList.add("emp-details");
        let checkBox=document.createElement("input");
        checkBox.type="checkbox";
        checkBox.addEventListener("click",selectOne);
        checkBox.classList.add("check-box");
        row.appendChild(checkBox);

        let tdata=document.createElement("td");
        let empImgDiv=document.createElement("div");
        empImgDiv.classList.add("emp-image");
        let innerDiv=document.createElement("div");
        let img=document.createElement("img");
        img.src="../Assets/Anand.jpg";
        img.classList.add("user-img");
        innerDiv.appendChild(img);
        empImgDiv.appendChild(innerDiv);
        let innerDiv2=document.createElement("div");
        let p=document.createElement("p");
        let b=document.createElement("b");
        b.classList.add("emp-name");
        let br=document.createElement("br");
        b.innerText=emp.employeeName;
        p.appendChild(b);
        p.appendChild(br);
        let p1=document.createElement("p");
        p1.classList.add("emp-mail");
        p1.innerText=emp.employeeEmail;
        p.appendChild(p1);
        innerDiv2.appendChild(p);
        innerDiv2.classList.add("user-details");
        empImgDiv.appendChild(innerDiv);
        empImgDiv.appendChild(innerDiv2);
        tdata.appendChild(empImgDiv);
        row.appendChild(tdata);

        let tdata2=document.createElement("td");
        tdata2.innerText=emp.location;
        tdata2.classList.add("emp-location");
        row.appendChild(tdata2);

        let tdata3=document.createElement("td");
        tdata3.innerText=emp.department;
        tdata3.classList.add("emp-department");
        row.appendChild(tdata3);

        let tdata4=document.createElement("td");
        tdata4.innerText=emp.role;
        row.appendChild(tdata4);

        let tdata5=document.createElement("td");
        tdata5.innerText=emp.empNo;
        tdata5.classList.add("emp-no");
        row.appendChild(tdata5);

        let tdata6=document.createElement("td");
        let status=document.createElement("button");
        status.innerText=emp.status;
        status.classList.add("active-status");
        if(emp.status=="In Active")
        {
            status.style.backgroundColor="#F89191";
            status.style.color="white";
        }
        tdata6.appendChild(status);
        row.appendChild(tdata6);

        let tdata7=document.createElement("td");
        tdata7.innerText=emp.joinDt;
        row.appendChild(tdata7);

        let tdata8=document.createElement("div");
        tdata8.classList.add("ellipsis-menu");
        let p8=document.createElement("i");
        p8.classList.add("fa");
        p8.classList.add("fa-ellipsis-h");
        p8.classList.add("ellipsis-charc");
        tdata8.appendChild(p8);
        let innerdiv8=document.createElement("div");
        innerdiv8.classList.add("menu-options");
        tdata8.appendChild(innerdiv8);
        let option1=document.createElement("div");
        option1.classList.add("menu-option");
        option1.innerText="View Details";
        let option2=document.createElement("div");
        option2.classList.add("menu-option");
        option2.classList.add("edit-inf");
        option2.innerText="Edit";
        let td8=document.createElement("td");
        let option3=document.createElement("div");
        option3.classList.add("menu-option");
        option3.classList.add("mo-dlt");
        option3.innerText="Delete";
        innerdiv8.appendChild(option1);
        innerdiv8.appendChild(option2);
        innerdiv8.appendChild(option3);
        td8.appendChild(tdata8);
        row.appendChild(td8);
        table.appendChild(row);
    });
}
//sorting the employee table based on the user condition either asc or desc.
function sortTable(n,k) 
{
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("employeeDataTable");
    switching = true;
    if(k==0)
        dir = "asc"; 
    else{
        dir="desc";
    }
    while (switching) 
    {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) 
        {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            if (dir == "asc") 
            {
                if(n==6)
                {
                    x = new Date(x.innerHTML.split('/').reverse().join(', '));
                    y = new Date(y.innerHTML.split('/').reverse().join(', '));
                    if (x>y) {
                        shouldSwitch= true;
                        break;
                    }
                }
                else
                {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch= true;
                        break;
                    }
                }
            } 
            else if (dir == "desc") 
            {
                if(n==6)
                {
                    x = new Date(x.innerHTML.split('/').reverse().join(', '));
                    y = new Date(y.innerHTML.split('/').reverse().join(', '));
                    if (x<y) {
                        shouldSwitch= true;
                        break;
                    }
                }
                else
                {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase())
                    {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
        }
      if (shouldSwitch) 
      {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;      
      } 
      else
       {
            if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
            }
        }
    }
}
//To display menu-options when user clicks on ellipsis present in each row of employee table.
document.addEventListener('click', function(event) {
    const ellipsisMenu = document.getElementsByClassName('ellipsis-menu');
    const menuOptions=document.querySelectorAll('.menu-options');
    var buttons=document.getElementsByClassName('mo-dlt');
    let childBoxes=document.getElementsByClassName("check-box");
    let editInfo=document.getElementsByClassName("edit-inf");
    var data=localStorage.getItem("data");
    let empNO=document.getElementsByClassName("emp-no");
    data=JSON.parse(data);
    for(var i=0;i<ellipsisMenu.length;i++)
    if (!ellipsisMenu[i].contains(event.target)) {
      menuOptions[i].style.display = 'none';
    }
    else{
        menuOptions[i].style.display = 'block';
    }
    for(var i=0;i<buttons.length;i++)
    {
        if(buttons[i].contains(event.target))
        {
            childBoxes[i].checked=1;
            deleteRows();
        }
    }
    for(var i=0;i<editInfo.length;i++)
    {
        if(editInfo[i].contains(event.target))
        {
            data.forEach((emp) => 
                {
                    if(empNO[i].innerText===emp.empNo)
                    {
                        localStorage.setItem("data1",JSON.stringify(emp));
                        window.location.href="addemployee.html";
                    }
                });   
        }
    }
  });
  //Filtering the employee table based on the user inputs like department,location,status.
function filterByUserInputs(){
    var inpStatus=document.getElementsByClassName("filter-status")[0];
    var inpLocation=document.getElementsByClassName("filter-location")[0];
    var inpDepartment=document.getElementsByClassName("filter-department")[0];
    var status=document.getElementsByClassName("active-status");
    var location=document.getElementsByClassName("emp-location");
    var department=document.getElementsByClassName("emp-department");
    let empRow=document.getElementsByClassName("emp-details");
    for (i = 0; i < status.length ; i++) 
        {
            var flag=0;
            if(inpStatus.value)
            {
                if(status[i].innerText.toLowerCase()!=inpStatus.value.toLowerCase())
                {
                    flag=1;
                }
            }
            if(inpLocation.value)
            {
                if(location[i].innerHTML.toLowerCase()!=inpLocation.value.toLowerCase())
                {
                    flag=1;
                }
            }
            if(inpDepartment.value)
            {
                if(department[i].innerHTML.toLowerCase()!=inpDepartment.value.toLowerCase()){
                    flag=1;
                }
            }
            if(flag==1)
            {
                empRow[i].style.display="none";
            }
            else if(empRow[i].style.display!="none"){
                empRow[i].style.display="";
            }
        }

    }