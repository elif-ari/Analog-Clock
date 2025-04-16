const secondHand = document.getElementById('secondHand');

function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const degrees = (seconds / 60) * 360;
    secondHand.style.transform = `translateX(-50%) rotate(${degrees}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
