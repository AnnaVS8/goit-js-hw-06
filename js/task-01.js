// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categoriesEl = document.querySelector("#categories");

const listEls = categoriesEl.querySelectorAll("li.item");
console.log(`Number of categories: ${listEls.length}`);

listEls.forEach((it) => {
  const category = it.querySelector("h2").textContent;
  const elements = it.querySelectorAll(":scope > ul> li").length;
  console.log(`Category: ${category}\nElements: ${elements}`);
});

// Var1
// const titleELs = document.querySelectorAll("h2");
// const itemEls = categoriesEl.querySelectorAll("ul");

// function getElements(items) {
//   for (const item of items) {
//     console.log(`Category: ${item.firstElementChild.textContent}`);
//     console.log(`Elements: ${item.lastElementChild.children.length}`);
//   }
// }
// getElements(listEls);

// Var 2
// const arrayOfCategories = [...listEls]
//   .map(
//     categories => `Category: ${categories.children[0].textContent}
//     Elements: ${categories.children[1].children.length}`
//   )
//   .join("\n");
// console.log(arrayOfCategories);
