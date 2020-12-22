// form / table
let form = document.getElementById('form');
let table = document.getElementById('table');
let tableBody = document.querySelector('.tableBody');

document.addEventListener('click', function (e) {
  if (e.target.className === 'btn-delete') {
    console.log('LISTEN UP!');
  }
});

// form values
let name = document.getElementById('name');
let age = document.getElementById('age');
let telephone = document.getElementById('telephone');
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
  <td class="info">${form.telephone.value}</td>
  <td class="info">${form.email.value}</td>`);
  tableBody.innerHTML +=
    contactsArray + '<br>' + "<button class='btn-delete'>Delete</button>";
}

function deleteContact() {}

// show contacts
function displayContacts() {
  table.style.display = 'block';
}

// EventListeners

// send sumbit "form"
form.addEventListener('submit', submit);

// delete contact event
document.addEventListener('click', function (e) {
  if (e.target.className === 'btn-delete') {
    console.log('testing delete btn');
  }
});
