/* hide header when scrolling down */

let prevScrollPos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 100) {
    if (prevScrollPos > currentScrollPos) {
      document.querySelector("header").style.top = "0";
    } else {
      document.querySelector("header").style.top = "-200px";
    }
  }
  prevScrollPos = currentScrollPos;
};
