"use strict";
//Displays shortest nav bar.
function dispShortNav() {
    var shortNavBar = document.getElementsByClassName("vertical-shview");
    var navBar = document.getElementsByClassName("left-bodysec");
    var rightBodySec = document.getElementsByClassName("right-bodysec");
    var bodySec = document.getElementsByClassName("body-sec");
    navBar[0].style.display = "none";
    shortNavBar[0].style.display = "flex";
    rightBodySec[0].style.width = "93%";
    bodySec[0].style.marginRight = "0%";
}
//Displays expanded nav bar.
function expandNav() {
    var shortNavBar = document.getElementsByClassName("vertical-shview");
    var rightBodySec = document.getElementsByClassName("right-bodysec");
    shortNavBar[0].style.display = "none";
    var navBar = document.getElementsByClassName("left-bodysec");
    var bodySec = document.getElementsByClassName("body-sec");
    navBar[0].style.display = "";
    rightBodySec[0].style.width = "83%";
    bodySec[0].style.marginRight = "2%";
}
