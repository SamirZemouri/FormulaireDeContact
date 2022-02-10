let facebookcircle = document.getElementById('facebook');
let iconF = document.getElementById('hover-color-facebook');

let twittercircle = document.getElementById('twitter');
let iconT = document.getElementById('hover-color-twitter');

let instagramcircle = document.getElementById('instagram');
let iconI = document.getElementById('hover-color-instagram');

iconF.addEventListener('mouseenter', e =>{
    facebookcircle.style.background = '#fff';

})

iconF.addEventListener('mouseleave', e =>{
    facebookcircle.style.background = 'none';
})

iconT.addEventListener('mouseenter', e =>{
    twittercircle.style.background = '#fff';

})

iconT.addEventListener('mouseleave', e =>{
    twittercircle.style.background = 'none';
})

iconI.addEventListener('mouseenter', e =>{
    instagramcircle.style.background = '#fff';

})

iconI.addEventListener('mouseleave', e =>{
    instagramcircle.style.background = 'none';
})

// let email = document.getElementById("mail")

// email.addEventListener("keyup", function (erreur){
//     if(email.validity.typeMismatch) {
//         email.setCustomValidity("Veuillez entrer une adresse e-mail valide")
//     } else {
//         email.setCustomValidity("")
//     }
// })



document.getElementById("inscription").addEventListener("submit", function (e){
    
    let erreur;

    let inputs = document.getElementsByTagName("input");

    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            erreur = "Veuillez renseigner tous les champs";

        }
    }

    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else {
        alert('formulaire envoyé!');
    }
    // let erreur;
    // let email = document.getElementById("mail");
    // let email2 = document.getElementById('mail2')
    // let nom = document.getElementById('nom');
    // let msg = document.getElementById('msg');

    // if (!nom.value) {
    //     erreur = "Veuillez renseigner un nom";
    // }
    // if (!email.value) {
    //     erreur = "Veuillez saisir une adresse e-mail valide";
    // }
    // if (!msg.value) {
    //     erreur = "Veuillez renseigner un message"
    // }

})
