// Ensure script runs after DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // **Registration Form Submission**
    const registerForm = document.getElementById("register-form");
    if (registerForm) {
        registerForm.addEventListener("submit", async function (e) {
            e.preventDefault();

            const username = document.getElementById("reg-username").value;
            const email = document.getElementById("reg-email").value;
            const phone = document.getElementById("reg-phone").value;
            const password = document.getElementById("reg-password").value;

            try {
                const response = await fetch("http://localhost:5001/api/users/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ username, email, phone, password }),
                });

                const result = await response.json();

                if (response.ok) {
                    alert(result.message);
                    registerForm.reset(); // Clear form after success
                    showLoginForm(); // Switch to login after successful registration
                } else {
                    alert("Error: " + (result.error || "Registration failed"));
                }
            } catch (error) {
                alert("Network error. Please try again.");
            }
        });
    }

    // **Login Form Submission**
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", async function (e) {
            e.preventDefault();

            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;

            try {
                const response = await fetch("http://localhost:5001/api/users/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password }),
                });

                const result = await response.json();

                if (response.ok) {
                    alert(result.message);
                    window.location.href = "dashboard.html"; // Redirect to another page after login
                } else {
                    alert("Login failed: " + (result.error || "Invalid credentials"));
                }
            } catch (error) {
                alert("Network error. Please try again.");
            }
        });
    }
});

// **Show Sign Up Form**
function showSignUpForm() {
    document.getElementById("signup-form").style.display = "block";
    document.getElementById("login-form").style.display = "none";
}

// **Show Login Form**
function showLoginForm() {
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}

// **Navigate to Landing Page**
function goToLanding() {
    window.location.href = "index.html"; // Ensure index.html exists
}

// **Navigate to Support Page**
function goToSupport() {
    window.location.href = "support.html"; // Ensure support.html exists
}
