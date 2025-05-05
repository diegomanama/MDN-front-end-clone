const feedbackQuestion = document.querySelector(".feedback-question");
const feedbackButtonsWrapper = document.querySelector(".feedback-buttons-wrapper");
const positiveFeedbackButton = document.querySelector(".feedback-button.yes");
const negativeFeedbackButton = document.querySelector(".feedback-button.no");
const negativeFeedbackOptionsWrapper = document.querySelector(".negative-feedback-options-wrapper");
const negativeFeedbackOptions = document.querySelectorAll(".negative-feedback-option");
const feedbackResponse = document.querySelector(".feedback-response");
const negativeFeedbackSubmitButton = document.querySelector(".negative-feedback-submit-button");

positiveFeedbackButton.addEventListener("click", () => {
    feedbackQuestion.classList.add("hidden");
    feedbackButtonsWrapper.classList.add("hidden");
    feedbackResponse.classList.add("visible");
});

negativeFeedbackButton.addEventListener("click", () => {
    feedbackQuestion.textContent = "Why was this page not helpful to you?";
    feedbackButtonsWrapper.classList.add("hidden");
    negativeFeedbackOptionsWrapper.classList.toggle("visible");
    negativeFeedbackSubmitButton.classList.toggle("visible");
});

negativeFeedbackOptions.forEach((option) => {
    option.addEventListener("click", () => negativeFeedbackSubmitButton.disabled = false);
});

negativeFeedbackSubmitButton.addEventListener("click", () => {
    feedbackQuestion.classList.add("hidden");
    negativeFeedbackOptionsWrapper.classList.toggle("visible");
    negativeFeedbackSubmitButton.classList.toggle("visible");
    feedbackResponse.classList.add("visible");
});