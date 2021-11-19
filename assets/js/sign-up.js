let signUpButton = document.getElementsByClassName('sign-button')[0];

let usernames = ["Madhvan", "Henry", "Mahabi"];

signUpButton.addEventListener('click', function(e){
    e.preventDefault();

    let inputs = document.getElementsByClassName('input')


    // checking if email is correctly written
    let emailInput = inputs[2].value;
    let correctEmail = false;
    for(let i = 0 ; i < emailInput.length ; i++){
        if(emailInput[i] == '@'){
            correctEmail = true;
            break;
        }
    }

    // checking if username already exists
    let usernameInput = inputs[0].value;
    let correctUsername = true;
    for(let i = 0 ; i < usernames.length ; i++){
        if(usernameInput == usernames[i]){
            correctUsername = false;
            break;
        }
    }



    // checking if phone is only numeric only or not
    let phoneInput = inputs[1].value;
    let correctPhone = true;
    for(let i = 0 ;i  < phoneInput.length ; i++){
       if(parseInt(phoneInput) == NaN){
           correctPhone = false;
           break;
       }
    }


    if(!correctEmail){
        iziToast.warning({
            title: 'Wrong Email',
            message: `Email must include '@' character`,
        });
        return;
    }
    else if(!correctPhone || phoneInput.length != 10){
        iziToast.warning({
            title: 'Invalid Input',
            message: `Entered Phone Number is not valid`,
        });
        return;
    }
    else if(!correctUsername){
        iziToast.error({
            title: 'Error',
            message: 'Username already exists',
        });
        return;
    }


    // adding username and password in local Storage
    localStorage.setItem("currentUser", usernameInput);
    localStorage.setItem("currentPassword", inputs[3].value);
    localStorage.setItem("currentPhonenumber", inputs[1].value);
    localStorage.setItem("currentEmail", inputs[2].value);


    window.location = '/dashboard.html';
});

