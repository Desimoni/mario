const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.cloud');



    const jump = () => {
        mario.classList.add('jump');

        setTimeout(()=> {

            mario.classList.remove('jump');
        
     }, 500)
}

const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudPosition = cloud.offsetLeft;
    
    if (pipePosition <= 80 && pipePosition > 0 && marioPosition < 70) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '20px';
        mario.style.marginBottom = '-5px';

        cloud.style.animation = 'none';
        cloud.style.Left = `${cloudPosition}px`;

        

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);

if(marioPosition > pipePosition){
var score = 0;

function atualizarPlacar(){
    document.getElementById('SCORE').innerHTML = score;
}

function adicionarPontos(valor){
    score += valor;
    atualizarPlacar();
}
}

atualizarPlacar();