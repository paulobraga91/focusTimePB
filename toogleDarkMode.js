import { buttonDark,buttonLight } from "./js/elements.js"

const doc = document.querySelector('body')
export function toogleDarkModeButton(){
    doc.classList.toggle('darkmode')
    buttonDark.classList.toggle('hide')
    buttonLight.classList.toggle('hide')
}

