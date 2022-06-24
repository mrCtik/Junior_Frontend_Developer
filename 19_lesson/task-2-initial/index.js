import './index.css';

const newButton = document.querySelector('.cookie-consent__button');

const cookie = () => { 
    const cookieStatus = localStorage.getItem('cookie');
    const cookieHTML = document.querySelector('.cookie-consent');
    cookieHTML.style.display = cookieStatus;  
}

cookie();

newButton.onclick = function() {
    console.log('click');
    localStorage.setItem('cookie', 'none');
    cookie();
    //изменения
    
};
