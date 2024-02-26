//Displays shortest nav bar.
function dispShortNav() {
  const shortNavBar = document.getElementsByClassName(
    "vertical-shview"
  ) as HTMLCollectionOf<HTMLInputElement>;
  const navBar = document.getElementsByClassName(
    "left-bodysec"
  ) as HTMLCollectionOf<HTMLInputElement>;
  const rightBodySec = document.getElementsByClassName(
    "right-bodysec"
  ) as HTMLCollectionOf<HTMLInputElement>;
  const bodySec = document.getElementsByClassName(
    "body-sec"
  ) as HTMLCollectionOf<HTMLInputElement>;
  navBar[0].style.display = "none";
  shortNavBar[0].style.display = "flex";
  rightBodySec[0].style.width = "93%";
  bodySec[0].style.marginRight = "0%";
}
//Displays expanded nav bar.
function expandNav() {
  const shortNavBar = document.getElementsByClassName(
    "vertical-shview"
  ) as HTMLCollectionOf<HTMLInputElement>;
  const rightBodySec = document.getElementsByClassName(
    "right-bodysec"
  ) as HTMLCollectionOf<HTMLInputElement>;
  shortNavBar[0].style.display = "none";
  const navBar = document.getElementsByClassName(
    "left-bodysec"
  ) as HTMLCollectionOf<HTMLInputElement>;
  const bodySec = document.getElementsByClassName(
    "body-sec"
  ) as HTMLCollectionOf<HTMLInputElement>;
  navBar[0].style.display = "";
  rightBodySec[0].style.width = "83%";
  bodySec[0].style.marginRight = "2%";
}
