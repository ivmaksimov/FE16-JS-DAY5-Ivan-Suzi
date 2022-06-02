// Create a JSON file which contains the following details per employee:

// Unique ID
// First Name
// Last Name
// Email address
// Job Title
// Salary
// Fill the JSON file with meaningful data for 10 Employees. Print each employee's details in a table which will look representative and easily readable for the management team.
let books1 = JSON.parse(books);
console.log(books1)
let card = document.getElementById("books");

    
    for (let i = 0 ; i < books1.length ; i++) {
        card.innerHTML += `<div class="card" style="width: 18rem;">
  <img src="${books1[i].picture}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${books1[i].title}</h5>
    <p class="card-text">${books1[i].author}</p>
    <p id="read" class=" read card-text">${books1[i].read}</p>
  </div>
</div>`
let read1 = document.querySelectorAll(".read");

if (books1[i].read.innerHTML == "Read") {
    read1.style.backgroundColor = "green";
} else {
  //  read1.style.backgroundColor = "blue";
}
}

//i can add style this way nnnnnnnn


