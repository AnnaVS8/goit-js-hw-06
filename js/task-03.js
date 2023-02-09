// Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.

// <ul class="gallery"></ul>

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listEl = document.querySelector(".gallery");
// var1
// const makeImagesList = (addImage) => {
//   return addImage.map((image) => {
//     const listItemEl = document.createElement("li");

//     const imgEl = document.createElement("img");
//     imgEl.src = image.url;
//     imgEl.alt = image.alt;
//     imgEl.width = 900;
//     imgEl.height = 600;
//     listItemEl.appendChild(imgEl);
//     return listItemEl;
//   });
// };

// const elements = makeImagesList(images);
// listEl.append(...elements);

// var2
const makeImagesList = ({ url, alt }) =>
  `<li>
    <img src = "${url}"
     alt = "${alt}" 
     width = "900"
     height = "600">
     </li>`;
const imagesEl = images.map(makeImagesList).join("");

listEl.insertAdjacentHTML("afterbegin", imagesEl);

console.log(listEl);
