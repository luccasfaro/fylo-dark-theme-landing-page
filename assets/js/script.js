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

// Menu Responsive

var menuUl = document.querySelector(".menu-nav-bar ul");
var menuTrigger = document.querySelector(".menu-trigger");

menuTrigger.addEventListener("click", function openMenu() {
   if (menuUl.classList.contains('open')) {
      menuUl.classList.remove('open');
   } else {
      menuUl.classList.add('open');
   }
})



