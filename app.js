const btn = document.querySelector('button');
const msg = document.querySelector('h1');
const time = document.querySelector('h4');

btn.addEventListener('click', showGreeting);

function showGreeting() {

    const date = new Date();
    let hour = date.getHours();
    let minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    let seconds = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();
    let setInterval = window.setInterval(showGreeting, 1000);
    let message;

    if (hour > 17) {
        message = "Good Evening!";
    } else if (hour > 12) {
        message = "Good Afternoon!";
    } else if (hour > 0) {
        message = "Good Morning!"
    }
    msg.innerText = message;
    time.innerText = `it's ${hour}:${minutes}:${seconds}`;




}
