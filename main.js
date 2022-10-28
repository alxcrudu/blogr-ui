const toggleMenu = document.getElementById("toggle");
const hamburger = document.getElementById("hamburger");

const hamburgerIcon = document.getElementById("hamburger_icon");
const xIcon = document.getElementById("x_icon");

window.onload = function () {
  if (window.innerWidth <= 950) toggleMenu.classList.add("hide");
};

window.onresize = function () {
  if (window.innerWidth <= 950) toggleMenu.classList.add("hide");
  else toggleMenu.classList.remove("hide");
};

hamburger.addEventListener("click", () => {
  toggleMenu.classList.toggle("hide");
  if (hamburgerIcon.className == "show") {
    hamburgerIcon.className = "hide";
    xIcon.className = "show";
  } else if (hamburgerIcon.className == "hide") {
    hamburgerIcon.className = "show";
    xIcon.className = "hide";
  }
});
