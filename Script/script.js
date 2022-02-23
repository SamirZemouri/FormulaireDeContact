let form = document.querySelector('form')
let inputNom = document.querySelector('#nom')
let inputMail = document.querySelector('#mail')
let regleNom = /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ'-]+$/;
let regleMail =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
let resultatNom = regleNom.test(inputNom.value)
let resultatMail = regleMail.test(inputMail.value)
let button = document.getElementById("subbtn")


form.addEventListener('submit', function(e){
    e.preventDefault()
    let resultatNom = regleNom.test(inputNom.value)
    let resultatMail = regleMail.test(inputMail.value)

    if ((resultatNom == false) && (resultatMail == true)) {
        document.getElementById('erreur').style.visibility= 'visible';
        document.getElementById('erreur').innerHTML='Veuillez renseigner un nom valide.'
        document.getElementById('erreur').style.background= 'red'

    } else if((resultatNom == true) && (resultatMail == false)) {
        document.getElementById('erreur').style.visibility= 'visible';
        document.getElementById('erreur').innerHTML='Veuillez renseigner une adresse mail valide.'
        document.getElementById('erreur').style.background= 'red'
    } else if ((resultatNom == false) && (resultatMail == false)) {
        document.getElementById('erreur').style.visibility= 'visible';
        document.getElementById('erreur').innerHTML='Veuillez renseigner des informations valide.'
        document.getElementById('erreur').style.background= 'red'
    } else {
        document.getElementById('erreur').style.visibility= 'hidden';
    }


    let formData = new FormData(form)
    let url = './PHP/formulaire.php';
    fetch(url,{
        method: 'POST',
        body: formData
    })
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);

        document.querySelector('.send').innerHTML=data.validation
        return form.reset()
        
    })
})











let facebookcircle = document.getElementById('facebook');
let iconF = document.getElementById('hover-color-facebook');

let twittercircle = document.getElementById('twitter');
let iconT = document.getElementById('hover-color-twitter');

let instagramcircle = document.getElementById('instagram');
let iconI = document.getElementById('hover-color-instagram');


if (window.matchMedia("(min-width: 900px)").matches) {

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

    

}else {

}

