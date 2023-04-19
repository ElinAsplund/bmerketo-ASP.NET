﻿//Header-menu
try {
    const toggleBtn = document.querySelector('[data-option="toggle"]')
    toggleBtn.addEventListener('click', function () {
        const element = document.querySelector(toggleBtn.getAttribute('data-target'))

        if (!element.classList.contains('menu-show')) {
            element.classList.add('menu-show')
            element.classList.remove('menu-hide')

            toggleBtn.classList.add('btn-dark')
            toggleBtn.classList.remove('btn-white')
        }

        else {
            element.classList.remove('menu-show')
            element.classList.add('menu-hide')

            toggleBtn.classList.add('btn-white')
            toggleBtn.classList.remove('btn-dark')
        }
    })
} catch { }

//Footer
function footerPosition(element, scrollHeight, innerHeight) {
    try {
        const _element = document.querySelector(element)
        const isTallerThanScreen = scrollHeight >= (innerHeight + _element.scrollHeight)

        _element.classList.toggle('position-fixed-bottom', !isTallerThanScreen)
        _element.classList.toggle('position-static', isTallerThanScreen)
    } catch { }
}
footerPosition('footer', document.body.scrollHeight, window.innerHeight)


//Validations!
function removeAspValidation(errorSpan) {
    if (errorSpan.innerText !== null)
        errorSpan.classList.add("d-none")
}

