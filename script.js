const usernameInput = document.getElementById('username');
const validateUsername = () => {
    let usernameVal = usernameInput.value;
    const usernameErrorMsg = document.querySelector('.username-alert');
    if(usernameVal.length > 3 && usernameVal.length < 25){
        usernameErrorMsg.innerText = '';
        usernameInput.classList.remove('alert');
        usernameInput.classList.add('success');
        return true;
    } else if(usernameVal.length == 0) {
        usernameErrorMsg.innerText = 'Username cannot be empty';
        usernameInput.classList.add('alert');
        return false;
    } else {
      usernameErrorMsg.innerText = 'Username must be between 3 and 25 characters';
      usernameInput.classList.add('alert');
      return false;
    }
}

const emailInput = document.getElementById('email');
const validateEmail = () => {
    let emailVal = emailInput.value;
    const emailErrorMsg = document.querySelector('.email-alert');
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(emailVal.length == 0){
        emailErrorMsg.innerText = 'Email cannot be empty';
        emailInput.classList.add('alert');
        return false;
    } else if(emailVal.match(regex)){
        emailErrorMsg.innerText = '';
        emailInput.classList.remove('alert');
        emailInput.classList.add('success');
        return true;
    } else {
        emailErrorMsg.innerText = 'Please enter a valid email';
        emailInput.classList.add('alert');
        return false;
    }
}

let passwordInput = document.getElementById('password');
const validatePassword = () => {
    let passwordVal = passwordInput.value;
    const passwordErrorMsg = document.querySelector('.password-alert');
    // const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

    if(passwordVal.length == 0){
        passwordErrorMsg.innerText = 'Password cannot be empty';
        passwordInput.classList.add('alert');
        return false;
    } else if(passwordVal.match(regex)){
        passwordErrorMsg.innerText = '';
        passwordInput.classList.remove('alert');
        passwordInput.classList.add('success');
        return true;
    } else {
        passwordErrorMsg.innerText = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character.';
        passwordInput.classList.add('alert');
        return false;
    }
}

let confirmPasswordInput = document.getElementById('confirm-password');
const validateConfirmPassword = () => {
    let confirmPasswordVal = confirmPasswordInput.value;
    const confirmPasswordErrorMsg = document.querySelector('.confirm-password-alert');
    if(confirmPasswordVal.length == 0){
        confirmPasswordErrorMsg.innerText = 'Confirm password cannot be empty';
        confirmPasswordInput.classList.add('alert');
        return false;
    } else if(confirmPasswordVal == passwordInput.value){
        confirmPasswordErrorMsg.innerText = '';
        confirmPasswordInput.classList.remove('alert');
        confirmPasswordInput.classList.add('success');
        return true;
    } else {
        confirmPasswordErrorMsg.innerText = 'Passwords do not match';
        confirmPasswordInput.classList.add('alert');
        return false;
    }
}

const submitButton = document.getElementsByTagName('button')[0];
const onSubmit = () => {
    if(validateConfirmPassword() && validatePassword() && validateEmail() && validateUsername()){
        alert('Form submitted successfully');
    } else {
        alert('Check details and try again');
    }
}

const changeInputType = (oldObject, oType) => {
    var newObject = document.createElement('input');
    newObject.type = oType;
    if(oldObject.size) newObject.size = oldObject.size;
    if(oldObject.value) newObject.value = oldObject.value;
    if(oldObject.name) newObject.name = oldObject.name;
    if(oldObject.id) newObject.id = oldObject.id;
    if(oldObject.className) newObject.className = oldObject.className;
    oldObject.parentNode.replaceChild(newObject,oldObject);
    return newObject;
}

const togglePassword = (inputName) => {
    let passwordInput = document.getElementById(inputName);
    let passwordType = passwordInput.getAttribute('type');
    if(passwordType == 'password'){
        passwordInput = changeInputType(passwordInput, 'text');
    } else {
        passwordInput = changeInputType(passwordInput, 'password');
    }
}

const togglePasswordIcon = document.getElementById('togglePassword');
togglePasswordIcon.addEventListener('click', () => {
    togglePassword('password');
    togglePasswordIcon.classList.toggle('fa-eye-slash');
    togglePasswordIcon.classList.toggle('fa-eye');
});

const toggleConfirmPasswordIcon = document.getElementById('toggleConfirmPassword');
toggleConfirmPasswordIcon.addEventListener('click', () => {
    togglePassword('confirm-password');
    toggleConfirmPasswordIcon.classList.toggle('fa-eye-slash');
    toggleConfirmPasswordIcon.classList.toggle('fa-eye');
});

usernameInput.addEventListener('input', validateUsername);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', validateConfirmPassword);
submitButton.addEventListener('click', onSubmit);