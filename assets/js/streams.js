let regBtns = document.getElementsByClassName('register');

for(let i = 0 ; i < regBtns.length ; i++){
    regBtns[i].addEventListener('click', function(e){
        e.preventDefault();

        let prev = document.body.innerHTML;
        
        document.body.innerHTML = "<img class='registered-image' src='https://cdn.dribbble.com/users/988448/screenshots/5240042/icon_cadastro_v5.gif' >   <h1 class='center-it'> Branch Successfully Registered</h1>";

        setTimeout(function(){
            window.location.reload();
        }, 3000);

        localStorage.setItem('branch', 'Software Engineering');
    });
}