/* eslint-disable */
let value = '';


function traverseSessionStorage() {
  // let sessionStorageString = '';
  // let session = sessionStorage();
  // session.map(element => {
  //   sessionStorageString += `<div>1</div>`;
  // });
  // return sessionStorageString;
}


window.setInterval(() => {
  if (value === '' || value === null) {
    value = sessionStorage.getItem('world');
  } else {
    document.getElementsByClassName('status')[0].innerText = 'Value add successful';
    document.getElementsByClassName('session-status')[0].innerText = JSON.stringify(sessionStorage);
    // document.getElementsByClassName('session-status')[0].innerText = traverseSessionStorage();
  }
}, 200);


function processForm(e) {
  if (e.preventDefault) e.preventDefault();
  var firstName = document.getElementsByName('firstname')[0].value;
  var lastName = document.getElementsByName('lastname')[0].value;
  console.log(firstName, lastName);
  sessionStorage.setItem(firstName, lastName);
  sessionStorage.setItem('world', 'somevalue');
  return false;
}

var form = document.getElementById('sessionStorageForm');
if (form.attachEvent) {
  form.attachEvent("submit", processForm);
} else {
  form.addEventListener("submit", processForm);
}