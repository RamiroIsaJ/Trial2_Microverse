import { confirmRequired, confirmEmail, confirmNumbers} from "./validation.js";

let name = document.getElementById('name');
let email = document.getElementById('email');
let cell = document.getElementById('cell');
let message = document.getElementById('message');
let form = document.getElementById('contact');

name.addEventListener('blur', () => {confirmRequired(name)});
email.addEventListener('blur', () => {confirmEmail(email)});
cell.addEventListener('blur', () => {confirmNumbers(cell)});
message.addEventListener('blur', () => {confirmRequired(message)});
form.addEventListener('submit', sendMessage);

function clearForm(){
    form.reset();
    name.className = 'form-control';
    email.className = 'form-control';
    cell.className = 'form-control';
    message.className = 'form-control';
}

function sendMessage(e){
    e.preventDefault();
    if(confirmRequired(name) && confirmEmail(email) && confirmNumbers(cell) && confirmRequired(message)){
        Swal.fire(
            'Good Job !',
            'Message has been sent successfuly',
            'success'
        );
        clearForm();
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Message contains any error. Check it!',
            footer: '<a href="">Why do I have this issue?</a>'
        });
    }
    
}
