// Create a JSON file which contains the following details per employee:

// Unique ID
// First Name
// Last Name
// Email address
// Job Title
// Salary
// Fill the JSON file with meaningful data for 10 Employees. Print each employee's details in a table which will look representative and easily readable for the management team.
let employees1 = JSON.parse(employees);
console.log(employees1)
let tbodyEmployees = document.getElementById("tbodyEmployees");

    
    for (let i = 0 ; i < employees1.length ; i++) {
        tbodyEmployees.innerHTML += `<tr>
          <th scope="row">${employees1[i].id}</th>
          <td>${employees1[i].firstName}</td>
          <td>${employees1[i].lastName}</td>
          <td>${employees1[i].emailAddress}</td>
          <td>${employees1[i].jobTitle}</td>
          <td>${employees1[i].salary}Є</td>
        </tr>`
      };
