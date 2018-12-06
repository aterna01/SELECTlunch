const form = document.querySelector(".food-form");

form.addEventListener("submit", e => {
    e.preventDefault();

    // get form data
    
    const nameInput = e.target[0].value;
    const foodInput = e.target[1].value;
    const isVeg = e.target[2].checked;
    const isPaid = e.target[3].checked;

    const formInfo = [nameInput, foodInput, isVeg, isPaid];
    // console.log(formInfo);

    // // compose object - attempt to use formData constructor function
    // const formData = new FormData();
    // formData.append('name', nameInput);
    // formData.append('food', foodInput);
    // formData.append('veg', isVeg);
    // formData.append('paid', isPaid);

    // // Display the key/value pairs
    // for(let pair of formData.entries()) {
    //     console.log(pair[0]+ ', '+ pair[1]); 
    // }

    postRequest(formInfo);

});
