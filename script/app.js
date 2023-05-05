const selectElement = (element) => {
  if (!element) throw new Error(`${element} is not valid selector!`);
  return document.querySelector(element);
};

const bodyElement = selectElement("body");
const btnMoon = selectElement(".btn-moon");
const btnSun = selectElement(".btn-sun");
const navLinks = selectElement(".nav-links");
const btnMenu = selectElement(".btn-menu");
const btnClose = selectElement(".btn-close");

if (localStorage.getItem("theme")) {
  bodyElement.classList.add("white");
}

const changeTheme = () => {
  bodyElement.classList.toggle("white");
  if (bodyElement.classList.contains("white")) {
    btnMoon.classList.remove("active");
    btnSun.classList.add("active");
    localStorage.setItem("theme", "white");
  } else {
    btnMoon.classList.add("active");
    btnSun.classList.remove("active");
    localStorage.removeItem("theme");
  }
};

const showLinks = () => {
  navLinks.classList.add("active");
  btnMenu.classList.remove("active");
  btnClose.classList.add("active");
};

const hideLinks = () => {
  navLinks.classList.remove("active");
  btnMenu.classList.add("active");
  btnClose.classList.remove("active");
};

btnMenu.addEventListener("click", showLinks);
btnClose.addEventListener("click", hideLinks);
