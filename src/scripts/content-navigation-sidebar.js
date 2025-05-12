import {pageSections} from "./main.js";
const sidebarButton = document.querySelector('.sidebar-button');
const sidebar = document.querySelector('.content-navigation-sidebar');
const darkeningCover = document.querySelector(".darkening-cover");

function showHideSidebar() {
  sidebar.classList.toggle("visible");
  sidebar.classList.toggle("on-screen");
  darkeningCover.classList.toggle("visible");
  darkeningCover.classList.toggle("fade-in");
  document.body.classList.toggle("overflow-hidden");
}

sidebarButton.addEventListener('click', showHideSidebar)

darkeningCover.addEventListener('click', showHideSidebar)