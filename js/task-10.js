const boxesContainerRef = document.querySelector('#boxes');
const numberInputRef = document.querySelector('#controls input');
const createBoxBtnRef = document.querySelector('[data-create]');
const deleteBoxBtnRef = document.querySelector('[data-destroy]');

createBoxBtnRef.addEventListener('click', onBoxCreate);
deleteBoxBtnRef.addEventListener('click', destroyBoxes);

function onBoxCreate(e) {
  const createdBoxes = getNumberOfBoxes();

  if (numberInputRef.valueAsNumber) createBoxes(numberInputRef.valueAsNumber, createdBoxes);
}

function createBoxes(amount, startNumber) {
  let markup = '';

  for (let i = 0; i < amount; i += 1) {
    const size = 30 + (i + startNumber) * 10;
    const color = getRandomHexColor();
    markup += `<div style="width: ${size}px; height: ${size}px; background-color: ${color}; margin: 5px"></div>`;
  }

  boxesContainerRef.insertAdjacentHTML('beforeend', markup);
}

function getNumberOfBoxes() {
  return boxesContainerRef.querySelectorAll('div').length;
}

function destroyBoxes() {
  boxesContainerRef.innerHTML = '';
  numberInputRef.value = 0;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
