const changeColorBtnRef = document.querySelector('.change-color');
const colorIndicatorRef = document.querySelector('.color');

changeColorBtnRef.addEventListener('click', onColorChange);

function onColorChange(event) {
  const newColor = getRandomHexColor();

  colorIndicatorRef.textContent = newColor;
  document.body.style.backgroundColor = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
