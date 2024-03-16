const toggleButton = document.getElementById('toggle-button');
const toggleBack = document.getElementById('toggleBack');
const loginForm = document.getElementById('login-form');
const registrationForm = document.getElementById('registration-form');

const loginFormData = document.getElementById('login-form-data');
const registrationFormData = document.getElementById('registration-form-data');

// Add event listener for toggle button click
toggleButton.addEventListener('click', () => {
  if (loginForm.style.display === 'block') {
    loginForm.style.display = 'none';
    registrationForm.style.display = 'block';
  } else {
    loginForm.style.display = 'block';
    registrationForm.style.display = 'none';
  }
});
toggleBack.addEventListener('click', () => {
  if (registrationForm.style.display === 'block') {
    registrationForm.style.display = 'none';
    loginForm.style.display = 'block';
    toggleButton.textContent = 'Login';
  } else {
    loginForm.style.display = 'none';
    registrationForm.style.display = 'block';
  }
});
// Add event listeners for form submissions (replace with your actual logic)
loginFormData.addEventListener('submit', (event) => {
  // Prevent default form submission behavior
  event.preventDefault();

  // Simulate login logic (replace with your server-side communication)
  console.log("Login attempted with username:", loginFormData.username.value);
  // Implement logic to handle successful/failed login attempts (e.g., display messages)
});

registrationFormData.addEventListener('submit', (event) => {
  // Prevent default form submission behavior
})