const randomImage = () => {
    let number = Math.floor(Math.random() * 11)
    return number
};

let first = randomImage()
document.body.style.backgroundImage = `url('../assets/${first}.jpg')`

const changeBackground = () => {
    let img = randomImage();
    document.body.style.backgroundImage = `url('../assets/${img}.jpg')`
};

setInterval(changeBackground, 15000)