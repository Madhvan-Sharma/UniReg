let userExists = document.getElementsByClassName("user-exists");
let userDontExists = document.getElementsByClassName("user-not-exists");

let currentUser = localStorage.getItem('currentUser');

if(currentUser == null){
    for(element of userExists){
        element.classList.add('hide');
    }
}
else{
    for(element of userDontExists){
        element.classList.add('hide');
    }

    let dashboardButton = document.getElementById('get-started')
    dashboardButton.innerText = "Go to Dashboard";
    dashboardButton.setAttribute("href", "./dashboard.html");
    
    userExists[0].setAttribute('href', './profile.html');
    document.getElementsByClassName('current-username')[0].innerHTML = currentUser;
}


let logOut = document.getElementById('log-out');

logOut.addEventListener('click', function(e){
    e.preventDefault();

    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentPassword');
    localStorage.removeItem('branch');
    localStorage.removeItem('currentEmail');
    localStorage.removeItem('branchAllotted');
    localStorage.removeItem('currentPhonenumber');


    iziToast.success({
        title: 'Log out',
        message: 'Successfully Logged out',
    });

    setTimeout(function(){
        location.reload();
    }, 2000);
});