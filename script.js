// buttons
let deleteBtn = document.createElement('button');

// form / table
let form = document.getElementById('form');
let table = document.getElementById('table');
let tableBody = document.querySelector('.tableBody');

// form values
let name = document.getElementById('name');
let age = document.getElementById('age');
let telephone = document.getElementById('phone');
let email = document.getElementById('email');

function submit(e) {
  addNewContact();
  displayContacts();

  e.preventDefault();
}

function addNewContact() {
  let contactsArray = [];

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
  info.appendChild(deleteBtn);
}

// show contacts
function displayContacts() {
  table.style.display = 'block';
}

// EventListeners
form.addEventListener('submit', submit);
deleteBtn.addEventListener('click', deleteContact);
