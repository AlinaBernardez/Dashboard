const time = document.querySelector('.timeNow');
const date = document.querySelector('.date');
const welcome = document.querySelector('.welcome');

let hours;
let minutes;
let seconds;
let day;
let month;
const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
let year;
const saludos = ['¡Buenos días!', '¡Buenas tardes!', '¡Buenas noches!']

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

const renderDate = () => {
    day = new Date().getUTCDate();
    month = months[new Date().getUTCMonth()];
    year = new Date().getUTCFullYear();
    date.innerHTML = `
    <p class='dateText'>${day} de ${month} ${year}</p>
    `
}

renderDate();