function validateInputSwitch(element, errorMsg, label) {
    errorMsg.innerText = "";

    //--THIS PART, NOT NEEDED?--
    firstNameOK = false;
    lastNameOK = false;
    streetNameOK = false;
    postalCodeOK = false;
    cityOK = false;
    emailOK = false;
    passwordOK = false;
    //------------------------

    const regExName = /^[a-öA-Ö]+(?:[ é'-][a-öA-Ö]+)*$/;
    const regExEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;



    if (element.value === "")
        errorMsg.innerText = `Please enter a ${label}.`;

    switch (label) {
        case "first name":
            if (element.value.length < 2)
                errorMsg.innerText = `Your ${label} must contain at least 2 characters!`;

            if (!regExName.test(element.value))
                errorMsg.innerText = `Please enter a valid ${label}.`;

            if (errorMsg.innerText === "")
                firstNameOK = true;

            break;

        case "last name":
            if (element.value.length < 2)
                errorMsg.innerText = `Your ${label} must contain at least 2 characters!`;

            if (!regExName.test(element.value))
                errorMsg.innerText = `Please enter a valid ${label}.`;

            if (errorMsg.innerText === "")
                lastNameOK = true;

            break;

        case "street name":
            if (errorMsg.innerText === "")
                streetNameOK = true;

            break;

        case "postal code":
            if (errorMsg.innerText === "")
                postalCodeOK = true;

            break;

        case "city":
            if (errorMsg.innerText === "")
                cityOK = true;

            break;

        case "email":
            if (element.value === "")
                errorMsg.innerText = `Please enter an ${label}.`;

            if (!regExEmail.test(element.value))
                errorMsg.innerText = `Please enter a valid ${label}.`;

            if (errorMsg.innerText === "")
                emailOK = true;

            break;

        case "password":
            if (element.value.length < 8)
                errorMsg.innerText = `Your ${label} must contain at least 8 characters!`;

            if (element.value === "")
                errorMsg.innerText = `Please enter a ${label}.`;

            if (errorMsg.innerText === "")
                passwordOK = true;

            break;

        case "confirm password":
            if (element.value.length < 8)
                errorMsg.innerText = `Your confirmed password must contain at least 8 characters!`;

            if (element.value === "")
                errorMsg.innerText = `Please confirm the password.`;

            if (errorMsg.innerText === "")
                passwordOK = true;

            break;

    }

    //if (firstNameOK && lastNameOK && streetNameOK && postalCodeOK && cityOK && emailOK && passwordOK && confirmPasswordOK) {
    //    console.log("true")
    //    return true;
    //}
}

function validateFirstNameSwitch(event) {
    try {
        const errorMsg = document.querySelector('#first-name-error');
        const errorSpan = document.querySelector('#first-name-span');
        let element = event.target;

        removeAspValidation(errorSpan)

        if (validateInputSwitch(element, errorMsg, "first name"))
            return true;

    } catch { }
}

function validateLastNameSwitch(event) {
    try {
        const errorMsg = document.querySelector('#last-name-error');
        const errorSpan = document.querySelector('#last-name-span');
        let element = event.target;

        removeAspValidation(errorSpan)

        if (validateInputSwitch(element, errorMsg, "last name"))
            return true;

    } catch { }
}

function validateStreetNameSwitch(event) {
    try {
        const errorMsg = document.querySelector('#street-name-error');
        const errorSpan = document.querySelector('#street-name-span');
        let element = event.target;

        removeAspValidation(errorSpan)

        if (validateInputSwitch(element, errorMsg, "street name"))
            return true;

    } catch { }
}

function validatePostalCodeSwitch(event) {
    try {
        const errorMsg = document.querySelector('#postal-code-error');
        const errorSpan = document.querySelector('#postal-code-span');
        let element = event.target;

        removeAspValidation(errorSpan)

        if (validateInputSwitch(element, errorMsg, "postal code"))
            return true;

    } catch { }
}

function validateCitySwitch(event) {
    try {
        const errorMsg = document.querySelector('#city-error');
        const errorSpan = document.querySelector('#city-span');
        let element = event.target;

        removeAspValidation(errorSpan)

        if (validateInputSwitch(element, errorMsg, "city"))
            return true;
    } catch { }
}

function validateEmailSwitch(event) {
    try {
        const errorMsg = document.querySelector('#email-error');
        const errorSpan = document.querySelector('#email-span');
        let element = event.target;

        removeAspValidation(errorSpan)

        if (validateInputSwitch(element, errorMsg, "email"))
            return true;
    } catch { }
}
function validatePasswordSwitch(event) {
    try {
        const errorMsg = document.querySelector('#password-error');
        const errorSpan = document.querySelector('#password-span');
        let element = event.target;

        removeAspValidation(errorSpan)

        if (validateInputSwitch(element, errorMsg, "password"))
            return true;
    } catch { }
}

function validateConfirmPasswordSwitch(event) {
    try {
        const errorMsg = document.querySelector('#confirm-password-error');
        const errorSpan = document.querySelector('#confirm-password-span');
        let element = event.target;

        removeAspValidation(errorSpan)

        if (validateInputSwitch(element, errorMsg, "confirm password"))
            return true;
    } catch { }
}






//Each value by its own error-validation
function validateErrorFirstName() {
    let firstNameOK = false;
    const errorFirstName = document.querySelector('#first-name-error');
    const inputFirstName = document.querySelector('#first-name-input');

    if (inputFirstName.value !== "") {
        if (errorFirstName.innerText === "") {
            firstNameOK = true;
        } else {
            firstNameOK = false;
        }
    } else {
        firstNameOK = false;
    }

    return firstNameOK;
}

function validateErrorLastName() {
    let lastNameOK = false;
    const errorLastName = document.querySelector('#last-name-error');
    const inputLastName = document.querySelector('#last-name-input');

    if (inputLastName.value !== "") {
        if (errorLastName.innerText === "") {
            lastNameOK = true;
        } else {
            lastNameOK = false;
        }
    } else {
        lastNameOK = false;
    }

    return lastNameOK;
}

function validateErrorStreetName() {
    let streetNameOK = false;
    const errorStreetName = document.querySelector('#street-name-error');
    const inputStreetName = document.querySelector('#street-name-input');

    if (inputStreetName.value !== "") {
        if (errorStreetName.innerText === "") {
            streetNameOK = true;
        } else {
            streetNameOK = false;
        }
    } else {
        streetNameOK = false;
    }

    return streetNameOK;
}

function validateErrorPostalCode() {
    let postalCodeOK = false;
    const errorPostalCode = document.querySelector('#postal-code-error');
    const inputPostalCode = document.querySelector('#postal-code-input');

    if (inputPostalCode.value !== "") {
        if (errorPostalCode.innerText === "") {
            postalCodeOK = true;
        } else {
            postalCodeOK = false;
        }
    } else {
        postalCodeOK = false;
    }

    return postalCodeOK;
}

function validateErrorCity() {
    let cityOK = false;
    const errorCity = document.querySelector('#city-error');
    const inputCity = document.querySelector('#city-input');

    if (inputCity.value !== "") {
        if (errorCity.innerText === "") {
            cityOK = true;
        } else {
            cityOK = false;
        }
    } else {
        cityOK = false;
    }

    return cityOK;
}

function validateErrorEmail() {
    let emailOK = false;
    const errorEmail = document.querySelector('#email-error');
    const inputEmail = document.querySelector('#email-input');

    if (inputEmail.value !== "") {
        if (errorEmail.innerText === "") {
            emailOK = true;
        } else {
            emailOK = false;
        }
    } else {
        emailOK = false;
    }

    return emailOK;
}

function validateErrorPassword() {
    let passwordOK = false;
    const errorPassword = document.querySelector('#password-error');
    const inputPassword = document.querySelector('#password-input');

    if (inputPassword.value !== "") {
        if (errorPassword.innerText === "") {
            passwordOK = true;
        } else {
            passwordOK = false;
        }
    } else {
        passwordOK = false;
    }

    return passwordOK;
}

function validateErrorConfirmPassword() {
    let confirmPasswordOK = false;
    const errorConfirmPassword = document.querySelector('#confirm-password-error');
    const inputConfirmPassword = document.querySelector('#confirm-password-input');

    if (inputConfirmPassword.value !== "") {
        if (errorConfirmPassword.innerText === "") {
            confirmPasswordOK = true;
        } else {
            confirmPasswordOK = false;
        }
    } else {
        confirmPasswordOK = false;
    }

    return confirmPasswordOK;
}

//Validation all by error-validation
function validateAll(event) {
    try {
        event.preventDefault();

        const errorDiv = document.querySelector('#form-error');

        var firstNameOK = validateErrorFirstName();
        var lastNameOK = validateErrorLastName();
        var streetNameOK = validateErrorStreetName();
        var postalCodeOK = validateErrorPostalCode();
        var cityOK = validateErrorCity();
        var emailOK = validateErrorEmail();
        var passwordOK = validateErrorPassword();
        var confirmPasswordOK = validateErrorConfirmPassword();

        if (firstNameOK && lastNameOK && streetNameOK && postalCodeOK && cityOK && emailOK && passwordOK && confirmPasswordOK)
            event.target.submit();
        else
            errorDiv.innerText = "Please enter the form correctly.";

    } catch { }
}