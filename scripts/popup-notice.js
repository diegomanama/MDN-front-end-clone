const popupWrapper = document.querySelector(".popup-wrapper");
const closeBtn = document.querySelector(".close-btn");
const darkeningCover = document.querySelector(".darkening-cover");

closeBtn.addEventListener("click", () => {
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");

    popupWrapper.remove();
    darkeningCover.remove();

    header.style.filter = "none";
    main.style.filter = "none";
    footer.style.filter = "none";
});





