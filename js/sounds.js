import { 
    btn1,
    btn2,
    btn3,
    btn4
} from "./elements.js"

export function Sounds(){

    const sound1 = new Audio('./assets/Floresta.wav')
    const sound2 = new Audio('./assets/Chuva.wav')
    const sound3 = new Audio('./assets/Cafeteria.wav')
    const sound4 = new Audio('./assets/Lareira.wav')
    
    sound1.loop = true
    sound2.loop = true
    sound3.loop = true
    sound4.loop = true
    
        
    function resetBackgroundButtonChecked(){
        btn1.classList.remove('buttonChecked')
        btn2.classList.remove('buttonChecked')
        btn3.classList.remove('buttonChecked')
        btn4.classList.remove('buttonChecked')
    }

    function stopAllSounds(){
        resetBackgroundButtonChecked()
        sound1.pause()
        sound1.currentTime = 0
    
        sound2.pause()
        sound2.currentTime = 0
        
        sound3.pause()
        sound3.currentTime = 0
        
        sound4.pause()
        sound4.currentTime = 0
    }

    function setVolume(volume){
        sound1.volume = volume
        sound2.volume = volume
        sound3.volume = volume
        sound4.volume = volume
    }

    function playSounds(soundToPlay){
        resetBackgroundButtonChecked()
        stopAllSounds()

        if (soundToPlay === 'sound1'){
            sound1.play()
            btn1.classList.add('buttonChecked')
            
        }else if(soundToPlay === 'sound2'){
            sound2.play()
            btn2.classList.add('buttonChecked')
            
        }else if (soundToPlay === 'sound3'){
            sound3.play()
            btn3.classList.add('buttonChecked')
            
        }else if(soundToPlay === 'sound4'){
            sound4.play()
            btn4.classList.add('buttonChecked')
            
        }

    }

    return {
        stopAllSounds, 
        playSounds,
        setVolume,
    } 
}
