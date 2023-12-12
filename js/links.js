const linkList = document.querySelector('.createdLinks');
const createBtn = document.getElementById('btn');
const title = document.getElementById('linkTitle');
const link = document.getElementById('link');
const error = document.querySelector('.errorMsg')

let linkTitle;
let linkValue;
let cards;
let closeBtns;

const renderLinks = (name, route) => {
    const linktHtml = `
    <div class='linkCard'>
        <a href=${route} target='_blank'>
            <p id='linkTitle'>${name}</p>
        </a>
        <i id='close' class="bi bi-x-lg"></i>
    </div>
    `
    linkList.innerHTML += linktHtml;
    deleteLinks();
};

const clearValues = () => {
    title.value = '';
    link.value = '';
};

const storeInLocal = (name, route) => {
    localStorage.setItem(name, route)
};

const renderLocal = () => {
    const arrayLocal = Object.entries(localStorage);
    if(arrayLocal.length > 0) {
        return arrayLocal.forEach(item => {
        let title = item[0];
        let url = item[1];
        renderLinks(title, url)
        })
    }
    
};

const deleteFromLocal = (value) => {
    localStorage.removeItem(value);
};

const deleteLinks = () => {
    cards = document.querySelectorAll('.linkCard');
    closeBtns = document.querySelectorAll('.bi-x-lg');
    cards.forEach((card, i) => {
        let close = closeBtns[i]
        close.addEventListener('click', () => {
            const titleToDelete = document.getElementsByTagName('p')[i].innerText;
            deleteFromLocal(titleToDelete)
            card.remove();
        })
    })
};

renderLocal();
deleteLinks();

createBtn.addEventListener('click', () => {
    linkTitle = title.value;
    linkValue = link.value;
    if(linkTitle && linkValue) {
        error.innerHTML = '';
        storeInLocal(linkTitle, linkValue);
        renderLinks(linkTitle, linkValue);
        clearValues();
    }
    else {
        error.innerHTML = '<h4>¡Rellena todos los campos!</h4>'
    }
});




