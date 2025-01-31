const popupNotice = document.querySelector(".popup-notice");
const closeBtn = document.querySelector(".close-btn");
const darkeningCover = document.querySelector(".darkening-cover");

closeBtn.addEventListener("click", () => {
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");

    popupNotice.remove();
    darkeningCover.remove();

    header.style.filter = "none";
    main.style.filter = "none";
    footer.style.filter = "none";
});





