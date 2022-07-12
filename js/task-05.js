const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

const onNameInputChange = event => {
  if (event.currentTarget.value === '') {
    nameOutputRef.textContent = 'Anonymous';
  } else {
    nameOutputRef.textContent = event.currentTarget.value;
  }
};

nameInputRef.addEventListener('input', onNameInputChange);
