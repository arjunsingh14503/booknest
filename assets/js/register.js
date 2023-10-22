
document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.querySelector("form");

    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm_password").value;

       
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

      
        if (!username || !email || !password || !confirmPassword) {
            alert("All fields are required.");
            return;
        }

        
        registrationForm.submit();
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration-form");
    const registrationSuccess = document.getElementById("registration-success");

    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault(); 

        // Simulate a successful registration
        registrationSuccess.style.display = "block";
    });
});
