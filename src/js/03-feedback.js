
import throttle from 'lodash.throttle';

function saveFormState() {
  const formData = {
    email: document.querySelector('input[name="email"]').value,
    message: document.querySelector('textarea[name="message"]').value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

const throttledSaveFormState = throttle(saveFormState, 500);

const form = document.querySelector('.feedback-form');

const savedFormData = localStorage.getItem('feedback-form-state');

if (savedFormData) {
  const { email, message } = JSON.parse(savedFormData);
  
  form.elements.email.value = email;
  form.elements.message.value = message;
}

form.addEventListener('input', throttledSaveFormState);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const { email, message } = JSON.parse(localStorage.getItem('feedback-form-state'));

  console.log({ email, message });

  event.target.reset();

  localStorage.removeItem('feedback-form-state');
});
