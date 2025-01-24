const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    //Ici, il faudra appeler l"API pour verifié les credentials en BDD

    if(mailInput.value == "test@mail.com" && passwordInput.value == "123"){
        //il faudra récupéré le vrai token
        const token = "osidnvmodhnfvindfivnpfsvnqspfdvn";
        setToken(token);
        //placer ce token en cookie

        setCookie(roleCookieName, "client", 7);
        window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}
