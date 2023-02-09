// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку на button.change - color
//  і виводить значення кольору в span.color.

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
  const randomColor = getRandomHexColor();
  document.body.style.background = randomColor;
  refs.BodyColor.textContent = randomColor;
}

refs.button.addEventListener("click", randomColorOnBody);
