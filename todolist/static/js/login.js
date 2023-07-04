let usernameInput = document.getElementById("username");
usernameInput.addEventListener("mouseover", function() {
  this.style.boxShadow = "0 10px 3px 0.25px silver";
});
usernameInput.addEventListener("mouseout", function() {
  this.style.boxShadow = "none";
});

let passwordInput = document.getElementById("password");
passwordInput.addEventListener("mouseover", function() {
  this.style.boxShadow = "0 10px 3px 0.25px silver";
});
passwordInput.addEventListener("mouseout", function() {
  this.style.boxShadow = "none";
});