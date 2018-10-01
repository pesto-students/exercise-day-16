/* eslint-disable */
let value = '';

const keyElement = document.getElementById('key');
const valueElement = document.getElementById('value');
const list = document.getElementById('list');
document.getElementById("form").addEventListener("submit", handleSubmit);

window.setInterval(() => {
  if (value === '' || value === null) {
    value = sessionStorage.getItem('world');
  } else {
    document.getElementsByClassName('status')[0].innerText = 'Value add successful';
  }
}, 200);

function handleSubmit(e) {
  e.preventDefault();
  sessionStorage.setItem(keyElement.value, valueElement.value);
  // alert('Saved:'+sessionStorage.getItem(keyElement.value));
  list.innerHTML += `<li><strong>${keyElement.value}</strong>:${valueElement.value}<span class="close">---X---</span></li>`;
  // --------------------------
  var close = document.getElementsByClassName("close");
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      sessionStorage.removeItem(keyElement.value);
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

