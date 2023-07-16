// date

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function checkTime() {
  var date = new Date();
  setInterval(displayTime,1000)
  function displayTime(){
    const timeNow = new Date();
    let hours = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let seconds = timeNow.getSeconds();
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    let timeStr = hours + " : " + minutes + " : " + seconds;
    document.getElementById('clock').innerText = timeStr;
  }
  displayTime();
  var day = date.getDate();
  var month = monthNames[date.getMonth()];
  var weekday = dayNames[date.getDay()];

  document.getElementById('time').innerHTML = month + ' ' + day + ', ' + weekday;
}

setInterval(checkTime(), 1000);

function GoodTime() {
  let good_time = document.getElementById("good_time");

  let date = new Date();
  let hour = date.getHours();
  if (hour>=5 && hour<12) greeting = "Good morning "; else {
  if (hour>=12 && hour<18) greeting = "Good afternoon "; else {
  if (hour>=18 && hour<24) greeting = "Good evening "; else {
  if (hour>=11 && hour<5) greeting = "Good night "; }
  }}

  good_time.innerHTML = greeting;
}
GoodTime();

// quotes

let quote = document.getElementsByClassName('quote');
let author = document.getElementsByClassName('author');
let btn = document.getElementsByClassName('change-quote');

function getMessage() {
  let ar = new Array(20)
  ar[0] = `"Nothing is as easy as it looks." Ella Wilcox`
  ar[1] = `"Everything takes longer than you think." Daisaku Ikeda`
  ar[2] = `"Anything that can go wrong will go wrong." Og Mandino`
  ar[3] = `"If there is a possibility of several things going wrong, the one that will cause the most damage will be the one to go wrong." Mary Bethune`
  ar[4] = `"If there is a worse time for something to go wrong, it will happen then." William Shakespeare`
  ar[5] = `"If anything simply cannot go wrong, it will anyway." Booker Washington`
  ar[6] = `"If you perceive that there are four possible ways in which a procedure can go wrong, and circumvent these, then a fifth way, unprepared for, will promptly develop." Elizabeth Arden`
  ar[7] = `"Left to themselves, things tend to go from bad to worse." Thomas Edison`
  ar[8] = `"If everything seems to be going well, you have obviously overlooked something." Mohandas`
  ar[9] = `"Nature always sides with the hidden flaw." Niccolo Machiavelli`
  ar[10] = `"Mother nature is a bitch." Napoleon Hill`
  ar[11] = `"It is impossible to make anything foolproof because fools are so ingenious." Ralph Emerson`
  ar[12] = `"Whenever you set out to do something, something else must be done first." Mary Kay Ash`
  ar[13] = `"Every solution breeds new problems." Carl Jung`
  ar[14] = `"Trust everybody ... then cut the cards. "Henry Longfellow`
  ar[15] = `"Two wrongs are only the beginning." Moliere`
  ar[16] = `"If at first you don't succeed, destroy all evidence that you tried." Bernice Reagon`
  ar[17] = `"To succeed in politics, it is often necessary to rise above your principles." Byron Pulsifer`
  ar[18] = `"Exceptions prove the rule ... and wreck the budget." Booker Washington`
  ar[19] = `"Success always occurs in private, and failure in full view." Buddha`

  var now = new Date()
  var sec = now.getSeconds()
  document.random.random.value = ar[sec % 20]
  }
  getMessage()