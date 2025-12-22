const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");
const digitalClock = document.querySelector("#digitalClock");
const greeting = document.querySelector("#greeting");

const deg = 6;

setInterval(() => {
  let day = new Date();

  let hours = day.getHours();
  let minutes = day.getMinutes();
  let seconds = day.getSeconds();

  // ===== Analog Clock =====
  let hh = hours * 30;
  let mm = minutes * deg;
  let ss = seconds * deg;

  hr.style.transform = `rotate(${hh + mm / 12}deg)`;
  mn.style.transform = `rotate(${mm}deg)`;
  sc.style.transform = `rotate(${ss}deg)`;

  // ===== Digital Clock =====
  const pad = (n) => n.toString().padStart(2, '0');
  digitalClock.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

  // ===== Time Greeting =====
  let text = "Good Night";

  if (hours >= 5 && hours < 12) {
    text = "Good Morning";
  } else if (hours >= 12 && hours < 15) {
    text = "Good Afternoon";
  } else if (hours >= 15 && hours < 18) {
    text = "Good Evening";
  }

  greeting.textContent = text;

}, 1000);