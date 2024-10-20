const hours = document.getElementById("hours")
const minutes = document.getElementById("min")
const seconds = document.getElementById("sec")

function displayTime(){
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hRotate = 30 * hh * mm / 2;  
  let mRotate = 6 * mm;
  let sRotate = 6 * ss;

  hours.style.transform = `rotate(${hRotate}deg)`;
  minutes.style.transform = `rotate(${mRotate}deg)`;
  seconds.style.transform = `rotate(${sRotate}deg)`;

}

setInterval(displayTime, 1000)