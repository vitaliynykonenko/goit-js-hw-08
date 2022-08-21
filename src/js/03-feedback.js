import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onInputValue, 500));
form.addEventListener('submit', onSubmitForm);

const LOCALSTORAGE_KEY = 'feedback-form-state';

const formData = {};

dataLocalStorage();

function onInputValue(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(e) {
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function dataLocalStorage() {
  const savedMessage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (savedMessage) {
    email.value = savedMessage.email;
    message.value = savedMessage.message;
  }
};
