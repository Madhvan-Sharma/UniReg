var fields = document.querySelectorAll(".textb input");
var btn = document.querySelector(".btn");
function check() {
  if (fields[0].value != "" && fields[1].value != "")
    btn.disabled = false;
  else
    btn.disabled = true;
}

fields[0].addEventListener("keyup", check);
fields[1].addEventListener("keyup", check);

document.querySelector(".show-password").addEventListener("click", function () {
  if (this.classList[2] == "fa-eye-slash") {
    this.classList.remove("fa-eye-slash");
    this.classList.add("fa-eye");
    fields[1].type = "text";
  } else {
    this.classList.remove("fa-eye");
    this.classList.add("fa-eye-slash");
    fields[1].type = "password";
  }
});


let users = [

  {
    username: "Madhvan",
    password: "Madhvan"
  },

  {
    username: "Himesh",
    password: "Himesh"
  },

  {
    username: "Admin",
    password: "admin"
  }

];


let signInButton = document.getElementById('sign-in-btn');

signInButton.addEventListener('click', function (e) {
  e.preventDefault();

  let foundUser = false;
  for (user of users) {
    let cuser = user.username;
    let cpass = user.password;

    if (fields[0].value == cuser && fields[1].value == cpass) {
      foundUser = true;
      break;
    }
  }

  if (foundUser) {
    iziToast.success({
      title: 'Success',
      message: 'Successfully Logged in',
    });

    localStorage.setItem("currentUser", fields[0].value);
    localStorage.setItem("currentPassword", fields[1].value);
    

    window.location.href = "/dashboard.html";
    return;
  }
  else {
    iziToast.error({
      title: 'Error',
      message: 'Invalid Credentials',
    });
  }
});

