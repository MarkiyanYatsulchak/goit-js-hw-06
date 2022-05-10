
const refs = {
    textInput: document.querySelector("#name-input"),
    textOutput: document.querySelector("#name-output"),
};

refs.textInput.addEventListener("input", textChange);

function textChange(event) {
    if (refs.textInput.value !== "") { refs.textOutput.textContent = event.currentTarget.value }
    
 else { refs.textOutput.textContent = "Anonymous" }
};