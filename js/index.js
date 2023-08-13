import { Sounds } from "./sounds.js"
import{
    buttonPlay,
    buttonStop,
    buttonLessTime,
    buttonPlusTime,
    buttonSound01,
    buttonSound02,
    buttonSound03,
    buttonSound04,
    minutesDisplay,
    secondsDisplay,
    buttonDark,
    buttonLight,
    rangeVolume
} from "./elements.js"
import { toogleDarkModeButton } from "../toogleDarkMode.js"

let minutes = 0
let seconds = 0
let timer = 0

const sound =  Sounds()

buttonLight.addEventListener('click',toogleDarkModeButton)
buttonDark.addEventListener('click',toogleDarkModeButton)

buttonSound01.addEventListener('click',function(){
    sound.playSounds(this.getAttribute('class'))
})

buttonSound02.addEventListener('click',function(){
   sound.playSounds(this.getAttribute('class'))
})

buttonSound03.addEventListener('click',function(){
  sound.playSounds(this.getAttribute('class'))
})

buttonSound04.addEventListener('click',function(){
  sound.playSounds(this.getAttribute('class'))
})

rangeVolume.addEventListener('input', function(){
    let volumeValue = this.value
    sound.setVolume(volumeValue)
})

buttonPlusTime.addEventListener('click',function(){
    minutes = minutes + 5
    updateDisplay()
})

buttonLessTime.addEventListener('click',function(){
    if(minutes<=0){
    minutes = 0
    }else{
        minutes -= 5
    }
    updateDisplay()
})

buttonPlay.addEventListener('click',function(){
    if (!timer){
        timer = setInterval(contador,1000)
    }

})

buttonStop.addEventListener('click',stopTimer)

function stopTimer(){
    clearInterval(timer)
    minutes = 0
    seconds = 0
    updateDisplay()
    sound.stopAllSounds()
}

function updateDisplay(){
    minutesDisplay.innerText = minutes.toString().padStart(2,'0')
    secondsDisplay.innerText = seconds.toString().padStart(2,'0')
}

function contador(){

    if (seconds > 0){
        seconds--
    }else if(minutes >0){
        minutes--
        seconds = 59
    }else{
        clearInterval(timer)
        timer = null
        return
    }

    updateDisplay()
}


