const postRequest = function(input) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "sendDetails", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onload = function() {
    //receive data from server
    console.log(JSON.parse(this.responseText));
  };
  xhr.send(input);
};
