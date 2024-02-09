function dispShortNav(){
    let shortNavBar=document.getElementsByClassName("vertical-shview");
    let navBar=document.getElementsByClassName("left-bodysec");
    let rightBodySec=document.getElementsByClassName("right-bodysec");
    var formButtons=document.getElementsByClassName("form-buttons");
    navBar[0].style.display="none";
    shortNavBar[0].style.display="flex";
    rightBodySec[0].style.width="90%";
    // var style = formButtons[0].currentStyle;
    // var margin=parseInt(style.marginLeft.slice(0,2))-3;
    // console.log(margin);
    // var k=String(margin)+"%";
    // console.log(k);
    // formButtons[0].style.marginLeft=k;
}
function expandNav(){
    let shortNavBar=document.getElementsByClassName("vertical-shview");
    let rightBodySec=document.getElementsByClassName("right-bodysec");
    var formButtons=document.getElementsByClassName("form-buttons");
    shortNavBar[0].style.display="none";
    let navBar=document.getElementsByClassName("left-bodysec");
    navBar[0].style.display="";
    rightBodySec[0].style.width="83%";
    // formButtons[0].style.marginLeft="53%";
}
document.getElementById('myButton').addEventListener('click', function(event) { 
    event.preventDefault(); 
    var flag=0;
    var errMsg=document.getElementsByClassName("text-danger-empno");
    var input=document.getElementsByClassName("form-input");
    var empid=document.getElementById("employee-no").value;
    if(empid=="")
    {
        errMsg[0].style.display="flex";
        input[0].style.border="3px solid red";
        flag=1;
    }
    else{
        errMsg[0].style.display="none";
        input[0].style.border="1px solid black";
    }
    var errMsg=document.getElementsByClassName("text-danger-fname");
    var fname=document.getElementById("first-name").value;
    if(fname=="")
    {
        errMsg[0].style.display="flex";
        input[1].style.border="3px solid red";
        flag=1;
    }
    else{
        errMsg[0].style.display="none";
        input[1].style.border="1px solid black";
    }
    var errMsg=document.getElementsByClassName("text-danger-lname");
    var lname=document.getElementById("last-name").value;
    if(lname=="")
    {
        errMsg[0].style.display="flex";
        input[2].style.border="3px solid red";
        flag=1;
    }
    else{
        errMsg[0].style.display="none";
        input[2].style.border="1px solid black";
    }
    var errMsg=document.getElementsByClassName("text-danger-email");
    var email=document.getElementById("email").value;
    if(email=="")
    {
        errMsg[0].style.display="flex";
        input[4].style.border="3px solid red";
        flag=1;
    }
    else{
        errMsg[0].style.display="none";
        input[4].style.border="1px solid black";
    }
    var input1=document.getElementsByClassName("form-input-large");
    var errMsgJnDate=document.getElementsByClassName("text-danger-jndate");
    var joinDt=document.getElementById("joining-date").value;
    if(lname=="")
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
    console.log(fileName);
    console.log("swaroop");
    if(fileName==undefined)
    {   console.log("Anand");
        container[0].style.flexDirection="column";
        errMsg[0].style.display="flex";
        empInf[0].style.marginTop="4%";
        edit[0].style.display="none";
        formButtons[0].style.position="relative";
        formButtons[0].style.left="50%";
        console.log("swa");
    }
    else{
        var file_extension = fileName.split('.').pop(); 
        console.log(file_extension);
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
                newVersion[0].style.margin="120% 5% 0% 0%"
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
            newVersion[0].style.margin="160% 5% 0% 0%"
        }
    }
  });
  var input=document.getElementsByClassName("form-input");
  var input1=document.getElementsByClassName("form-input-large");
  document.getElementById("email").onfocus= function(){
    var errMsg=document.getElementsByClassName("text-danger-email");
    input[4].style.border="3px solid #5FA5FF";
    input[4].style.outline="none";
    errMsg[0].style.display="none";
};
document.getElementById("email").onblur= function(){
    var errMsg=document.getElementsByClassName("text-danger-email");
    input[4].style.border="1px solid black";
    input[4].style.outline="none";
    errMsg[0].style.display="none";
};
  document.getElementById("first-name").onfocus= function(){
    var errMsg=document.getElementsByClassName("text-danger-fname");
    input[1].style.border="3px solid #5FA5FF";
    input[1].style.outline="none";
    errMsg[0].style.display="none";
};
document.getElementById("first-name").onblur= function(){
    var errMsg=document.getElementsByClassName("text-danger-fname");
    input[1].style.border="1px solid black";
    input[1].style.outline="none";
    errMsg[0].style.display="none";
};
document.getElementById("last-name").onfocus= function(){
    var errMsg=document.getElementsByClassName("text-danger-lname");
    input[2].style.border="3px solid #5FA5FF";
    input[2].style.outline="none";
    errMsg[0].style.display="none";
};
document.getElementById("last-name").onblur= function(){
    var errMsg=document.getElementsByClassName("text-danger-lname");
    input[2].style.border="1px solid black";
    input[2].style.outline="none";
    errMsg[0].style.display="none";
};
document.getElementById("employee-no").onfocus= function(){
    var errMsg=document.getElementsByClassName("text-danger-empno");
    input[0].style.border="3px solid #5FA5FF";
    input[0].style.outline="none";
    errMsg[0].style.display="none";
};
document.getElementById("employee-no").onblur= function(){
    var errMsg=document.getElementsByClassName("text-danger-empno");
    input[0].style.border="1px solid black";
    input[0].style.outline="none";
    errMsg[0].style.display="none";
};
document.getElementById("joining-date").onfocus= function(){
    var errMsgJnDate=document.getElementsByClassName("text-danger-jndate");
    errMsgJnDate[0].style.display="none";
    input1[0].style.border="3px solid #5FA5FF";
    input1[0].style.outline="none";
};
document.getElementById("joining-date").onblur= function(){
    var errMsgJnDate=document.getElementsByClassName("text-danger-jndate");
    errMsgJnDate[0].style.display="none";
    input1[0].style.border="1px solid black";
    input1[0].style.outline="none";
};