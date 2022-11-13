const characters = ["A","B","C","D","E","F","G","H","I","J","K",
"L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a",
"b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5",
"6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")",
"_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordElOne = document.getElementById("password-field1")
const passwordElTwo = document.getElementById("password-field2")
const tooltipTxt = document.getElementById("tooltip-txt")
const tooltipTxt2 = document.getElementById("tooltip-txt2")
let passwordLength = 14




// getting random password function
const getRandomCharacter = () => {
    let passwordChar1 = Math.floor( Math.random() * characters.length)
    return characters[passwordChar1]
}

// generation random password function
function generateRandomPassword() {
    tooltipTxt.style.display = "block"
    tooltipTxt2.style.display = "block"
    let randomPassword1 = ""
    let randomPassword2 = ""
    tooltipTxt2.textContent = 'Copy-Text'
    tooltipTxt.textContent = 'Copy-Text'
    for (let i = 0; i < passwordLength; i++) {
        randomPassword1 += getRandomCharacter()
        randomPassword2 += getRandomCharacter()
    }
    passwordElOne.textContent = randomPassword1
    passwordElTwo.textContent = randomPassword2
   
    
}

passwordElOne.addEventListener('click', () => {
    navigator.clipboard.writeText(passwordElOne.textContent)
    tooltipTxt.textContent = "Copied"
    setTimeout(() => {
        passwordElOne.textContent = ""
        tooltipTxt.style.display = "none"
    }, 1000)

})


passwordElTwo.addEventListener('click', () => {
    navigator.clipboard.writeText(passwordElTwo.textContent)
    tooltipTxt2.textContent = "Copied"
    setTimeout(() => {
        passwordElTwo.textContent = ""
        tooltipTxt2.style.display = "none"
    }, 1000)

})











