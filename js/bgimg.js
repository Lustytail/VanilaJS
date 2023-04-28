const imgs = [
    "01.jpg", "02.jpg", "03.jpg"
];

const ranimg = imgs[Math.floor(Math.random()*imgs.length)];

document.body.style.backgroundImage = `url(imgs/${ranimg})`;