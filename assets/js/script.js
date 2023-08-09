var emailInput = document.getElementById("email");
var emailMessageError = document.getElementById("invalid-email");

emailInput.addEventListener("keyup", function validateEmail() {
   if (!emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      emailMessageError.innerHTML = "Please enter a valid email";
      return false;
   }
   emailMessageError.innerHTML = "";
   return true;
});