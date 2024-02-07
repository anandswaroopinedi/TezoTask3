function dispShortNav(){
    let shortNavBar=document.getElementsByClassName("vertical-shview");
    let navBar=document.getElementsByClassName("left-bodysec");
    let rightBodySec=document.getElementsByClassName("right-bodysec");
    navBar[0].style.display="none";
    shortNavBar[0].style.display="flex";
    rightBodySec[0].style.width="90%";
}
function expandNav(){
    let shortNavBar=document.getElementsByClassName("vertical-shview");
    let rightBodySec=document.getElementsByClassName("right-bodysec");
    shortNavBar[0].style.display="none";
    let navBar=document.getElementsByClassName("left-bodysec");
    navBar[0].style.display="";
    rightBodySec[0].style.width="83%";
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
        console.log("ANAND");
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
    const result = char.charCodeAt(0);
    if(button[result-65].style.backgroundColor=== "rgb(244, 72, 72)")
    {
        for(var i=0;i<check_char.length;i++)
    {
            childclass[i].style.display="";
    }
    button[result-65].style.backgroundColor="#F0F0F0";
    }
    else
    {
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
// span.onclick = function() {
//     modal.style.display = "none";
//   }
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
fetch('employees.json')
.then(response => response.json())
.then(data => {
    createTableData(data); // JSON data
})
.catch(error => {
    console.error('Error fetching JSON file:', error);
});
function createTableData(data)
{
    
    
    data.forEach((emp) => {
        var table=document.getElementById("employeeDataTable");
        var row=document.createElement("tr");
        console.log(emp);
        row.classList.add("emp-details");
        // let vals=Object.values(emp);
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
        row.appendChild(tdata2);

        let tdata3=document.createElement("td");
        tdata3.innerText=emp.department;
        row.appendChild(tdata3);

        let tdata4=document.createElement("td");
        tdata4.innerText=emp.role;
        row.appendChild(tdata4);

        let tdata5=document.createElement("td");
        tdata5.innerText=emp.empNo;
        row.appendChild(tdata5);

        let tdata6=document.createElement("td");
        let status=document.createElement("button");
        status.innerText="Active";
        status.classList.add("active-status");
        tdata6.appendChild(status);
        row.appendChild(tdata6);

        let tdata7=document.createElement("td");
        tdata7.innerText=emp.joinDt;
        row.appendChild(tdata7);

        let tdata8=document.createElement("td");
        tdata8.innerText="...";
        row.appendChild(tdata8);
        table.appendChild(row);
    });
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

