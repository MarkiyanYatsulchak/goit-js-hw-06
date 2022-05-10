const refs = {
    validation: document.querySelector('#validation-input'),
}

refs.validation.addEventListener("blur", inputBlur)

function inputBlur() {
    if (refs.validation.value.length == refs.validation.getAttribute('data-length'))
    {
        refs.validation.classList.remove('invalid')
        refs.validation.classList.add('valid')
    } else {
        
        refs.validation.classList.add('invalid')
    }
    
}



