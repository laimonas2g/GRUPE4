const dateEl = document.getElementsByClassName("date")[0];
const timeEl = document.getElementsByClassName("time")[0];
const hourEl = document.getElementsByClassName("hours")[0];
const minsEl = document.getElementsByClassName("minutes")[0];
const secsEl = document.getElementsByClassName("seconds")[0];
const pomoEl = document.getElementsByClassName("slider")[0];

const weekdays = [
  "Sekmadienis",
  "Pirmadienis",
  "Antradienis",
  "Trečiadienis",
  "Ketvirtadienis",
  "Penktadienis",
  "Šeštadienis",
];

const months = [
  "Sausio",
  "Vasario",
  "Kovo",
  "Balandžio",
  "Gegužės",
  "Birželio",
  "Liepos",
  "Rugpjūčio",
  "Rugsėjo",
  "Spalio",
  "Lapkričio",
  "Gruodžio",
];

function clock() {
  const now = new Date();

  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  h = addZero(h);
  m = addZero(m);
  s = addZero(s);
  let month = now.getMonth();
  let weekday = now.getDay();
  let day = now.getDate();

  timeEl.textContent = h + ":" + m + ":" + s;
  dateEl.textContent =
    weekdays[weekday] + ", " + months[month] + " " + day + " d.";
  hourEl.style.transform = "rotate(" + h * 30 + "deg)";
  minsEl.style.transform = "rotate(" + m * 6 + "deg)";
  secsEl.style.transform = "rotate(" + s * 6 + "deg)";

  setTimeout(clock, 1000);
}

function addZero(t) {
  if (t < 10) {
    t = "0" + t;
  }
  return t;
}

clock();

// POMODORO

let isPomoOn = false;

pomoEl.addEventListener("click", () => {
  isPomoOn ? (isPomoOn = false) : (isPomoOn = true);
  pomoEl.classList.toggle("active");
  isPomoOn ? work() : kill();
});

function work() {
  timeEl.classList.remove("chill");
  timeEl.classList.add("work");
  isPomoOn ? setTimeout(chill, 25 * 1 * 1000) : kill(); // 60
}

function chill() {
  timeEl.classList.remove("work");
  timeEl.classList.add("chill");
  isPomoOn ? setTimeout(work, 5 * 1 * 1000) : kill(); // 60
}

function kill() {
  timeEl.classList.remove("work");
  timeEl.classList.remove("chill");
}
