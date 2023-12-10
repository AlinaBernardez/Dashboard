const passInput = document.querySelector('.passInput');
const createdPass = document.querySelector('.createdPass');
const passBtn = document.getElementById('passBtn');

const mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minus = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const simb = "!@#$%^&*()-_=+";

let password = [];
let newPassword;

const opciones = [
    `${mayus.split('')},${minus.split('')},${num.split('')},${simb.split('')}`
];

const randomNumber = () => {
    let number = Math.floor(Math.random() * 76);
    return number;
}

passBtn.addEventListener('click', () => {
    password = [];
    newPassword = '';
    const passLength = passInput.value
    for(i = 0; i <= passLength; i++) {
        let index = randomNumber();
        let newCaracter = opciones[0].split(',')[index];
        password.push(newCaracter);
    }
    newPassword = password.join('')
    createdPass.innerHTML = `
        <div class='newPassWrap'>
            <p class='newPass' contenteditable="true">${newPassword}</p>
            <button class='copy'><i class="bi bi-clipboard-check"></i></button>
        </div>
        `
        copyPass();
});

const copyPass = () => {
    const copyBtn = document.querySelector('.copy');
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(newPassword);
        console.log('Copied to Clipboard!')
    })
}