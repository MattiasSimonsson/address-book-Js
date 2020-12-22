let showContactBtn = document.getElementById('showBtn');
let deleteBtn = document.createElement('button');
let submitContact = document.getElementById('addContact');
let showContactDiv = document.getElementById('showContact-div');
let showContacts = document.querySelector('.show-contacts');

let table = document.getElementById('table');
let tableBody = document.querySelector('.tableBody');
let form = document.getElementById('form');

// form values
let name = document.getElementById('name');
let age = document.getElementById('age');
let telephone = document.getElementById('phone');
let email = document.getElementById('email');

function submit(event) {
  addNewContact();

  event.preventDefault();
}

function addNewContact() {
  let contactsArray = [];

  /*
  let newContact = `<th>Name:</th>
  <td class="info">${form.name.value}</td> 
  <th>Age:</th>
  <td class="info">${form.age.value}</td>
  <th>Phone:</th>
  <td class="info">${form.phone.value}</td>
  <th>Email:</th>
  <td class="info">${form.email.value}</td>`;  */

  contactsArray.push(`
  <td class="info">${form.name.value}</td>   
  <td class="info">${form.age.value}</td> 
  <td class="info">${form.phone.value}</td>
  <td class="info">${form.email.value}</td>`);
  tableBody.innerHTML += contactsArray + '<br>';
}

function deleteContact() {
  deleteBtn.setAttribute('class', 'btn-delete');
  deleteBtn.appendChild(document.createTextNode('Delete'));
  showContactDiv.appendChild(deleteBtn);
}

function toggleDisplayContacts() {
  if (table.style.display === 'none') {
    table.style.display = 'block';
  } else {
    table.style.display = 'none';
  }
}

// EventListeners
form.addEventListener('submit', submit);
showContactBtn.addEventListener('click', toggleDisplayContacts);
deleteBtn.addEventListener('click', deleteContact);
