import { buttonDark } from "./js/elements.js"

const doc = document.querySelector('body')
export function toogleDarkModeButton(){
    doc.classList.toggle('darkmode')
}
