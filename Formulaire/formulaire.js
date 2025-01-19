//formulaire
const form = document.querySelector("form")
const successContainer= document.querySelector(".message-success")
const errorContainer= document.querySelector(".message-error")
document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault()
    
    const pseudo = document.getElementById('pseudo').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const passwordRepeat = document.getElementById ('password2').value
    const content = document.getElementById('contenu-formulaire')
    
    content.innerText = pseudo + ' ' + email
  })
  
form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("Envoi du Form detecté !")

    /*verification du pseudo*/
    if(pseudo.value.length < 6 || pseudo.value === " "){
        console.log("pseudo invalide")
        errorContainer.classList.add("visible")
        pseudo.classList.remove("success")
        let err = document.createElement("li")
        err.innerText = "Le champ pseudo doit contenir au moin 6 caractères"
        errorList.appendChild(err)
    } else {
        pseudo.classList.add("success")
        console.log("Pseudo bon")
    }

    /*verification du email*/
    if(email.value == ""){
        errorContainer.classList.add("visible")
        email.classList.remove("success")
        let err = document.createElement("li")
        err.innerText = "L'adresse email est invalide"
        errorList.appendChild(err)
    } else {
        email.classList.add("success")
        console.log("mail bon")
    }

    /*verification du mot de passe*/
    let passCheck = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
    );
    if(password.value.length < 10 || passCheck.test(password.value) == false){
        errorContainer.classList.add("visible")
        password.classList.remove("success")
        let err = document.createElement("li")
        err.innerText = "Le mot de passe doit faire 10 caractères minimum, contenir minuscule, majuscule, chiffre et caractère spécial"
        errorList.appendChild(err)
    } else {
        password.classList.add("success")
        console.log("mot de passe 1 bon")
    }
    if(password == passwordRepeat) {
        passwordRepeat.classList.add("success")
        console.log("mot de passe 2 bon")
    } else {
        errorContainer.classList.add("visible")
        passwordRepeat.classList.remove("success")
        let err = document.createElement("li")
        err.innerText = "Le mot de passe n'est pas le même"
        errorList.appendChild(err)
    }

    /* message d'erreur et success*/
    errorContainer.querySelector('ul').innerHTML = ''
    const errors = []
    function validateInput(input, condition, errorMessage) {
        if (condition) {
          input.classList.remove('invalid')
          input.classList.add('valid')
        } else {
          input.classList.remove('valid')
          input.classList.add('invalid')
          errors.push(errorMessage)
        }
        }
        validateInput(pseudo, 
            pseudo.value !== '', 
            'Le pseudo est requis')
        validateInput(email, 
            email.value !== '' && email.value.includes('@'), 
            'Un email est requis')
        validateInput(password, 
            password.value.length >= 8,
            'Le mot de passe doit contenir au moins 8 caractères')
        validateInput(passwordRepeat, 
            password.value === passwordRepeat.value, 
            'Les mots de passes ne correspondent pas')

        if (errors.length > 0) {
            errors.forEach(messageErreur => {
            const li = document.createElement('li')
            li.textContent = messageErreur
            errorContainer.querySelector('ul').appendChild(li)
            })
        } else {
            successContainer.style.display = 'block'
    }
})