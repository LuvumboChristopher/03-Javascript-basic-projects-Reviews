import {reviews} from './reviews.js';

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentReview = 0;

/**
 * Al iniciar la pagina quiero que empieze con el elemento 0
 * por eso inicio currentReview a 0
 */

window.addEventListener("DOMContentLoaded", ()=> {
    showReview(currentReview)
});

/**
 * Separamos la logica creando una funcion
 * que nos recupera los valores de nuestros objetos
 * en el array reviews importado.
 */

/**
 * La "e" es el parametro para que nos encuentre el buen
 * objeto en nuestro array si en un 0 encontrara el primer
 * elemento si es un 3 en carto elemeneto
 */
const showReview = (e)=> {
    const review = reviews[e];
    img.src = review.img;
    author.textContent = review.name;
    job.textContent = review.job;
    info.textContent = review.text;
} 

/**
 * Se lee de arriba a bajo, siempre incrementamos y luego vamos a 
 * comprobar si la condicional es cierta si no lo es no entramos
 * al bucle
 */

nextBtn.addEventListener('click', ()=> {
    currentReview++;
    /**
     *En el momento que currentReview sea el ultimo 
     su valor vuelve al primero 
     */
    if (currentReview === reviews.length) {
        currentReview = 0;
    }
    showReview(currentReview); 
})

prevBtn.addEventListener('click', ()=> {
    currentReview--;
    /**
     *En el momento que currentReview sea negativo 
     le damos a currentReview el valor de la utima review
     */
    if(currentReview == - 1) {
        currentReview = reviews.length -1;
    }

    showReview(currentReview);  
})

randomBtn.addEventListener('click', ()=> {
    currentReview = Math.floor(Math.random()* reviews.length)  
    showReview(currentReview); 
})