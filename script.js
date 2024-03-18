const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simulate login validation (replace with your actual validation logic)
  if (username === 'abc' && password === 'password1') {
    message.textContent = 'Login successful!';
  }
  else if (username === 'pulkit' && password === 'password2') {
    message.textContent = 'Login successful!';
  }
  else if (username === 'Dhivya' && password === 'password3') {
    message.textContent = 'Login successful';
  }
  else if (username === 'radha' && password === 'password4') {
    message.textContent = 'Login successful';
  }

  else if(username === 'krishna' && password ==='password5'){
    message.textContent = 'Login successful';
  }
  else {
    message.textContent = 'Invalid username or password.';
  }
});