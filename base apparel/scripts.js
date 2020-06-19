const email = document.getElementById('email');
const errorMessage = document.querySelector('.form__error-alert');

const emailValidation = () => {
  if (email.value === '' || email.value === null || !email.checkValidity()){
    errorMessage.style.visibility = 'visible';
  }
}