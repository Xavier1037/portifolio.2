const $flip = document.querySelector('.mini-projeto');

function flip(){
    let img = document.querySelector('.img-projeto');
    img.classList.toggle("-active");
}

$flip.addEventListener("click",flip);