const form = document.querySelector(".food-form");

form.addEventListener("submit", e => {
    e.preventDefault();

    // get form data
    const nameInput = e.target[0].value;
    const foodInput = e.target[1].value;
    const isVeg = e.target[2].checked;
    const isPaid = e.target[3].checked;

    const formInfo = [nameInput, foodInput, isVeg, isPaid];
    
    // NOTE: does this need a string RATHER than an array?
    postRequest(formInfo);

});




// insert database info from DOM
const insertInDOM = function(data) {
  const ul = document.querySelector("#people_list ul");
  const list = data.map(item => `<li> ${item.name} </li>`).join("");
  ul.innerHTML = list;

  // clear the form values
  form.reset();
};
