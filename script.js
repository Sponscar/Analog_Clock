const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");
const digitalClock = document.querySelector("#digitalClock");

const deg = 6;

setInterval(() => {
  let day = new Date();

  let hours = day.getHours();
  let minutes = day.getMinutes();
  let seconds = day.getSeconds();

  // Analog clock
  let hh = hours * 30;
  let mm = minutes * deg;
  let ss = seconds * deg;

  hr.style.transform = `rotate(${hh + mm / 12}deg)`;
  mn.style.transform = `rotate(${mm}deg)`;
  sc.style.transform = `rotate(${ss}deg)`;

  // Digital clock
  const pad = (n) => n.toString().padStart(2, '0');
  digitalClock.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}, 1000);
