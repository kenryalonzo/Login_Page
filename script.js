const form = document.querySelector('#loginForm');

// essayons d'ecouter la modification de l'email
form.email.addEventListener('change', function() {
  validateEmail(this);
});

// maintenant place au control de soumission du formmulaire

form.addEventListener('submit', function(e) {
    e.preventDefault();
    validatePassword(this);
  });

// maintenant plae a la modification du password

form.password.addEventListener('change', function() {
    validatePassword(this);
  });

function validateEmail(inputEmail) {
  const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const testEmail = emailRegExp.test(inputEmail.value);
  const small = document.querySelector('.input-box small')

  if (testEmail) {
    small.innerHTML = "Valid address";
    small.classList.remove("red-effet");
    small.classList.add("green-effet");
    return true
  } else {
    small.innerHTML = "Invalid address";
    small.classList.remove("green-effet");
    small.classList.add("red-effet");
    return false;
  }
}

// place maintenat a la validation du password

function validatePassword(inputPassword) {
    let msg;
    let valid = false;
  
    if (inputPassword.value.length < 3) {
        msg = "at least 3 characters required";
    } else if (!/[A-Z]/.test(inputPassword.value)) {
        msg = "at least 1 capital letter required";
    } else if (!/[a-z]/.test(inputPassword.value)) {
        msg = "at least 1 miniscule required";
    } else if (!/[0-9]/.test(inputPassword.value)) {
        msg = "at least 1 digit required";
    } else {
        msg = "the password is valid";
        valid = true;
    }

    // Recuperation de la balise small
    const small = document.querySelectorAll('.input-box small')[1]

    // maintenant essayons de tester les expressions

    if (valid) {
        small.innerHTML = "the password is valid";
        small.classList.remove("red-effet");
        small.classList.add("green-effet");
        return true;
    } else {
        small.innerHTML = msg;
        small.classList.remove("green-effet");
        small.classList.add("red-effet");
        return false;
    }

  }
