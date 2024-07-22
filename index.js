// Add your code here
function submitData(name,email){
    // let userEmail = "peterkigo33@gmail.com"
    // let userName = "peter"
    let userDetails = {
        name: name,
        email: email
    }
  return fetch("http://localhost:3000/users",{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept" : "application/json"
    },
    body: JSON.stringify(userDetails)
    })
    .then(response => response.json())
    .then(json => {
        // AppendING the ID to the DOM
        const body = document.querySelector('body');
        const p = document.createElement('p');
        p.textContent = json.id;
        body.appendChild(p);
    })
    .catch (error =>{
        // Handle errors and append the error message to the DOM
      const body = document.querySelector('body');
      const p = document.createElement('p');
      p.textContent = error.message;
      body.appendChild(p);
    })
}
submitData("peter","peterkigo33@gmail.com")