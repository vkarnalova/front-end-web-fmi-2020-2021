window.onload = function () {
    if (document.getElementById('submitRegisterPage') != null) {
        document.getElementById('submitRegisterPage').addEventListener("click", function () { validate('Successful registration!'); });
    }
    if (document.getElementById('submitLoginPage') != null) {
        document.getElementById('submitLoginPage').addEventListener("click", function () { validate('Successful login.'); });
    }
}

function validate(message) {
    let emailElement = document.getElementsByName('email')[0];
    let passwordElement = document.getElementsByName('password')[0];
    let errorsElement = document.createElement("p");
    document.getElementsByClassName('errors')[0].innerHTML = "";

    validateEmail(emailElement.value, errorsElement);
    validatePassword(passwordElement.value, errorsElement);

    if (errorsElement.innerHTML != '') {
        document.getElementsByClassName('errors')[0].innerHTML = '';
        document.getElementsByClassName('errors')[0].appendChild(errorsElement);
    } else {
        alert(message)
    }

    event.preventDefault();
    return false;
}

function validateEmail(emailElementContent, errorsElement) {
    if (emailElementContent == '') {
        errorsElement.appendChild(document.createTextNode("Email is required. "));
    } else if (!emailElementContent.includes('@')) {
        errorsElement.appendChild(document.createTextNode("Your Email should contain a @ symbol. "));
    } else if (!emailElementContent.includes('.')) {
        errorsElement.appendChild(document.createTextNode("Your Email should contain a . symbol. "));
    } else if (emailElementContent.length < 5) {
        errorsElement.appendChild(document.createTextNode("Your Email should have at least 5 symbols. "));
    }
}

function validatePassword(passwordElementValue, errorsElement) {
    if (passwordElementValue.length < 6) {
        errorsElement.appendChild(document.createTextNode("Your password should have at least 5 symbols. "));
    } else if (!/[A-Z]/.test(passwordElementValue)) {
        errorsElement.appendChild(document.createTextNode("Your password should contain at least one upper-case letter. "));
    } else if (!/[0-9]/.test(passwordElementValue)) {
        errorsElement.appendChild(document.createTextNode("Your password should contain at least one number. "));
    } else if (!/[!@#$%^&]/.test(passwordElementValue)) {
        errorsElement.appendChild(document.createTextNode("Your password should contain at least one of the special symbols !@#$%^&. "));
    }
}