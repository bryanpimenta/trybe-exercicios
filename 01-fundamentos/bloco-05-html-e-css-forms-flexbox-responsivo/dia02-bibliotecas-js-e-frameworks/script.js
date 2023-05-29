const activeBtn = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');

function getForms(event) {
  event.preventDefault();
}

activeBtn.addEventListener('click', getForms);

function checked() {
  if (agreement.checked) {
    activeBtn.disabled = false;
  } else {
    activeBtn.disabled = true;
  }
}
const disable = () => activeBtn.disabled = true;

agreement.addEventListener('click', checked);
