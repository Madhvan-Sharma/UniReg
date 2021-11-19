let logOut = document.getElementById('log-out');

logOut.addEventListener('click', function(e){
    e.preventDefault();

    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentPassword');


    iziToast.success({
        title: 'Log out',
        message: 'Successfully Logged out',
    });

    setTimeout(function(){
        location.reload();
    }, 2000);
});


let user = document.getElementById('user-name');

user.innerText = localStorage.getItem('currentUser');

let tabs = document.getElementsByClassName('tabs');


tabs[0].addEventListener('click', function(){
    window.location.href = window.location.href.substring(0, window.location.href.lastIndexOf("/") + 1) + "update-profile.html";
});

tabs[1].addEventListener('click', function(){
    window.location.href = window.location.href.substring(0, window.location.href.lastIndexOf("/") + 1) + "streams.html";
});


tabs[2].addEventListener('click', function(){
    window.location.href = window.location.href.substring(0, window.location.href.lastIndexOf("/") + 1) + "view-forms.html";
});

tabs[3].addEventListener('click', function(){
    window.location.href = window.location.href.substring(0, window.location.href.lastIndexOf("/") + 1) + "view-forms.html";
});