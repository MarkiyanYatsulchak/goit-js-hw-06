const inputForm = document.querySelector('.login-form');

inputForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault()
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    if (email === '' || password === '') {
        alert('Всі поля повинні бути заповнені!');

    } else { 
        console.log({ email, password});
    }
    
    inputForm.reset();
   
}

    