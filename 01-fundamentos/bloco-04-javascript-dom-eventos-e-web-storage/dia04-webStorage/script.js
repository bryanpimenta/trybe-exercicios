
function verificar() {
    const verifyImg = document.querySelector('header').childNodes.length;
    if (verifyImg > 1) {
       return document.querySelector('header').removeChild(document.querySelectorAll('img')[0]);
    }
}

function yorkTimes() {
    verificar();
    let tittle = document.querySelector('header').firstChild;
    let img = document.createElement('img');
    img.src = "https://mwcm.nyt.com/.resources/mkt-wcm/dist/libs/assets/img/logo-nyt-header.svg";
    img.alt = "The New York Times";
    img.width = 500;
    document.querySelector('header').insertBefore(img, tittle);
    document.querySelector('body').style.color = '#5A5A5A';
    document.querySelector('body').style.backgroundColor = 'white';
}

document.querySelectorAll('button')[0].addEventListener('click', yorkTimes);
