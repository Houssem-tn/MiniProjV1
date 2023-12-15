
function nameValidation() {
    var nameInput = document.getElementById("name");
    var nameError = document.getElementById("nameError");
    var letters = /^[A-Za-z]+$/;

    if (nameInput.value.length < 3 || /\d/.test(nameInput.value)) {
        nameError.innerHTML = "Le nom doit avoir au minimum 3 caractères et ne pas contenir de chiffres.";
        return false;
    }

    if (!nameInput.value.match(letters)) {
        nameError.innerHTML = "Veuillez entrer un nom valide ! (seulement des lettres)";
        return false;
    }

    nameError.innerHTML = "<p style='color:green'>Correct</p>";
    return true;
}

function phoneValidation() {
    var phoneInput = document.getElementById("phone");
    var phoneError = document.getElementById("phoneError");

    if (!/^\d{8}$/.test(phoneInput.value)) {
        phoneError.innerHTML = "Le numéro de téléphone doit contenir exactement 8 chiffres.";
        return false;
    }

    phoneError.innerHTML = "<p style='color:green'>Valid</p>";
    return true;
}



document.forms["Myform"].addEventListener("submit", function (e) {

    let errors = false;
    
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");
    var companyInput = document.getElementById("cmp");
    var positionInput = document.getElementById("pos");
    var messageInput = document.getElementById("msg");

    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var phoneError = document.getElementById("phoneError");
    var companyError = document.getElementById("cmpError");
    var positionError = document.getElementById("posError");
    var messageError = document.getElementById("msgError");

    
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    phoneError.innerHTML = "";
    companyError.innerHTML = "";
    positionError.innerHTML = "";
    messageError.innerHTML = "";

    console.log("Validation du champ Name");
    
    if (nameInput.value.length < 3 || /\d/.test(nameInput.value)) {
        nameError.innerHTML = "Le nom doit avoir au minimum 3 caractères et ne pas contenir de chiffres.";
        e.preventDefault();
    }

    
    if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
        emailError.innerHTML = "Veuillez entrer une adresse e-mail valide.";
        errors=true;
        e.preventDefault();
    }

    
    if (!/^\d{8}$/.test(phoneInput.value)) {
        phoneError.innerHTML = "Le numéro de téléphone doit contenir exactement 8 chiffres.";
        errors=true;
        e.preventDefault();
    }

 
    if (companyInput.value.trim() === "") {
        companyError.innerHTML = "Le nom du company ne doit pas être vide.";
        errors=true;
        e.preventDefault();
    }

    if (positionInput.value.trim() === "") {
        positionError.innerHTML = "Ta position ne doit pas être vide.";
        errors=true;
        e.preventDefault();
    }

    
    if (messageInput.value.split(/\s+/).length < 10) {
        messageError.innerHTML = "Le message doit contenir au moins 10 mots.";
        errors=true;
        e.preventDefault();
    } else {
        
        messageError.innerHTML = "";
    }
    if (errors) {
        e.preventDefault(); 
    } else {
        alert("Formulaire envoyé avec succés"); 
    }
});
