// form / table
let form = document.getElementById('form');
let table = document.getElementById('table');
let tableBody = document.querySelector('tbody');

// form values
let name = document.getElementById('name');
let age = document.getElementById('age');
let telephone = document.getElementById('telephone');
let email = document.getElementById('email');

function onAddContact(e) {
  e.preventDefault();
  tableBody.innerHTML += `
    <tr>
      <td>${form.name.value}</td>
      <td>${form.age.value}</td>
      <td>${form.telephone.value}</td>
      <td>${form.email.value}</td>
      <td><button class="btn-delete">Delete</button></td>
    <tr>
  `;

  displayContacts();
}

// show contacts
function displayContacts() {
  table.style.display = 'block';
}

// EventListeners
form.addEventListener('submit', onAddContact);

// Delete btn for contact
document.addEventListener('click', function (e) {
  if (e.target.className === 'btn-delete') {
    console.log('LISTEN UP!');
  }
});
