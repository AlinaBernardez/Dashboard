const randomImage = () => {
    let number = Math.floor(Math.random() * 10)
    return number
};

const changeBackground = () => {
    let img = randomImage();
    console.log(img)
    document.body.style.backgroundImage = `url('../assets/${img}.jpg')`
};

setInterval(changeBackground, 15000)