const clock = document.querySelector(".clock");



function showClock() {
    const date = new Date();

    const year = date.getFullYear();
    const month = String(date.getMonth()+1).padStart(2,"0");
    const day = String(date.getDay()).padStart(2,"0");
    const hour = String(date.getHours()).padStart(2,"0");
    const min = String(date.getMinutes()).padStart(2,"0");
    const sec = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${year}/${month}/${day}　${hour} : ${min} : ${sec}`;
}

showClock();
setInterval(showClock, 1000);