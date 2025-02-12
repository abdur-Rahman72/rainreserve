const name_regex =  /^[A-Za-z][A-Za-z' -]*[A-Za-z]$/;
const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phone_regex = /^\+?[0-9]{1,4}?[-.\s]?(\(?\d{1,3}?\)?[-.\s]?)*\d{1,4}[-.\s]?\d{1,9}$/;

let consult_btn = document.getElementById('contact_consult_btn');

let Name = document.getElementById('consult_name');
let email = document.getElementById('consult_email');
let phone = document.getElementById('consult_phone');

let error_msg = [];

let error = document.getElementById('form_error');

let form = document.getElementById('form');

form.addEventListener('submit', ()=>{

    error.innerHTML = "<div></div>";

    for (let index = 0; index < 3; index++) {
        error_msg.shift();
    }

    //presence checking name
    if(Name.value == "" || Name.value == null) {
        error_msg.push('<div class="indiv_error">Name is required.</div>')
    } else
    //validating name 
    if (name_regex.test(Name.value) == false) {
        error_msg.push('<div class="indiv_error">Name can not contain numbers or special characters.</div>')
    }

    //presence checking email 
    if(email.value == "" || email.value == null) {
        error_msg.push('<div class="indiv_error">Email is required.</div>')
    } else 
    //validating email 
    if (email_regex.test(email.value) == false) {
        error_msg.push('<div class="indiv_error">Enter a valid email address.</div>')
    }

    //presence checking number 
    if(phone.value == "" || phone.value == null) {
        error_msg.push('<div class="indiv_error">Phone number is required.</div>')
    } else 
    //validating number
    if (phone_regex.test(phone.value) == false) {
        error_msg.push('<div class="indiv_error">Enter a valid phone number.</div>')
    }

    

    //printing errors.
    if (error_msg.length > 0) {
        
        for (let index = 0; index < error_msg.length; index++) {
            event.preventDefault(); //preventing page reload
            const element = error_msg[index];
            error.innerHTML += element;
            consult_btn.scrollIntoView({behavior: "smooth"});
        }
    } else {
        
    }
})
