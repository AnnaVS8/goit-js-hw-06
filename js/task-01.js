const categoriesEl = document.querySelector("#categories");

const listEl = categoriesEl.querySelectorAll(".item");
console.log(`Number of categories: ${listEl.length}`);

function getElements(items) {
  for (const item of items) {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
  }
}
getElements(listEl);
