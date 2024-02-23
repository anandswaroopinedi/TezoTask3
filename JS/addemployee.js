//Displaying the shortest nav bar
function dispShortNav(){
    let shortNavBar=document.getElementsByClassName("vertical-shview");
    let navBar=document.getElementsByClassName("left-bodysec");
    let rightBodySec=document.getElementsByClassName("right-bodysec");
    var formButtons=document.getElementsByClassName("form-buttons");
    navBar[0].style.display="none";
    shortNavBar[0].style.display="flex";
    rightBodySec[0].style.width="93%";
    var style = formButtons[0].currentStyle;
    formButtons[0].style.marginLeft="47%";
}
//Displaying the expanded nav bar
function expandNav(){
    let shortNavBar=document.getElementsByClassName("vertical-shview");
    let rightBodySec=document.getElementsByClassName("right-bodysec");
    var formButtons=document.getElementsByClassName("form-buttons");
    shortNavBar[0].style.display="none";
    let navBar=document.getElementsByClassName("left-bodysec");
    navBar[0].style.display="";
    rightBodySec[0].style.width="83%";
    formButtons[0].style.marginLeft="53%";
}
//Validating the form 
var flag=0;
var input=document.getElementsByClassName("form-input");
function checkFname(k)
{
    var errMsg=document.getElementsByClassName("text-danger-fname");
    var fname=document.getElementById("first-name").value;
    if(fname=="")
    {
        errMsg[0].style.display="flex";
        input[1].style.border="3px solid red";
        flag=1;
        let text=document.getElementsByClassName("danger-msg")[1];
            text.innerText="This field is required";
    }
    else{
        var regName = /^[a-zA-Z]+([ \-']{0,1}[a-zA-Z]+){0,2}[.]{0,1}$/;
        if(!regName.test(fname))
        {
            let text=document.getElementsByClassName("danger-msg")[1];
            text.innerText="Use only alphabets";
            errMsg[0].style.display="flex";
            input[1].style.border="3px solid red";
            flag=1;
        }
        else{
            flag=0;
            if(k==0)
            {
                errMsg[0].style.display="none";
                input[1].style.border="3px solid #5FA5FF";
                input[1].style.outline="none";
                
            }
            else{
                errMsg[0].style.display="none";
                input[1].style.border="1px solid black";
            }
        }
    }
}
function checkLname(k)
{
    var errMsg=document.getElementsByClassName("text-danger-lname");
    var lname=document.getElementById("last-name").value;
    if(lname=="")
    {
        errMsg[0].style.display="flex";
        input[2].style.border="3px solid red";
        flag=1;
        let text=document.getElementsByClassName("danger-msg")[2];
        text.innerText="This field is required";
    }
    else{
        var regName = /^[a-zA-Z]+([ \-']{0,1}[a-zA-Z]+){0,2}[.]{0,1}$/;
        if(!regName.test(lname))
        {
            let text=document.getElementsByClassName("danger-msg")[2];
            text.innerText="Use only alphabets";
            errMsg[0].style.display="flex";
            input[2].style.border="3px solid red";
            flag=1;
        }
        else{
            flag=0;
            if(k==0)
            {
                errMsg[0].style.display="none";
                input[2].style.border="3px solid #5FA5FF";
                input[2].style.outline="none";
                
            }
            else{
                errMsg[0].style.display="none";
                input[2].style.border="1px solid black";
            }
        }
    }
}
function checkEmpNo(k)
{
    var errMsg=document.getElementsByClassName("text-danger-empno");
    var empid=document.getElementById("employee-no").value;
    if(empid=="")
    {
        errMsg[0].style.display="flex";
        input[0].style.border="3px solid red";
        flag=1;
        let text=document.getElementsByClassName("danger-msg")[0];
        text.innerText="This field is required";
    }
    else{
        if(!/^[A-Za-z0-9]*$/.test(empid))
        {
            let text=document.getElementsByClassName("danger-msg")[0];
            text.innerText="Use only alphabets and numbers";
            errMsg[0].style.display="flex";
            input[0].style.border="3px solid red";
            flag=1;
        }
        else{
        flag=0;
        if(k==0)
        {
            errMsg[0].style.display="none";
            input[0].style.border="3px solid #5FA5FF";
            input[0].style.outline="none";
            
        }
        else{
            errMsg[0].style.display="none";
            input[0].style.border="1px solid black";
        }
        }
    }
}
function checkEmail(k)
{
    var errMsg=document.getElementsByClassName("text-danger-email");
    var email=document.getElementById("email").value;
    if(email=="")
    {
        errMsg[0].style.display="flex";
        input[4].style.border="3px solid red";
        flag=1;
        let text=document.getElementsByClassName("danger-msg")[3];
        text.innerText="This field is required";
    }
    else{
        var regName = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!regName.test(email)) {
            let text=document.getElementsByClassName("danger-msg")[3];
            text.innerText="Fill the email correctly";
            errMsg[0].style.display="flex";
            input[4].style.border="3px solid red";
            flag=1;
        }
        else{
        flag=0;
            if(k==0)
            {
                errMsg[0].style.display="none";
                input[4].style.border="3px solid #5FA5FF";
                input[4].style.outline="none";
                
            }
            else{
                errMsg[0].style.display="none";
                input[4].style.border="1px solid black";
            }
        }
    }
}
function checkMobNo()
{
    var errMsg=document.getElementsByClassName("text-danger-mobno");
    var mobno=document.getElementById("mob-no").value;
    if(mobno && !/^\d{10}$/.test(mobno))
    {
        let text=document.getElementsByClassName("danger-msg")[4];
        text.innerText="use only numbers and length should be 10";
        errMsg[0].style.display="flex";
        input[5].style.border="3px solid red";
    }
    else{
        errMsg[0].style.display="none";
        input[5].style.border="1px solid black";
    }
}

class emp{
    constructor(employeeName,employeeEmail,location,department,role,empNo,status,joinDt)
    {
        this.employeeName=employeeName;
        this.employeeEmail=employeeEmail;
        this.location=location;
        this.department=department;
        this.role=role;
        this.empNo=empNo;
        this.status=status;
        this.joinDt=joinDt;
    }
}
document.getElementById('myButton').addEventListener('click', function(event) { 
    event.preventDefault(); 
    checkFname(0);
    checkLname(0);
    checkEmpNo(0);
    checkEmail(0);
    var input1=document.getElementsByClassName("form-input-large");
    var errMsgJnDate=document.getElementsByClassName("text-danger-jndate");
    var joinDt=document.getElementById("joining-date").value;
    if(joinDt=="")
    {
        errMsgJnDate[0].style.display="flex";
        input1[0].style.border="3px solid red";
        flag=1;
    }
    else{
        errMsgJnDate[0].style.display="none";
        input1[0].style.border="1px solid black";
    }
    var edit=document.getElementsByClassName("edit-button");
    var container=document.getElementsByClassName("emp-container");
    var errMsg=document.getElementsByClassName("text-danger-img");
    var empInf=document.getElementsByClassName("emp-info");
    var fileName = document.getElementById("profileImg").value;
    var allowedExtensions = new Array("jpg","png","gif");
    var formButtons=document.getElementsByClassName("form-buttons");
    var newVersion=document.getElementsByClassName("new-versions");
    if(fileName===undefined)
    {   
        container[0].style.flexDirection="column";
        errMsg[0].style.display="flex";
        empInf[0].style.marginTop="4%";
        edit[0].style.display="none";
        formButtons[0].style.position="relative";
        formButtons[0].style.left="50%";
        flag=1;
    }
    else{
        var file_extension = fileName.split('.').pop(); 
        var temp=0;
        for(var i = 0; i < allowedExtensions.length; i++)
        {
            if(allowedExtensions[i]==file_extension)
            {
                errMsg[0].style.display="none";
                container[0].style.flexDirection="row";
                empInf[0].style.marginTop="0%";
                edit[0].style.display="";
                temp=1;
                formButtons[0].style.marginLeft="53%";
                break;
            }
        }
        if(temp==0)
        {
            container[0].style.flexDirection="column";
            errMsg[0].style.display="flex";
            empInf[0].style.marginTop="4%";
            edit[0].style.display="none";
            formButtons[0].style.marginLeft="90%";
            flag=1;
        }
    }
    data=localStorage.getItem("data");
    var empid=document.getElementById("employee-no").value;
    data=JSON.parse(data);
    ind=0
    var temp=0;
    var flag1=0
    data.forEach((emp) => 
        {
            if(empid===emp.empNo)
            {
                flag1=1;
                ind=temp;
                console.log(empid);
            }
            temp+=1
        }); 
    data1=localStorage.getItem("data1");
    data1=JSON.parse(data1);
    if(data1 && flag1==1)
    {
        console.log(ind);
        console.log(data);
        data.splice(ind,1);
        localStorage.setItem("data",JSON.stringify(data));
        localStorage.removeItem("data1"); 
    }
    else if(flag1==1){
        var errMsg=document.getElementsByClassName("text-danger-empno");
        let text=document.getElementsByClassName("danger-msg")[0];
            text.innerText="Duplicated Employee no found";
            errMsg[0].style.display="flex";
            input[0].style.border="3px solid red";
            flag=1;
    }
    if(flag==0)
    {
        var x = document.getElementById("snackbar");
        x.className = "show";
        var email=document.getElementById("email").value;
        var empid=document.getElementById("employee-no").value;
        var lname=document.getElementById("last-name").value;
        var fname=document.getElementById("first-name").value;
        var role=document.getElementById("job-title").value;
        var location=document.getElementById("location").value;
        var dept=document.getElementById("department").value;
        var fileName = document.getElementById("profileImg");
        console.log(joinDt);
        var jdt=joinDt.substring(8,10)+"/"+joinDt.substring(5,7)+"/"+joinDt.substring(0,4);
        var newEmp=new emp(fname+" "+lname,email,location,dept,role,empid,"Active",jdt);
        var data=localStorage.getItem("data");
        data=JSON.parse(data);
        data.push(newEmp);
        localStorage.setItem("data",JSON.stringify(data));
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        setTimeout(function(){ window.location.href="employee.html";}, 1000);
    }
    else{
        console.log("Unsuccesfull attempt");
    }
    
  });

//To check the image when user fills it and display it to user.
function checkImage(){
    var profileImg=document.getElementsByClassName('profile-pic');
    var fileName = document.getElementById("profileImg").value;
    var fileCrctName = "../Assets/"+fileName.split('\\').pop(); 
    if(fileCrctName)
    {
        profileImg[0].src=fileCrctName;
    }
}
var input=document.getElementsByClassName("form-input");
var input1=document.getElementsByClassName("form-input-large");
document.getElementById("email").onfocus= function(){
    var errMsg=document.getElementsByClassName("text-danger-email");
    input[4].style.border="3px solid #5FA5FF";
    input[4].style.outline="none";
    errMsg[0].style.display="none";
};
document.getElementById("email").onblur= function(){
    checkEmail(1);
};
  document.getElementById("first-name").onfocus= function(){
    var errMsg=document.getElementsByClassName("text-danger-fname");
    input[1].style.border="3px solid #5FA5FF";
    input[1].style.outline="none";
    errMsg[0].style.display="none";
};
document.getElementById("first-name").onblur= function(){
    checkFname(1);
};
document.getElementById("last-name").onfocus= function(){
    var errMsg=document.getElementsByClassName("text-danger-lname");
    input[2].style.border="3px solid #5FA5FF";
    input[2].style.outline="none";
    errMsg[0].style.display="none";
};
document.getElementById("last-name").onblur= function(){
    checkLname(1);
};
document.getElementById("employee-no").onfocus= function(){
    var errMsg=document.getElementsByClassName("text-danger-empno");
    input[0].style.border="3px solid #5FA5FF";
    input[0].style.outline="none";
    errMsg[0].style.display="none";
};
document.getElementById("employee-no").onblur= function(){
    checkEmpNo(1);
};
document.getElementById("joining-date").onfocus= function(){
    var errMsgJnDate=document.getElementsByClassName("text-danger-jndate");
    errMsgJnDate[0].style.display="none";
    input1[0].style.border="3px solid #5FA5FF";
    input1[0].style.outline="none";
};
document.getElementById("joining-date").onblur= function(){
    var errMsgJnDate=document.getElementsByClassName("text-danger-jndate");
    var joinDt=document.getElementById("joining-date").value;
    if(joinDt=="")
    {
        errMsgJnDate[0].style.display="flex";
        input1[0].style.border="3px solid red";
        flag=1;
    }
    else{
        errMsgJnDate[0].style.display="none";
        input1[0].style.border="1px solid black";
    }
};


document.addEventListener("DOMContentLoaded", (event) => {
    var data1=localStorage.getItem("data1");
    if(data1!=null)
    {
        var email=document.getElementById("email");
        var empid=document.getElementById("employee-no");
        var lname=document.getElementById("last-name");
        var fname=document.getElementById("first-name");
        var role=document.getElementById("job-title");
        var location=document.getElementById("location");
        var dept=document.getElementById("department");
        var joinDt=document.getElementById("joining-date");
        data1=JSON.parse(data1);
        // email.placeholder=data1.employeeEmail;
        email.value=data1.employeeEmail;
        // empid.placeholder=data1.empNo;
        empid.value=data1.empNo;
        fullName=data1.employeeName.split(" ");
        console.log(fullName)
        // lname.placeholder=fullName[fullName.length-1];
        lname.value=fullName[fullName.length-1];
        // fname.placeholder=fullName.slice(0,fullName.length-1).join(" ");
        fname.value=fullName.slice(0,fullName.length-1).join(" ");
        role.value=data1.role;
        console
        location.value=data1.location;
        dept.value=data1.department;
        // joinDt.value=data1.joinDt;
        joinDt.value=data1.joinDt;
        console.log(fname);
    }
});