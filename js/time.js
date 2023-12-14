const time = document.querySelector('.timeNow');
const date = document.querySelector('.date');
const welcome = document.querySelector('.welcome');
const fraseContainer = document.querySelector('.frase');

let hours;
let minutes;
let seconds;
let day;
let month;
let year;
const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
const saludos = ['¡Buenos días!', '¡Buenas tardes!', '¡Buenas noches!'];
const frases = [
    'Es hora de descansar. Apaga y sigue mañana.',
    'Desayuna fuerte y a darle al código.',
    'Echa un rato más pero no olvides comer.',
    'No hay tiempo para siestas...',
    'El último empujón...',
    'Esto ya son horas extra... Piensa en ir cerrando.',
    'Deberías de irte a cenar...'];

const getFrase = () => {
    let frase = 
        hours > 0 && hours <= 7 ? 
        frases[0] : 
        hours > 7 && hours <= 12 ?
        frases [1] :
        hours > 12 && hours <= 14 ? 
        frases[2] :
        hours > 14 && hours <= 16 ? 
        frases[3] :
        hours > 16 && hours <= 18 ? 
        frases[4] :
        hours > 18 && hours <= 22 ? 
        frases[5] : frases[6]

    fraseContainer.innerHTML = `<p class='fraseText'>${frase}</p>`
}

const renderTime = () => {
    hours = new Date().getHours();
    minutes = new Date().getMinutes();
    seconds = new Date().getSeconds();
    let html1 = hours < 10 ? '0' + hours : hours;
    let html2 = minutes < 10 ? '0' + minutes : minutes;
    let html3 = seconds < 10 ? '0' + seconds : seconds;

    time.innerHTML = `
    <p class='timeText'>${html1}:${html2}:${html3}</p>
    `

    let saludo = hours < 12 ? saludos[0] : hours < 20 ? saludos[1] : saludos[2];
    welcome.innerHTML = `<h2 class='saludo'>${saludo}</h2>`
};

setInterval(renderTime, 1000)
setInterval(getFrase, 1000)
const currentUrl = window.location.href;
console.log(currentUrl);

const renderDate = () => {
    day = new Date().getUTCDate();
    month = months[new Date().getUTCMonth()];
    year = new Date().getUTCFullYear();
    date.innerHTML = `
    <p class='dateText'>${day} de ${month} ${year}</p>
    `
}

renderDate();

if(hours = 0) {
    renderDate();
}