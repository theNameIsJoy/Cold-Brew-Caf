const menuIcon = document.querySelector("#menu-icon");
const navTabs = document.querySelector(".nav-tabs");

console.log(menuIcon);
console.log(navTabs);
menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    navTabs.classList.toggle("open");
})