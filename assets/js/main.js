let hacker = {
    nickname: "",
    gender: null,
    skills: [],
}

const forename = ['sudo', 'bash', 'powershell', 'keyboard', 'unix', 'script', 'code', 'syntax', 'stack', 'heap', 'overflow', 'backdoor', 'blackhat', 'ide', 'buffer']
const surename = ['kid', 'kiddy', 'dragon', 'master', 'hacker', 'boss', 'unicorn', 'money', 'monster', 'moon', 'sun', 'spaceship', 'rocket', 'lord']
const fills = ['#', '*', '_', '@', ':)', '_*_']

let state = 0
const button = document.querySelector("button")
button.addEventListener("click", next)
const theSection = document.querySelector("section")

function next() {

    switch (state) {
        case 0: start();
            break;
        case 1: color();
            break;
        case 2: fin();
    }
}
function start() {
    const input = getInputField({ placeholder: "Tell me your name" })
    input.addEventListener("change", (e) => { hacker.nickname = e.target.value })
    theSection.appendChild(input)
    state++

}

function color() {
    theSection.removeChild(document.querySelector('input'))
    const input = getInputField({ placeholder: "Tell me your fav color" })
    theSection.appendChild(input)
    state++
}
function fin() {
    state = 0
    theSection.removeChild(document.querySelector('input'))
    const theName = nameBuilder()
    let heading = document.createElement('h1')
    let text = document.createTextNode(theName)
    heading.appendChild(text)
    theSection.appendChild(heading)
}

function nameBuilder() {
    let first = fills[[Math.floor(Math.random() * fills.length)]]
    first += forename[Math.floor(Math.random() * forename.length)]
    first += fills[[Math.floor(Math.random() * fills.length)]]
    first += forename[Math.floor(Math.random() * forename.length)]
    first += fills[[Math.floor(Math.random() * fills.length)]]
    first += surename[[Math.floor(Math.random() * surename.length)]]
    first += fills[[Math.floor(Math.random() * fills.length)]]
    return first
}
function getInputField(data) {
    let field = document.createElement("input")
    field.setAttribute("type", "text")
    field.setAttribute("placeholder", data.placeholder)
    return field
}

next()