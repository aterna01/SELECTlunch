const postRequest = (formData) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const result = JSON.parse(xhr.responseText);
        
        // parse the result???
        console.log(result);
        insertInDOM(result);

      }
    };
    xhr.open("POST", '/sendDetails', true);
    xhr.send(formData);
};





// populate select from db on load
const getRequest = () => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const result = JSON.parse(xhr.responseText);
      // parse the result???
      console.log(result[0].name);
      populateSelect(result);

    }
  };
  xhr.open("GET", '/getFoods', true);
  xhr.send();
};