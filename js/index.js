import { Sounds } from "./sounds.js"

const buttonPlay = document.querySelector('.playButton')
const buttonStop = document.querySelector('.stopButton')
const buttonPlusTime = document.querySelector('.timePlusButton')
const buttonLessTime = document.querySelector('.timeLessButton')
const buttonSound01 = document.querySelector('.sound1')
const buttonSound02 = document.querySelector('.sound2')
const buttonSound03 = document.querySelector('.sound3')
const buttonSound04 = document.querySelector('.sound4')
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
let minutes = 0
let seconds = 0
let timer = 0

const sound =  Sounds()

buttonSound01.addEventListener('click',function(){
    sound.playSounds(this.getAttribute('class'))
    buttonSound01.style.backgroundColor = 'blue'
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

