const textInput = document.querySelector("#validation-input");
textInput.addEventListener("blur", checkInputLength);
function checkInputLength(event) {
  if (
    event.currentTarget.value.length > textInput.dataset.length ||
    event.currentTarget.value.length < textInput.dataset.length
  ) {
    return textInput.classList.add("invalid");
  }
  return textInput.classList.replace("invalid", "valid");
}
