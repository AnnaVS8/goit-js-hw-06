const refs = {
  button: document.querySelector(".change-color"),
  BodyColor: document.querySelector(".color"),
};
// console.log(refs.button);
// console.log(refs.BodyColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function randomColorOnBody() {
  document.body.style.background = getRandomHexColor();
  refs.BodyColor.textContent = getRandomHexColor();
}

refs.button.addEventListener("click", randomColorOnBody);
