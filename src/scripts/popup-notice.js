const popupNotice = document.querySelector(".popup-notice");
const closeBtn = document.querySelector(".popup-notice .close-btn");

popupNotice.showModal();

closeBtn.addEventListener("click", () => popupNotice.close());