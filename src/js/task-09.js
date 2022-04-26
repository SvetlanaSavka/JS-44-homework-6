//Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

//<div class="widget">
//<p>Background color: <span class="color">-</span></p>
//<button type="button" class="change-color">Change color</button>
//</div>
//Для генерации случайного цвета используй функцию getRandomHexColor.

const colorBtn = document.querySelector(".change-color");
const colorBody = document.querySelector(".color");

colorBtn.addEventListener("click", changeColor);

function changeColor() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorBody.textContent = newColor;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
