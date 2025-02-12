import {darkeningCover, pageSections} from "./main.js";
const sidebarButton = document.querySelector('.sidebar-button');
const iniIndex = document.querySelector('.mobile-ini-index');

function darken() {
  darkeningCover.style.zIndex = '1';
  document.body.appendChild(darkeningCover);
}

function lighten() {
  darkeningCover.remove();
}

function makeUnselectable(elements) {
  for (const element of elements) {
    element.classList.replace("selectable", "unselectable");
  }
}

function makeSelectable(elements) {
  for (const element of elements) {
    element.classList.replace("unselectable", "selectable");
  }
}

function closeSidebar() {
  iniIndex.classList.replace("visible", "invisible");
  document.body.classList.replace("overflow-hidden", "overflow-visible");
  makeSelectable(pageSections);
  lighten();
}

function openSidebar() {
  iniIndex.classList.replace("invisible", "visible");
  document.body.classList.replace("overflow-visible", "overflow-hidden");
  makeUnselectable(pageSections);
  darken();
}

sidebarButton.addEventListener('click', () => {
  if (iniIndex.classList.contains("invisible")) {
    openSidebar();
  } else 
  if (iniIndex.classList.contains("visible")) {
    closeSidebar();
  }
})

darkeningCover.addEventListener('click', () => {
  closeSidebar();
})



