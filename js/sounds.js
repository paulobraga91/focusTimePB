export function Sounds(){

    const sound1 = new Audio('./assets/Floresta.wav')
    const sound2 = new Audio('./assets/Chuva.wav')
    const sound3 = new Audio('./assets/Cafeteria.wav')
    const sound4 = new Audio('./assets/Lareira.wav')
    
    sound1.loop = true
    sound2.loop = true
    sound3.loop = true
    sound4.loop = true
    
    
    function stopAllSounds(){
        sound1.pause()
        sound1.currentTime = 0
    
        sound2.pause()
        sound2.currentTime = 0
        
        sound3.pause()
        sound3.currentTime = 0
        
        sound4.pause()
        sound4.currentTime = 0
    }


    function playSounds(soundToPlay){

        stopAllSounds()

        if (soundToPlay === 'sound1'){
            sound1.play()
            console.log('tocando som 1')
        }else if(soundToPlay === 'sound2'){
            sound2.play()
            console.log('tocando som 2')
        }else if (soundToPlay === 'sound3'){
            sound3.play()
            console.log('tocando som 3')
        }else if(soundToPlay === 'sound4'){
            sound4.play()
            console.log('tocando som 4')
        }

    }


    return {
        stopAllSounds, 
        playSounds
    } 

}