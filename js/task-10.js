const boxesContainerRef = document.querySelector('#boxes');
const numberInputRef = document.querySelector('#controls input');
const createBoxBtnRef = document.querySelector('[data-create]');
const deleteBoxBtnRef = document.querySelector('[data-destroy]');

createBoxBtnRef.addEventListener('click', onBoxCreate);
deleteBoxBtnRef.addEventListener('click', destroyBoxes);

function onBoxCreate() {
  if (numberInputRef.valueAsNumber) createBoxes(numberInputRef.valueAsNumber);
}

function createBoxes(amount) {
  let markup = '';

  for (let i = 0; i < amount; i += 1) {
    const size = 30 + i * 10;
    const color = getRandomHexColor();
    markup += `<div style="width: ${size}px; height: ${size}px; background-color: ${color}; margin: 5px"></div>`
  }

  boxesContainerRef.innerHTML = markup;
}

function destroyBoxes() {
  boxesContainerRef.innerHTML = '';
  numberInputRef.value = 0;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
