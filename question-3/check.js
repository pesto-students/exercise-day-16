/* eslint-disable */
let value = '';

window.setInterval(() => {
  if (value === '' || value === null) {
    value = sessionStorage.getItem('world');
  } else {
    document.getElementsByClassName('status')[0].innerText = 'Value added successfully';
  }
}, 200);


function submitForm() {
  const key = document.forms[0]['firstname'].value;
  const value = document.forms[0]['lastname'].value;
  console.log(key);
  if (key === 'world') {
    sessionStorage.setItem(key, value);
    console.log(sessionStorage);
  }

  return false;
}



