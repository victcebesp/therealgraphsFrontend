const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

function getNextCountDown() {
    let nextUpdateDay = new Date().getDate() + 1;
    let nextUpdateMonth = new Date().getMonth();
    let nextUpdateYear = new Date().getFullYear();
    let nextUpdateHour = 1;
    let nextUpdateMinute = 0;
    return new Date(nextUpdateYear, nextUpdateMonth, nextUpdateDay, nextUpdateHour, nextUpdateMinute).getTime();
}

let countDown = getNextCountDown();

let x = setInterval(function() {

  let now = new Date().getTime();
  let distance = countDown - now;

  let numberOfElements = document.getElementsByClassName("hours").length;
  for (let i = 0; i < numberOfElements; i++) {
      document.getElementsByClassName('hours')[i].innerText = Math.floor((distance % (day)) / (hour));
      document.getElementsByClassName('minutes')[i].innerText = Math.floor((distance % (hour)) / (minute));
      document.getElementsByClassName('seconds')[i].innerText = Math.floor((distance % (minute)) / second);
  }

  if (distance < 0) countDown = getNextCountDown();

}, second);