const sidebarButton = document.querySelector('.sidebar-button');
const iniIndex = document.querySelector('.mobile-ini-index');
const darkeningCover = document.createElement('div');
darkeningCover.className = 'darkening-cover';
darkeningCover.style.zIndex = '1';

iniIndex.style.display = 'none';


function darken() {
  darkeningCover.style.zIndex = '1';
  document.body.appendChild(darkeningCover);
}

function lighten() {
  const darkeningCover = document.querySelector('.darkening-cover');
  darkeningCover.remove();
}

function makeUnselectable(elements) {
  for (const element of elements) {
    element.style.userSelect = 'none';
    element.className = "unselectable";
  }
}

function makeSelectable(elements) {
  for (const element of elements) {
    element.style.userSelect = 'text';
    element.className = "selectable";
  }
}

function closeSidebar() {
  iniIndex.style.display = 'none';
  document.body.style.overflow = 'auto';
  makeSelectable(document.querySelectorAll(".unselectable"))
  lighten();
}

function openSidebar() {
  iniIndex.style.display = 'block';
  document.body.style.overflow = 'hidden';
  makeUnselectable(document.querySelectorAll(".selectable"))
  darken();
}

sidebarButton.addEventListener('click', () => {
  if (iniIndex.style.display === 'none') {
    openSidebar();
  } else 
  if (iniIndex.style.display === 'block') {
    closeSidebar();
  }
})

darkeningCover.addEventListener('click', () => {
  closeSidebar();
})



