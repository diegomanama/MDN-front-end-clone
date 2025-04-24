import {pageSections} from "./main.js";
const sidebarButton = document.querySelector('.sidebar-button');
const iniIndex = document.querySelector('.mobile-ini-index');
const darkeningCover = document.querySelector(".darkening-cover");

function showHideSidebar() {
  iniIndex.classList.toggle("visible");
  iniIndex.classList.toggle("on-screen");
  darkeningCover.classList.toggle("visible");
  darkeningCover.classList.toggle("fade-in");
  document.body.classList.toggle("overflow-hidden");
}

sidebarButton.addEventListener('click', showHideSidebar)

darkeningCover.addEventListener('click', showHideSidebar)