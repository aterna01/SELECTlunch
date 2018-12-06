const form = document.querySelector(".food-form");

form.addEventListener("submit", e => {
  e.preventDefault();
  //assigns value of name input

  const formData = new FormData(form);
  // console.log(formData.get("food"));

  const nameInput = e.target[0].value;
});
