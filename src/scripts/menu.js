const munuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

const selectTheme = document.querySelector(".select-theme");
const themeOptions = document.querySelector(".theme-options");

const expandableListArray = Array.from(document.querySelectorAll(".expandable-list"));

function openExpandableList(event) {
  if (event.target.classList.contains("expand-button")) {
    const list = expandableListArray.find(list =>
      Array.from(list.classList).find(className =>
        event.target.classList.contains(className)));
    list.classList.toggle("visible");
  } return;
};

function toggleChevronDirection(event) {
  const children = Array.from(event.target.children);
  const chevron = children.find(child => child.classList.contains("chevron"));

  chevron.getAttribute("name") === "chevron-up" 
  ? chevron.setAttribute("name", "chevron-down") 
  : chevron.setAttribute("name", "chevron-up");
}

munuButton.addEventListener("click", () => {
  menu.classList.toggle("visible-flex");
});

menu.addEventListener("click", openExpandableList);
menu.addEventListener("click", toggleChevronDirection);