const form = document.querySelector(".food-form");

form.addEventListener("submit", e => {
  e.preventDefault();
  //assigns value of name input
  const nameInput = e.target[0].value;

  postRequest(JSON.stringify(nameInput));
});

// insert database info from DOM
const insertInDOM = function(data) {
  const ul = document.querySelector("#people_list ul");
  const list = data.map(item => `<li> ${item.name} </li>`).join("");
  ul.innerHTML = list;

  // clear the form values
  form.reset();
};
