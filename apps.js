const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const colon = document.querySelector(".colon");
const colon2 = document.querySelector(".colon2");
colon.style.display = "none";
colon2.style.display = "none";


setInterval(() => {
    let newHour = new Date().getHours();
    let newMinute = new Date().getMinutes();
    let newSecond = new Date().getSeconds();
    colon.style.display = "block";
    colon2.style.display = "block";

    hour.innerText = newHour.toString().padStart(2,0);
    minute.innerText = newMinute.toString().padStart(2,0);
    second.innerText = newSecond.toString().padStart(2,0);

},1000);



