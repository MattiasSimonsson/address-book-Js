let showContactBtn = document.getElementById('showBtn');
let submitContact = document.getElementById('addContact')
let showContactDiv = document.getElementById('showContact-div');
let showContacts = document.querySelector('.show-contacts');
let deleteBtn = document.getElementById('deleteContact');
let table = document.getElementById('table');
let form = document.getElementById('form');

let name = document.getElementById('name');
let age = document.getElementById('age');
let telephone = document.getElementById('phone');
let email = document.getElementById('email');



showContactBtn.addEventListener('click', toggleDisplayContacts);

/*
let newTr = document.createElement("tr");
let tdName = document.createElement("td");
let tdAge = document.createElement("td");
let tdPhone = document.createElement("td");
let tdEmail = document.createElement("td");

// submitContact.addEventListener('click', createContact);

function createContact() {
let newTr = document.createElement("tr");
let tdName = document.createElement("td");
let tdAge = document.createElement("td");
let tdPhone = document.createElement("td");
let tdEmail = document.createElement("td");

tdName.innerHTML = name.value;
tdAge.innerHTML = age.value;
tdPhone.innerHTML = phone.value;
tdEmail.innerHTML = email.value;

document.getElementById('table').appendChild(newTr);
document.getElementById('table').appendChild(tdName);
document.getElementById('table').appendChild(tdAge);
document.getElementById('table').appendChild(tdPhone);
document.getElementById('table').appendChild(tdEmail);
} */

function submit(event) {
  addNewContact();
   /* let contactsArray = [];

  let newContact = `
  <th>Name</th>
  <td>${form.name.value}</td> 
  <th>Age</th>
  <td>${form.age.value}</td>
  <th>Phone</th>
  <td>${form.phone.value}</td>
  <th>Email</th>
  <td>${form.email.value}</td>`; 
  let getInfo = table.innerHTML =  `<th>Name</th>
  <td class="info">${form.name.value}</td> 
  <th>Age</th>
  <td class="info">${form.age.value}</td>
  <th>Phone</th>
  <td class="info">${form.phone.value}</td>
  <th>Email</th>
  <td class="info">${form.email.value}</td>`;
  contactsArray.push(getInfo);*/

  event.preventDefault();   
}

function addNewContact() {
  let contactsArray = [];
  let getInfo = table.innerHTML =  `<th>Name:</th>
  <td class="info">${form.name.value}</td> 
  <th>Age:</th>
  <td class="info">${form.age.value}</td>
  <th>Phone:</th>
  <td class="info">${form.phone.value}</td>
  <th>Email:</th>
  <td class="info">${form.email.value}</td>`;
  contactsArray.push(getInfo);
  showContactDiv.innerHTML += '<br><br>' + contactsArray;  
}


function toggleDisplayContacts() {
  if(table.style.display === 'none') {
    table.style.display = 'block';
  } else {
    table.style.display = 'none';
  }
}


form.addEventListener('submit', submit);


















