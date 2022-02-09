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