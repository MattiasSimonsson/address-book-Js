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

function addContact(event) {
  event.preventDefault();   
  let newContact = `<td> ${form.name.value} </td> <td> ${form.age.value} </td> <td> ${form.phone.value} </td> <td> ${form.email.value} </td>`;
  table.innerHTML = newContact;
}






form.addEventListener('submit', addContact);


















