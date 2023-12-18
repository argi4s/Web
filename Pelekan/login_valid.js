function loginValidated() {
    var Username = document.forms['form']['Username'];
    var Password = document.forms['form']['Password'];

    var Username_error = document.getElementById('Username_error');
    var Password_error = document.getElementById('Password_error');

   
    resetErrors([Username, Password], [Username_error, Password_error]);

    
    if (Username.value.length < 3) {
        displayError(Username, Username_error, "Please fill up your Username");
        return false;
    }

    if (Password.value.length < 8) {
        displayError(Password, Password_error, "Please fill up your Password");
        return false;
    }

    // If inputs are valid, you can proceed with AJAX to check credentials on the server
    // Alternatively, you can submit the form and handle the login logic on the server

    return true;
}

function displayError(input, errorElement, errorMessage) {
    input.style.border = "1px solid red";
    errorElement.textContent = errorMessage;
    errorElement.style.display = "block";
    input.focus();
}

function resetErrors(inputs, errorElements) {
    inputs.forEach(input => (input.style.border = "1px solid silver"));
    errorElements.forEach(errorElement => (errorElement.style.display = "none"));
}
