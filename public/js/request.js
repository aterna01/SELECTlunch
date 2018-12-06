


const postRequest = (getLunch) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const result = JSON.parse(xhr.responseText);
        // callback function
        // imgCallback(imgResult);
        console.log(result);

      }
    };
    xhr.open("POST", '/sendDetails', true);
    xhr.send(getLunch);
};