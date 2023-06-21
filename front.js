function openForm() {
  document.getElementById("popup-form").style.display = "block";
}

function closeForm() {
  document.getElementById("popup-form").style.display = "none";
}

function openLoginForm() {
  document.getElementById("popup").setAttribute("action", "/login");
  document.querySelector(".btn").innerHTML = "Login";
  document.querySelector(".login-link").setAttribute("onclick", "openRegisterForm()");
  document.querySelector(".login-link").innerHTML = "Register";
}

function openRegisterForm() {
  document.getElementById("popup").setAttribute("action", "/register");
  document.querySelector(".btn").innerHTML = "Register";
  document.querySelector(".login-link").setAttribute("onclick", "openLoginForm()");
  document.querySelector(".login-link").innerHTML = "Login";
}

function openAdminPassword() {
  const password = prompt("Enter the password:");
  if (password === "5252624") {
    window.location.href = "admin.html";
  } else {
    alert("Incorrect password");
  }
}
