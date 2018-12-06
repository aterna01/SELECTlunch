


const postRequest = (formData) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const result = JSON.parse(xhr.responseText);
        // callback function
        // imgCallback(imgResult);

        
        
        // parse the result???
        console.log(result);
        insertInDOM(result);

      }
    };
    xhr.open("POST", '/sendDetails', true);
    xhr.send(formData);
};