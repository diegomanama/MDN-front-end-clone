import {darkeningCover, pageSections} from "./main.js";
const popupWrapper = document.querySelector(".popup-wrapper");
const closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", () => {
    popupWrapper.remove();
    darkeningCover.remove();

    pageSections.forEach((element) => {
        element.classList.replace("blur","non-blur");
        element.classList.replace("unselectable","selectable");
        }
    );
});





