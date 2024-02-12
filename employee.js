function dispShortNav(){
    let shortNavBar=document.getElementsByClassName("vertical-shview");
    let navBar=document.getElementsByClassName("left-bodysec");
    let rightBodySec=document.getElementsByClassName("right-bodysec");
    let bodySec=document.getElementsByClassName("body-sec");
    navBar[0].style.display="none";
    shortNavBar[0].style.display="flex";
    rightBodySec[0].style.width="90%";
    bodySec[0].style.marginRight="0%";

}
function expandNav(){
    let shortNavBar=document.getElementsByClassName("vertical-shview");
    let rightBodySec=document.getElementsByClassName("right-bodysec");
    shortNavBar[0].style.display="none";
    let navBar=document.getElementsByClassName("left-bodysec");
    let bodySec=document.getElementsByClassName("body-sec");
    navBar[0].style.display="";
    rightBodySec[0].style.width="83%";
    bodySec[0].style.marginRight="2%";
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
function delete_rows(){
    let headBox=document.getElementsByClassName("head-check-box");
    let childBoxes=document.getElementsByClassName("check-box");
    let childclass=document.getElementsByClassName("emp-details");
    let dltBtn=document.getElementsByClassName("delete");
    if(headBox.checked==1){
        for(var i=0;i<childclass.length;i++)
        {
            childclass[i].style.display="none";
        }
        headBox[0].checked =0;
        alert(headBox[0].checked);
    }
    else{
        for(var i=0;i<childclass.length;i++)
        {
            if(childBoxes[i].checked==1)
                childclass[i].style.display="none";
        }
    }
    dltBtn[0].style.background="#F89191";
    dltBtn[0].style.cursor="default";
}
function segregateData(char){
    localStorage.setItem("key", char);
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
    filter[0].src="Assets/filter-black.svg";
    }
    else
    {
        filter[0].src="Assets/filter.svg";
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

function addEmployee(){
    var modal=document.getElementsByClassName("modal");
    modal[0].style.display="block";
}
function addClose(){
    var modal=document.getElementsByClassName("modal");
    modal[0].style.display="none";
}
window.onclick = function(event) {
    var modal=document.getElementsByClassName("modal");
    if (event.target == modal[0]) {
      modal[0].style.display = "none";
    }
  }
function saveFormData() {
    const formData = {
    profileImage: document.getElementById('profile-image').value,
    employeeName: document.getElementById('employee-name').value,
    employeeEmail: document.getElementById('employee-email').value,
    employeeLocation: document.getElementById('employee-location').value,
    employeeDepartment: document.getElementById('employee-department').value,
    employeeRole: document.getElementById('employee-role').value,
    employeeID: document.getElementById('employee-no').value,
    employmentDate: document.getElementById('joining-date').value
    };
    alert(empData.length);
}

// function 
// {
//     fetch('employees.json')
// .then(response => response.json())
// .then(data => {
//     GenerateXlSX(data); 
// })
// }
function export_data(){
    var table2excel = new Table2Excel();
    table2excel.export(document.getElementById("employeeDataTable"));
}

fetch('employees.json')
.then(response => response.json())
.then(data => {
    createTableData(data); 
})
.catch(error => {
    console.error('Error fetching JSON file:', error);
});
var cnt=0;
var arr=[0,0,0];
var count=document.getElementsByClassName("count")[0];
var filterName=document.getElementsByClassName("filter-name")[0];
document.getElementsByClassName("filter-status")[0].addEventListener('click',()=>{
    var statusVal=document.getElementsByClassName('filter-status')[0].value;
    var buttons=document.getElementsByClassName("filter-reset-apply");
    
    if(statusVal)
    {
        buttons[0].style.display="flex";
        if(arr[0]<1)
        {
            arr[0]+=1;
            cnt+=1;
            console.log(arr[0]);
        }
    }
    count.innerHTML=cnt;
    if(cnt>1)
    {
        filterName.innerHTML="Filters";
    }
});
document.getElementsByClassName("filter-location")[0].addEventListener('click',()=>{
    var statusVal=document.getElementsByClassName("filter-location")[0].value;
    var buttons=document.getElementsByClassName("filter-reset-apply");
    if(statusVal)
    {
        buttons[0].style.display="flex";
        if(arr[1]<1)
        {
            arr[1]+=1;
            cnt+=1;
        }
    }
    count.innerHTML=cnt;
    if(cnt>1)
    {
        filterName.innerHTML="Filters";
    }
});
document.getElementsByClassName("filter-department")[0].addEventListener('click',()=>{
    var statusVal=document.getElementsByClassName('filter-department')[0].value;
    var buttons=document.getElementsByClassName("filter-reset-apply");
    if(statusVal)
    {
        buttons[0].style.display="flex";
        if(arr[2]<1)
        {
            arr[2]+=1;
            cnt+=1;
        }
    }
    count.innerHTML=cnt;
    if(cnt>1)
    {
        filterName.innerHTML="Filters";
    }
});
function createTableData(data)
{
    
    
    data.forEach((emp) => {
        var table=document.getElementById("employeeDataTable");
        var row=document.createElement("tr");
        console.log(emp);
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
        img.src="Assets/Anand.jpg";
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
        row.appendChild(tdata5);

        let tdata6=document.createElement("td");
        let status=document.createElement("button");
        status.innerText=emp.status;
        status.classList.add("active-status");
        tdata6.appendChild(status);
        row.appendChild(tdata6);

        let tdata7=document.createElement("td");
        tdata7.innerText=emp.joinDt;
        row.appendChild(tdata7);

        let tdata8=document.createElement("div");
        tdata8.classList.add("ellipsis-menu");
        tdata8.setAttribute("onclick","toggleMenu(this);");
        let p8=document.createElement("i");
        p8.classList.add("fa");
        p8.classList.add("fa-ellipsis-h");
        tdata8.appendChild(p8);
        let innerdiv8=document.createElement("div");
        innerdiv8.classList.add("menu-options");
        tdata8.appendChild(innerdiv8);
        let option1=document.createElement("div");
        option1.classList.add("menu-option");
        option1.innerText="View Details";
        let option2=document.createElement("div");
        option2.classList.add("menu-option");
        option2.innerText="Edit";
        let td8=document.createElement("td");
        let option3=document.createElement("div");
        option3.classList.add("menu-option");
        option3.innerText="Delete";
        innerdiv8.appendChild(option1);
        innerdiv8.appendChild(option2);
        innerdiv8.appendChild(option3);
        td8.appendChild(tdata8);
        row.appendChild(td8);
        table.appendChild(row);
    });
}
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
                        console.log(x.innerHTML.toLowerCase());
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
                        console.log("anand1");
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
function toggleMenu(ellipsisMenu) {
    const allOptions=document.querySelectorAll('.menu-options');
    for(var i=0;i<allOptions.length;i++)
    {
        allOptions[i].style.display='none';
    }
    const menuOptions = ellipsisMenu.querySelector('.menu-options');

    menuOptions.style.display = menuOptions.style.display === 'block' ? 'none' : 'block';
}
function filterByUserInputs(){
    var inpStatus=document.getElementsByClassName("filter-status")[0];
    var inpLocation=document.getElementsByClassName("filter-location")[0];
    var inpDepartment=document.getElementsByClassName("filter-department")[0];
    var status=document.getElementsByClassName("active-status");
    var location=document.getElementsByClassName("emp-location");
    var department=document.getElementsByClassName("emp-department");
    let empRow=document.getElementsByClassName("emp-details");
    console.log(status.length);
    for (i = 0; i < status.length ; i++) 
        {
            var flag=0;
            console.log(status[i].innerText);
            if(inpStatus.value)
            {
                console.log(inpStatus.value.toLowerCase());
                console.log(status[i].innerText.toLowerCase());
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
            else{
                empRow[i].style.display="";
            }
        }

}




// document.addEventListener('DOMContentLoaded', function() {
//     displayStoredData();
// });
// function displayStoredData(){
//     var tabBody=document.querySelector('#employeeDataTable tbody');
//     tabBody.innerHTML='';
//     alert("klm")
//     var existingData = [];
//     alert("an");
//     try {
//             var fileContent = localStorage.getItem('formData.json');
//             alert("anand");
//             if (fileContent)
//             {
//                existingData = JSON.parse(fileContent);
//                alert("swaroop");
//             }
//         }
//     catch (error)
//     {
//         console.error("Error reading existing data:", error);
//     }

//     existingData.forEach(item => {
//         var row = tabBody.insertRow();
//         alert(anand);

//         // Create cells and populate them with data
//         Object.values(item).forEach(value => {
//             var cell = row.insertCell();
//             cell.textContent = value;
//             alert(value);
//         });
//     });
//     var existingDataString = JSON.stringify(existingData, null, 2);

//     // Display the string in an alert
//     alert(existingDataString)
    
// }

