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

  // audio

  function createTrackItem(index,name,duration){
    var trackItem = document.createElement('div');
    trackItem.setAttribute("class", "playlist-track-ctn");
    trackItem.setAttribute("id", "ptc-"+index);
    trackItem.setAttribute("data-index", index);
    document.querySelector(".playlist-ctn").appendChild(trackItem);

    var playBtnItem = document.createElement('div');
    playBtnItem.setAttribute("class", "playlist-btn-play");
    playBtnItem.setAttribute("id", "pbp-"+index);
    document.querySelector("#ptc-"+index).appendChild(playBtnItem);

    var btnImg = document.createElement('i');
    btnImg.setAttribute("class", "fas fa-play");
    btnImg.setAttribute("height", "40");
    btnImg.setAttribute("width", "40");
    btnImg.setAttribute("id", "p-img-"+index);
    document.querySelector("#pbp-"+index).appendChild(btnImg);

    var trackInfoItem = document.createElement('div');
    trackInfoItem.setAttribute("class", "playlist-info-track");
    trackInfoItem.innerHTML = name
    document.querySelector("#ptc-"+index).appendChild(trackInfoItem);

    var trackDurationItem = document.createElement('div');
    trackDurationItem.setAttribute("class", "playlist-duration");
    trackDurationItem.innerHTML = duration
    document.querySelector("#ptc-"+index).appendChild(trackDurationItem);
  }

  var listAudio = [
    {
      name:"Aqua Caelestis",
      file:"../assets/sounds/Aqua Caelestis.mp3",
      duration: "00:39",
    },
    {
      name:"River Flows In You",
      file:"../assets/sounds/River Flows In You.mp3",
      duration: "01:37",
    },
    {
      name:"Summer Wind",
      file:"../assets/sounds/Summer Wind.mp3",
      duration: "01:50",
    },
    {
      name:"Ennio Morricone",
      file:"../assets/sounds/Ennio Morricone.mp3",
      duration: "01:37",
    }
  ]

  for (var i = 0; i < listAudio.length; i++) {
      createTrackItem(i,listAudio[i].name,listAudio[i].duration);
  }
  var indexAudio = 0;

  function loadNewTrack(index){
    var player = document.querySelector('#source-audio')
    player.src = listAudio[index].file
    document.querySelector('.title').innerHTML = listAudio[index].name
    this.currentAudio = document.getElementById("myAudio");
    this.currentAudio.load()
    this.toggleAudio()
    this.updateStylePlaylist(this.indexAudio,index)
    this.indexAudio = index;
  }

  var playListItems = document.querySelectorAll(".playlist-track-ctn");

  for (let i = 0; i < playListItems.length; i++){
    playListItems[i].addEventListener("click", getClickedElement.bind(this));
  }

  function getClickedElement(event) {
    for (let i = 0; i < playListItems.length; i++){
      if(playListItems[i] == event.target){
        var clickedIndex = event.target.getAttribute("data-index")
        if (clickedIndex == this.indexAudio ) { // alert('Same audio');
            this.toggleAudio()
        }else{
            loadNewTrack(clickedIndex);
        }
      }
    }
  }

  document.querySelector('#source-audio').src = listAudio[indexAudio].file
  document.querySelector('.title').innerHTML = listAudio[indexAudio].name


  var currentAudio = document.getElementById("myAudio");

  currentAudio.load()
  
  currentAudio.onloadedmetadata = function() {
        document.getElementsByClassName('duration')[0].innerHTML = this.getMinutes(this.currentAudio.duration)
  }.bind(this);

  var interval1;

  function toggleAudio() {

    if (this.currentAudio.paused) {
      document.querySelector('#icon-play').style.display = 'none';
      document.querySelector('#icon-pause').style.display = 'block';
      document.querySelector('#ptc-'+this.indexAudio).classList.add("active-track");
      this.playToPause(this.indexAudio)
      this.currentAudio.play();
    }else{
      document.querySelector('#icon-play').style.display = 'block';
      document.querySelector('#icon-pause').style.display = 'none';
      this.pauseToPlay(this.indexAudio)
      this.currentAudio.pause();
    }
  }

  function pauseAudio() {
    this.currentAudio.pause();
    clearInterval(interval1);
  }

  var timer = document.getElementsByClassName('timer')[0]

  var barProgress = document.getElementById("myBar");


  var width = 0;

  function onTimeUpdate() {
    var t = this.currentAudio.currentTime
    timer.innerHTML = this.getMinutes(t);
    this.setBarProgress();
    if (this.currentAudio.ended) {
      document.querySelector('#icon-play').style.display = 'block';
      document.querySelector('#icon-pause').style.display = 'none';
      this.pauseToPlay(this.indexAudio)
      if (this.indexAudio < listAudio.length-1) {
          var index = parseInt(this.indexAudio)+1
          this.loadNewTrack(index)
      }
    }
  }


  function setBarProgress(){
    var progress = (this.currentAudio.currentTime/this.currentAudio.duration)*100;
    document.getElementById("myBar").style.width = progress + "%";
  }


  function getMinutes(t){
    var min = parseInt(parseInt(t)/60);
    var sec = parseInt(t%60);
    if (sec < 10) {
      sec = "0"+sec
    }
    if (min < 10) {
      min = "0"+min
    }
    return min+":"+sec
  }

  var progressbar = document.querySelector('#myProgress')
  progressbar.addEventListener("click", seek.bind(this));


  function seek(event) {
    var percent = event.offsetX / progressbar.offsetWidth;
    this.currentAudio.currentTime = percent * this.currentAudio.duration;
    barProgress.style.width = percent*100 + "%";
  }


  function next(){
    if (this.indexAudio <listAudio.length-1) {
        var oldIndex = this.indexAudio
        this.indexAudio++;
        updateStylePlaylist(oldIndex,this.indexAudio)
        this.loadNewTrack(this.indexAudio);
    }
  }

  function previous(){
    if (this.indexAudio>0) {
        var oldIndex = this.indexAudio
        this.indexAudio--;
        updateStylePlaylist(oldIndex,this.indexAudio)
        this.loadNewTrack(this.indexAudio);
    }
  }

  function updateStylePlaylist(oldIndex,newIndex){
    document.querySelector('#ptc-'+oldIndex).classList.remove("active-track");
    this.pauseToPlay(oldIndex);
    document.querySelector('#ptc-'+newIndex).classList.add("active-track");
    this.playToPause(newIndex)
  }

  function playToPause(index){
    var ele = document.querySelector('#p-img-'+index)
    ele.classList.remove("fa-play");
    ele.classList.add("fa-pause");
  }

  function pauseToPlay(index){
    var ele = document.querySelector('#p-img-'+index)
    ele.classList.remove("fa-pause");
    ele.classList.add("fa-play");
  }


  function toggleMute(){
    var btnMute = document.querySelector('#toggleMute');
    var volUp = document.querySelector('#icon-vol-up');
    var volMute = document.querySelector('#icon-vol-mute');
    if (this.currentAudio.muted == false) {
       this.currentAudio.muted = true
       volUp.style.display = "none"
       volMute.style.display = "block"
    }else{
      this.currentAudio.muted = false
      volMute.style.display = "none"
      volUp.style.display = "block"
    }
  }


  // weather

  const weatherIcons = {
    "Clear": "https://cdn.discordapp.com/attachments/964561366000230421/1095627331898449941/sun.png",
    "Clouds": "https://cdn.discordapp.com/attachments/964561366000230421/1095627739266027530/cloud.png",
    "Rain": "https://cdn.discordapp.com/attachments/964561366000230421/1095646712720261210/heavy-rain.png",
    "Snow":
  "https://cdn.discordapp.com/attachments/964561366000230421/1095629315330285628/snow.png",
    "Brocken Clouds":
  "https://cdn.discordapp.com/attachments/964561366000230421/1095647552646418464/light-rain.png",
    "Few clouds":
  "https://cdn.discordapp.com/attachments/964561366000230421/1095649841654276166/clear-sky.png",
    "Scattered clouds":
  "https://cdn.discordapp.com/attachments/964561366000230421/1095650188321882173/scattered-thunderstorms.png",
    "Broken clouds":
  "https://cdn.discordapp.com/attachments/964561366000230421/1095650823553421346/clouds.png",
    "Overcast clouds":
  "https://cdn.discordapp.com/attachments/964561366000230421/1095651097240158218/cloudy.png",
    "Mist": "https://cdn.discordapp.com/attachments/964561366000230421/1095651764700725298/mist.png",
    "Smoke":
  "https://cdn.discordapp.com/attachments/964561366000230421/1095652086101843968/smoke.png",
    "Haze":
  "https://cdn.discordapp.com/attachments/964561366000230421/1095652418219417610/haze.png",
    "Dust":
  "https://cdn.discordapp.com/attachments/964561366000230421/1095654840996204644/sandstorm.png",
    "Fog":
  "https://cdn.discordapp.com/attachments/964561366000230421/1095655062887469066/fog.png",
    "Sand, dust whirls":
  "https://cdn.discordapp.com/attachments/964561366000230421/1095655447798763530/sand.png",
    "Squalls":
  "https://cdn.discordapp.com/attachments/964561366000230421/1095655792671207504/rainy-day.png",
    "Tornado":
  "https://cdn.discordapp.com/attachments/964561366000230421/1095656100776398990/tornado.png",
    "Drizzle":
  "https://cdn.discordapp.com/attachments/964561366000230421/1095656355349659718/drizzle.png",
    "Thunderstorm":
  "https://cdn.discordapp.com/attachments/964561366000230421/1095656547050336297/storm.png"
    
  };
  
  const apiKey = "e8fdb90ee5665f0b87676b2dd4faeb7c";
  const apiUrlBase = "https://api.openweathermap.org/data/2.5/weather";
  
  const locationInput = document.getElementById("location-input");
  const submitButton = document.getElementById("submit-button");
  const weatherIcon = document.querySelector(".weather-icon");
  const temperature = document.querySelector(".temperature");
  const locationName = document.querySelector(".location");
  
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const location = locationInput.value;
    const apiUrl = `${apiUrlBase}?q=${location}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => displayWeather(data))
      .catch(error => console.log(error));
  });
  
  
  function displayWeather(data) {
    const weather = data.weather[0].main;
    const temperatureValue = Math.round(data.main.temp);
    const iconUrl = `url(${weatherIcons[weather]})`;
  
    weatherIcon.style.backgroundImage = iconUrl;
    temperature.textContent = `${temperatureValue} °C`;
    locationName.textContent = data.name;
    
    const humidity = data.main.humidity;
  const humidityElement = document.querySelector(".feuchtigkeit");
  humidityElement.textContent = `Humidity: ${humidity}%`;
  
    const weatherText = data.main.weather[0];
  const weatherTextElement = document.querySelector(".wettertext");
  humidityElement.textContent = `Humidity: ${humidity}%`;
  
  }