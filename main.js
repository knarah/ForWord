'use strict';

const loginForm = document.querySelector('.login_form');
const loginName = document.getElementById('name');
const loginEmail = document.getElementById('email');
const submitBtn = document.getElementById('submit_btn');
const modal = document.querySelector('.modal');

// When click login button
function loginFormOnSubmit(event) {
    const userName = loginName.value; 
    const userEmail = loginEmail.value;
    const domainString = userEmail.substring(userEmail.lastIndexOf('@') +1) //To get domain(XXX.xx.ca OR XXX.com)
    const domainName = domainString.substring(0, domainString.indexOf('.')); // To get only domain name
    const domain = domainName[0].toUpperCase() + domainName.slice(1); //Capitalizing the first letter of domain name
    const agreement = document.getElementById('agreement');
    event.preventDefault(); 
    
    
    openModal(userName, domain);
    // Clear input
    loginName.value='';
    loginEmail.value='';
    //uncheck the checkbox
    agreement.checked = false;
}

function openModal(userName, domain){
modal.classList.remove('hidden');

const greeting = document.getElementById('popup_greeting');
const text = document.getElementById('popup_text');
greeting.innerHTML = `Welcome, ${userName}!`;
text.innerHTML = `Thanks for filling out the form. A confirmation email has been sent to your ${domain} account.`

}


function closeModal(){
    modal.classList.add('hidden');
}

loginForm.addEventListener('submit', loginFormOnSubmit);
modal.addEventListener('click', closeModal);