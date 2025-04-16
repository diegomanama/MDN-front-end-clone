import {darkeningCover, pageSections} from "./main.js";
const popupWrapper = document.querySelector(".popup-wrapper");
const closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", () => {
    popupWrapper.classList.toggle("invisible");
    darkeningCover.classList.toggle("invisible");

    pageSections.forEach((element) => {
        element.classList.toggle("clear");
        element.classList.toggle("selectable");
        }
    );
});





