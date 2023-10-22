const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');

document.getElementById('loginButton').addEventListener('click', () => {

    loginMessage.textContent = 'Logged in Successfully!';
    loginMessage.style.display = 'block';

    
    loginForm.reset();
});
function login() {
   
    var loginForm = document.getElementById("loginForm");
    loginForm.style.display = "none"; // Hide the login form

    var loginMessage = document.getElementById("loginMessage");
    loginMessage.style.display = "block"; // Show the success message
    loginMessage.innerHTML = "Logged in successfully!";
}
