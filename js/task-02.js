const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const innerHTMLList = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");
console.log(innerHTMLList);
ingredientsEl.innerHTML = innerHTMLList;
console.log(ingredientsEl);
