import {darkeningCover, pageSections} from "./main.js";
const sidebarButton = document.querySelector('.sidebar-button');
const iniIndex = document.querySelector('.mobile-ini-index');

function toggleSelectableState(elements) {
  for (const element of elements) {
    element.classList.toggle("selectable");
  }
}

function showHideSidebar() {
  iniIndex.classList.toggle("visible");
  iniIndex.classList.toggle("on-screen");
  darkeningCover.classList.toggle("invisible");
  darkeningCover.classList.toggle("z-index-1");
  document.body.classList.toggle("overflow-hidden");
  toggleSelectableState(pageSections);
}

sidebarButton.addEventListener('click', showHideSidebar)

darkeningCover.addEventListener('click', showHideSidebar)