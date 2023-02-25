function yorkTimes() {
    let a = document.querySelector('header').firstChild;
    document.querySelector('header').removeChild(a);
    let img = document.createElement('img');
    img.src = "https://mwcm.nyt.com/.resources/mkt-wcm/dist/libs/assets/img/logo-nyt-header.svg";
    img.alt = "The New York Times";
    img.width = 300;
    document.querySelector('header').appendChild(img);
}

document.querySelectorAll('button')[0].addEventListener('click', yorkTimes);
