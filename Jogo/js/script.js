const cup = document.querySelector('.cup');
const oculos = document.querySelector('.oculos');

const jump = ( ) => {
       
    cup.classList.add('jump');

    setTimeout(() => {

        cup.classList.remove('jump');

    } , 500);
}

const loop = setInterval(() => {

    const oculosPosition = oculos.offsetLeft;
    const cupPosition = +window.getComputedStyle(cup).bottom.replace('px', '');

    console.log(cupPosition);

    if (oculosPosition <= 120 && oculosPosition > 0 && cupPosition < 80) {

        oculos.style.animation = 'none';
        oculos.style.left = `${oculosPosition}px`;

        cup.style.animation = 'none';
        cup.style.bottom = `${cupPosition}px`;

        cup.src = 'img/morte.png';
        cup.style.width = '75px'
        cup.style.marginLeft = '50px'

        clearInterval(loop);
        
    }

}, 10);

document.addEventListener('keydown' , jump);