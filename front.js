function openForm() {
    document.getElementById("popup-form").style.display = "block";
}

function closeForm() {
    document.getElementById("popup-form").style.display = "none";
}

function showLoginForm() {
    document.getElementById("popup").setAttribute("onsubmit", "login(event)");
    document.querySelector(".btn").innerHTML = "Login";
    document.querySelector(".login-link").setAttribute("onclick", "showRegisterForm()");
    document.querySelector(".login-link").innerHTML = "Register";
}

function showRegisterForm() {
    document.getElementById("popup").setAttribute("onsubmit", "register(event)");
    document.querySelector(".btn").innerHTML = "Register";
    document.querySelector(".login-link").setAttribute("onclick", "showLoginForm()");
    document.querySelector(".login-link").innerHTML = "Login";
}

function register(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    // Store the email in localStorage
    localStorage.setItem("registeredEmail", email);
    // Redirect to the home page or perform any other necessary actions
    window.location.href = "home.html";
}

function login(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    // Perform login logic here
    console.log("Login:", email);
    // Redirect to the home page or perform any other necessary actions
    window.location.href = "home.html";
}

window.addEventListener("DOMContentLoaded", function() {
    const adminButton = document.getElementById("admin-button");
    adminButton.addEventListener("click", openAdminPassword);
    const exploreButton = document.getElementById("explore-button");
    exploreButton.addEventListener("click", function() {
        window.location.href = "home.html";
    });
});

function openAdminPassword() {
    const password = prompt("Enter the password:");
    if (password === "5252624") {
        window.location.href = "admin.html";
    } else {
        alert("Incorrect password");
    }
}
