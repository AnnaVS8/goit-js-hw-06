const inputEl = document.querySelector("#validation-input");
// console.log(inputEl);

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur() {
  if (inputEl.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.remove("invalid");
    return inputEl.classList.add("valid");
  }

  inputEl.classList.add("invalid");
  inputEl.classList.remove("valid");
}
