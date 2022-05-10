const changeColorBtn = document.querySelector('.change-color')
const bodyColor = document.querySelector('body');
const colorNumber = document.querySelector('.color')

// console.log(bodyColor);



changeColorBtn.addEventListener('click', handleColor);

function handleColor() {
  bodyColor.style.backgroundColor = getRandomHexColor()
  colorNumber.innerHTML = getRandomHexColor()
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


