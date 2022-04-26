const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

//В HTML есть пустой список ul#ingredients.

//Напиши скрипт, который для каждого элемента массива ingredients:

///Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
//Добавит название ингредиента как его текстовое содержимое.
//Добавит элементу класс item.
//После чего вставит все <li> за одну операцию в список ul.ingredients.

const ingredientList = document.querySelector("#ingredients");
const ingredientEl = ingredients.map((ingredient) => {
  const newEl = document.createElement("li");
  newEl.textContent = ingredient;
  newEl.classList.add("item");
  return newEl;
});
ingredientList.append(...ingredientEl);
