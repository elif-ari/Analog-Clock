const secondHand = document.querySelector('.second');
const minuteHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');

function updateClock() {
    const now = new Date();

    const seconds = now.getSeconds();

    const hours = now.getHours();

    const secDeg = (seconds / 60) * 360;

    const hourDeg = (hours % 12 / 12) * 360 + (minutes / 60) * 30;

    secondHand.style.transform = `translateX(-50%) rotate(${secDeg}deg)`;

    hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
