
const counterValue = document.querySelector('#value');

const decrementButton = document.querySelector('button[data-action="decrement"]');

const incrementButton = document.querySelector('button[data-action="increment"]');

let a = 0;

decrementButton.addEventListener("click", () => {
    counterValue.textContent = a--;
});

incrementButton.addEventListener("click", () => {
    counterValue.textContent = a++;
});

