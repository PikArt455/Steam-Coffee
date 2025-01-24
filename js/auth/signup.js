//Implémenter le JS de ma page

const inputNom = document.getElementById("NomInput");
const inputPreNom = document.getElementById("PrenomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidatePassword = document.getElementById("ValidatePasswordInput");

inputNom.addEventListener("keyup", validateForm);
inputPreNom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidatePassword.addEventListener("keyup", validateForm);


function validateForm(){
    validateRequired(inputNom);
    validateRequired(inputPreNom);
} 

function validateRequired(input){
    if(input.value !=''){
        input.classList.add("is-valide");
        input.classList.remove("is-invalide");
    }
    else{
        input.classList.remove("is-valide");
        input.classList.add("is-invalide");
    }
}