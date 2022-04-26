// Посчитает и выведет в консоль количество категорий в ul#categories
const categoriesItemsEl = document.querySelectorAll(".item").length;
console.log(`Number of categories: ${categoriesItemsEl}`);
//Выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

const categoryQuntityElements = document
  .querySelectorAll(".item")
  .forEach((el) => {
    const category = el.querySelector("h2").textContent;
    const quantityElem = el.querySelectorAll("li").length;

    console.log(`Category: ${category}`);
    console.log(`Elements: ${quantityElem}`);
  });
