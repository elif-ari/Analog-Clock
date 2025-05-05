/*function updateClock(clockContainer, timeZone) {
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
});*/

const body = document.querySelector("body"),
    secondHand = document.querySelector('.second'),
    minuteHand = document.querySelector('.minute'),
    hourHand = document.querySelector('.hour'),
    modeSwitch = document.querySelector(".mode-switch");

// İlk yüklemede dark mode kontrolü
if (localStorage.getItem("mode") === "Dark Mode") {
    body.classList.add("dark");
    modeSwitch.textContent = "Light Mode";
}

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    const isDarkMode = body.classList.contains("dark");
    modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
    localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
});

function updateClock(clockContainer, timeZone) {
    const now = new Date();
    const localTime = new Date(now.toLocaleString("en-US", { timeZone }));
    const hour = localTime.getHours();
    const minute = localTime.getMinutes();
    const second = localTime.getSeconds();

    const hourDeg = hour * 30 + minute * 0.5;
    const minuteDeg = minute * 6 + second * 0.1;
    const secondDeg = second * 6;


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
})