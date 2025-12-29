document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let valid = true;

  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Minimum 6 characters";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  if (valid) {
    alert("Login successful");
  }
});
