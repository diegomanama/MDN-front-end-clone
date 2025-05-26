import {pageSections} from "./main.js";
const sidebarButton = document.querySelector('.sidebar-button');
const sidebar = document.querySelector('.content-navigation-sidebar');
const sidebarWrapper = document.querySelector(".content-navigation-sidebar-wrapper");

function showHideSidebar() {
  sidebar.classList.toggle("visible");
  sidebar.classList.toggle("on-screen");
  sidebarWrapper.classList.toggle("visible");
  sidebarWrapper.classList.toggle("fade-in");
  document.body.classList.toggle("overflow-hidden");
}

sidebarButton.addEventListener('click', showHideSidebar)

darkeningCover.addEventListener('click', showHideSidebar)