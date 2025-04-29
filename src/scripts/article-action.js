const articleActions = document.querySelector('.article-actions');
const openButton = document.querySelector(".open-article-actions-button");
const closeButton = document.querySelector(".close-article-actions-button");
const showOptionsButton = document.querySelector(".show-language-options-button");
const showOptionsButtonChevron = document.querySelector(".show-language-options-button .chevron");
const languageOptions = document.querySelector(".language-options");

openButton.addEventListener("click", () => articleActions.show());

showOptionsButton.addEventListener("click", () => {
        languageOptions.classList.toggle("visible");

        /* Toggle chevron direction when the show options button is clicked */

        showOptionsButtonChevron.getAttribute("name") === "chevron-up" 
        ? showOptionsButtonChevron.setAttribute("name", "chevron-down") 
        : showOptionsButtonChevron.setAttribute("name", "chevron-up");
    }
);

closeButton.addEventListener("click", () => {
    if (showOptionsButtonChevron.getAttribute("name") === "chevron-up") {
        languageOptions.classList.toggle("visible");
        showOptionsButtonChevron.setAttribute("name", "chevron-down");
    }
    
    articleActions.close();
}
);