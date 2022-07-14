const textInputRef = document.querySelector('#validation-input');
const symbolsNumber = Number(textInputRef.dataset.length);

textInputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length === symbolsNumber) {
    event.currentTarget.classList.add('valid');
    event.currentTarget.classList.remove('invalid');
  } else {
    event.currentTarget.classList.add('invalid');
    event.currentTarget.classList.remove('valid');
  }
}
