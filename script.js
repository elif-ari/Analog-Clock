function updateClock(clockContainer, timeZone) {
    const now = new Date();
    const localTime = new Date(now.toLocaleString("en-US", { timeZone }));

    const hour = localTime.getHours();
    const minute = localTime.getMinutes();
    const second = localTime.getSeconds();

    const hourDeg = hour * 30 + minute * 0.5;
    const minuteDeg = minute * 6 + second * 0.1;
    const secondDeg = second * 6;

    const hourHand = clockContainer.querySelector('.hand.hour');
    const minuteHand = clockContainer.querySelector('.hand.minute');
    const secondHand = clockContainer.querySelector('.hand.second');

    hourHand.style.transform = `translate(-50%) rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `translate(-50%) rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `translate(-50%) rotate(${secondDeg}deg)`;
}

document.querySelectorAll('.clock-container').forEach(clockContainer => {
    const select = clockContainer.querySelector('.city-select');
    let currentTimeZone = select.value;

    select.addEventListener('change', () => {
        currentTimeZone = select.value;
    });

    setInterval(() => {
        updateClock(clockContainer, currentTimeZone);
    }, 1000);
});
