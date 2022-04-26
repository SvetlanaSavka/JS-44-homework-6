//Задача 8 Д/З

const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault(); //При отправке формы страница не должна перезагружаться.
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }
  console.log({ email: email.value, Passsword: password.value });
  event.currentTarget.reset(form); //очисти значения полей формы методом reset
}
