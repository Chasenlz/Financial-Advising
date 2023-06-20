function openForm() {
    document.getElementById("popup-form").style.display = "block";
}

function closeForm() {
    document.getElementById("popup-form").style.display = "none";
}

function showRegisterForm() {
    document.getElementById("popup").setAttribute("onsubmit", "register(event)");
    document.querySelector(".btn").innerHTML = "Register";
    document.querySelector(".login-link").setAttribute("onclick", "showLoginForm()");
    document.querySelector(".login-link").innerHTML = "Login";
}

function showLoginForm() {
    document.getElementById("popup").setAttribute("onsubmit", "login(event)");
    document.querySelector(".btn").innerHTML = "Login";
    document.querySelector(".login-link").setAttribute("onclick", "showRegisterForm()");
    document.querySelector(".login-link").innerHTML = "Register";
}

function register(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    // Perform registration logic here
    console.log("Register:", username);
    // Redirect to the home page or perform any other necessary actions
    window.location.href = "index.html";
}

function login(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    // Perform login logic here
    console.log("Login:", username);
    // Redirect to the home page or perform any other necessary actions
    window.location.href = "index.html";
}
