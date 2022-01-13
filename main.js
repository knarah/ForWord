'use strict';

// Modal
const loginForm = document.querySelector('.login_form');
const loginName = document.getElementById('name');
const loginEmail = document.getElementById('email');
const submitBtn = document.getElementById('submit_btn');
const modal = document.querySelector('.modal');


loginForm.addEventListener('submit', loginFormOnSubmit);

function loginFormOnSubmit(event) {
    const userName = loginName.value; 
    const userEmail = loginEmail.value;
    const domain = userEmail.substring(userEmail.lastIndexOf("@") +1);
    event.preventDefault(); 
    
    openModal(userName, domain);

}

function openModal(userName, domain){
modal.classList.remove('hidden');

const greeting = document.getElementById('popup_greeting');
const text = document.getElementById('popup_text');
greeting.innerHTML = `Welcome, ${userName}!`;
text.innerHTML = `Thanks for filling out the form. A confirmaion email has been sent to your ${domain} account.`

}

modal.addEventListener('click', closeModal);
function closeModal(){
    modal.classList.add('hidden');
}
