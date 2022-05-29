/*theme-changer */
const themeToggleBtn = document.querySelector(".theme-toggler");
const app = document.querySelector(".app");
const mainMenu = document.querySelector(".main-menu");
const mainIcon = document.querySelector(".main-icon");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  app.classList.toggle("dark");
  mainMenu.classList.toggle("dark");
  mainIcon.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};
