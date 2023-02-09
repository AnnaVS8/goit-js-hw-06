// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientEl = document.querySelector("#ingredients");
const listOfIngredients = ingredients.map((ingredient) => {
  const ListEl = document.createElement("li");
  ListEl.classList.add("item");
  ListEl.textContent = `${ingredient}`;
  return ListEl;
});

ingredientEl.append(...listOfIngredients);
console.log(ingredientEl);

// const ingredientsEl = document.querySelector("#ingredients");

// const innerHTMLList = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");
// console.log(innerHTMLList);
// ingredientsEl.innerHTML = innerHTMLList;
// console.log(ingredientsEl);
