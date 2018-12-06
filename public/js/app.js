const form = document.querySelector(".food-form");

form.addEventListener("submit", e => {
  e.preventDefault();
  //assigns value of name input
  const nameInput = e.target[0].value;

  postRequest(JSON.stringify(nameInput));
});

const postRequest = function(input) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "sendDetails", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onload = function() {
    // do something to response - not sure why this is here (copy/pasted oops)
    console.log(this.responseText);
  };
  xhr.send(input);
};
