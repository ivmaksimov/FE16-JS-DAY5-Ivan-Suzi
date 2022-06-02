
let cars = [{

      "id": "01",
      "name": "Audi",
      "model": "A4",
      "yearOfProduction": "2021",
      "color": "Blue",
      "seats": "5",
      "doors": "4",
      "transmission": "Automatic"
    }, {
      "id": "02",
      "name": "BMW",
      "model": "5 series",
      "yearOfProduction": "2020",
      "color": "Red",
      "seats": "5",
      "doors": "4",
      "transmission": "Manual"
    }, {
      "id": "03",
      "name": "Lexus",
      "model": "Rx 450h",
      "yearOfProduction": "2019",
      "color": "Black",
      "seats": "5",
      "doors": "5",
      "transmission": "Automatic"
    }];

    let animals = [{

      "id": "01",
      "kind": "Dog",
      "name": "Bak",
      "yearOfBirth": "2019",
      "size": "Small",
      "breed": "Bichon Frise",
      "sex": "Male",
    }, {
      "id": "02",
      "kind": "cat",
      "name": "Anis",
      "yearOfBirth": "2021",
      "size": "medium",
      "breed": "Bengal",
      "sex": "Female",
    }, {
      "id": "03",
      "kind": "Snake",
      "name": "Loli",
      "yearOfBirth": "2022",
      "size": "small",
      "breed": "Black Mamba",
      "sex": "Female",
    }];

    let persons = [{

      "id": "01",
      "firstName": "Torsten",
      "lastName": "Lehmann",
      "dateOfBirth": "May 31, 2003",
      "eyeColor": "Grey",
      "address": "Hadikgasse 45 9062 KRAINIG",
      "telNumber": "067555555",
      "gender": "Male",
    }, {
      "id": "02",
      "firstName": "Florian",
      "lastName": "Ebersbach",
      "dateOfBirth": "April 26, 1952",
      "eyeColor": "Blue",
      "address": "Staudgasse 48 4312 WACHSREITH",
      "telNumber": "067444444",
      "gender": "Male",
    }, {
      "id": "03",
      "firstName": "Manuela",
      "lastName": "Peters",
      "dateOfBirth": "January 29, 1968",
      "eyeColor": "Green",
      "address": "Galgenau 12 7311 NECKENMARKT",
      "telNumber": "067333333",
      "gender": "Female",
    }];
    
    let tbodyCars = document.getElementById("tbodyCars");
    
    for (let i = 0 ; i < cars.length ; i++) {
        tbodyCars.innerHTML += `<tr>
          <th scope="row">${cars[i].id}</th>
          <td>${cars[i].name}</td>
          <td>${cars[i].model}</td>
          <td>${cars[i].yearOfProduction}</td>
          <td>${cars[i].color}</td>
          <td>${cars[i].seats}</td>
          <td>${cars[i].doors}</td>
          <td>${cars[i].transmission}</td>
        </tr>`
      };

      let tbodyAnimals = document.getElementById("tbodyAnimals");

      for (let i = 0 ; i < animals.length ; i++) {
        tbodyAnimals.innerHTML += `<tr>
          <th scope="row">${animals[i].id}</th>
          <td>${animals[i].kind}</td>
          <td>${animals[i].name}</td>
          <td>${animals[i].yearOfBirth}</td>
          <td>${animals[i].size}</td>
          <td>${animals[i].breed}</td>
          <td>${animals[i].sex}</td>
        </tr>`
      };

      let tbodyPersons = document.getElementById("tbodyPersons");

      for (let i = 0 ; i < persons.length ; i++) {
        tbodyPersons.innerHTML += `<tr>
          <th scope="row">${animals[i].id}</th>
          <td>${persons[i].firstName}</td>
          <td>${persons[i].lastName}</td>
          <td>${persons[i].dateOfBirth}</td>
          <td>${persons[i].eyeColor}</td>
          <td>${persons[i].address}</td>
          <td>${persons[i].telNumber}</td>
          <td>${persons[i].gender}</td>
        </tr>`
      };
    

