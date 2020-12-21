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



function submit(event) {
  addNewContact();
  
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


// EventListeners
form.addEventListener('submit', submit);
showContactBtn.addEventListener('click', toggleDisplayContacts);


















