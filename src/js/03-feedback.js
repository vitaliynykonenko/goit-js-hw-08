import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onInputValue, 500));
form.addEventListener('submit', onSubmitForm);

const LOCALSTORAGE_KEY = 'feedback-form-state';

dataLocalStorage(form);

function onInputValue(e) {
  
  const formData = e.target.closest('form');

    const formInput = {
        email: formData.email.value,
        message: formData.message.value,
      };
  
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formInput));
}

function onSubmitForm(e) {
  
  e.preventDefault();
    const formInput = {
    email: e.currentTarget.email.value,
    message: e.currentTarget.message.value,
  };
  console.log(formInput);
  e.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function dataLocalStorage(saveField) {
  const savedMessage = localStorage.getItem(LOCALSTORAGE_KEY);

  if (savedMessage) {

    const { email, message } = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    saveField.email.value = email;
    saveField.message.value = message;
  }
}

