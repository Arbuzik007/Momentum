let tempBlock = document.querySelector('#temp')
let waterBlock = document.querySelector('#water')
let speedBlock = document.querySelector('#speed')
let searchBlock = document.querySelector('#search')
let imgBlock = document.querySelector('#img')
let city = 'Minsk'

functioninit() {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d70980fe4abefc91ab73e34b1c789ada`)
    .then(resp => {return resp.json()})
    .then(data => {
      tempBlock.textContent = `${temperature()}Co`

      function temperature() {
        let getTemp = data.maim.tempBlock
        let tempC = Math.floor(getTemp) - 273
        return temC
      }

      let date = new Date;

      update_date.textContent = `Update time: ${date.getHours}`

    })
    .catch(() => {

    })
}

init()

setInterval(()=>{
  init()
}, 10000)