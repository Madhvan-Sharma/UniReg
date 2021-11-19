let values = document.getElementsByClassName('rv');

if(localStorage.getItem('branch') != null){
    values[0].innerText = localStorage.getItem('branch');
}

if(localStorage.getItem('currentEmail') != null){
    values[1].innerText = localStorage.getItem('currentEmail');
}

if(localStorage.getItem('currentPhonenumber') != null){
    values[2].innerText = localStorage.getItem('currentPhonenumber');
}



