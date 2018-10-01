/* eslint-disable */
let value = '';

window.setInterval(() => {
  if (value === '' || value === null) {
    value = sessionStorage.getItem('world');
  } else {
    document.getElementsByClassName('status')[0].innerText = 'Value add successful';
  }
}, 200);

function submitForm(event) {
  event.preventDefault();
  const key = document.getElementById('key');
  const keyValue = document.getElementById('value');
  sessionStorage.setItem(key.value, keyValue.value);
  key.value = '';
  keyValue.value = '';
  updateNode();
}

function updateNode() {
  const ul = document.getElementById("sessionList");
  ul.innerHTML = '';

  Object.keys(sessionStorage).forEach(key => {
    const value = sessionStorage.getItem(key);
    const li = document.createElement("li");
    const liChild = `${key} => ${value}     <button href="" onclick="deleteKey('${key}')">Delete</button>`;
    li.innerHTML = liChild;
    ul.appendChild(li);
  });
}

function deleteKey(key) {
  sessionStorage.removeItem(key);
  updateNode();
}
updateNode();