const refs = {
    inputSize: document.querySelector('#font-size-control'),
    outputSize: document.querySelector('#text'),
}

refs.inputSize.addEventListener('input', scaleFont);

function scaleFont() {
    refs.outputSize.style.fontSize = `${refs.inputSize.value}px`
};
