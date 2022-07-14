const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const { elements: { email, password } } = event.currentTarget;

if (email.value === '' || password.value === '') {
  alert('Все поля должны быть заполнены!');
  return;
}

const formElements = {};

for (const element of event.currentTarget.elements) {
  if (element.name) formElements[element.name] = element.value;
}

console.log(formElements);

event.currentTarget.reset();
}


