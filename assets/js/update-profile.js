

document.getElementById('submit-btn').addEventListener('click', function(e){
    e.preventDefault();

    let inputs = document.getElementsByTagName('input');

    let username = inputs[0].value;
    let password = inputs[1].value;
    let phone = inputs[2].value;

    if(username == "" && password == "" && phone == ""){
        iziToast.error({
            title: 'Error',
            message: 'No input given',
        });
    }
    else{
        if(username != ""){
            localStorage.setItem("currentUser", username);
        }
        if(password != ""){
            localStorage.setItem("currentPassword", password);
        }
        if(phone != ""){
            localStorage.setItem("currentPhonenumber", phone);
        }

        iziToast.success({
            title: 'Success',
            message: 'Profile update successfully',
        });

        setTimeout(function(){
            window.location = "./dashboard.html" 
        }, 2000);
    }

})

