function updateCountdown() {
    const endDate = new Date("January 20, 2024 14:00:00").getTime();
    const now = new Date().getTime();
    const difference = endDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.querySelector(".countdown__item:nth-child(1) p").innerText = days.toString().padStart(2, '0');
    document.querySelector(".countdown__item:nth-child(2) p").innerText = hours.toString().padStart(2, '0');
    document.querySelector(".countdown__item:nth-child(3) p").innerText = minutes.toString().padStart(2, '0');
    document.querySelector(".countdown__item:nth-child(4) p").innerText = seconds.toString().padStart(2, '0');

    if (difference < 0) {
        clearInterval(interval);

    }
}

const interval = setInterval(updateCountdown, 1000);