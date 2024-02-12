function dispShortNav(){
    let shortNavBar=document.getElementsByClassName("vertical-shview");
    let navBar=document.getElementsByClassName("left-bodysec");
    let rightBodySec=document.getElementsByClassName("right-bodysec");
    let bodySec=document.getElementsByClassName("body-sec");
    navBar[0].style.display="none";
    shortNavBar[0].style.display="flex";
    rightBodySec[0].style.width="91%";
    bodySec[0].style.marginRight="8%";
    bodySec[0].style.paddingRight="0%";
}
function expandNav(){
    let shortNavBar=document.getElementsByClassName("vertical-shview");
    let rightBodySec=document.getElementsByClassName("right-bodysec");
    let bodySec=document.getElementsByClassName("body-sec");
    shortNavBar[0].style.display="none";
    let navBar=document.getElementsByClassName("left-bodysec");
    navBar[0].style.display="";
    rightBodySec[0].style.width="83%";
    bodySec[0].style.marginRight="2%";
    bodySec[0].style.paddingRight="1%";
}