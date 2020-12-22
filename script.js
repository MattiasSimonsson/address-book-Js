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
}

function deleteContact(e) {
  if (e.target.className === 'btn-delete') {
    const deleteBtn = e.target;
    if (confirm('Do you really want to remove this contact?')) {
      deleteBtn.closest('tr').remove();
    } else {
      return false;
    }
  }
}

// show contacts
// function displayContacts() {
//   table.style.display = 'block';
// }

// EventListeners
form.addEventListener('submit', onAddContact);

// Delete btn for contact
document.addEventListener('click', deleteContact);
