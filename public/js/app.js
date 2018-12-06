const form = document.querySelector(".food-form");

form.addEventListener("submit", e => {
  e.preventDefault();
  //assigns value of name input
  const nameInput = e.target[0].value;

  postRequest(JSON.stringify(nameInput));
});

const insertInDOM = function(element) {
  const newName = document.createElement("P");
};
