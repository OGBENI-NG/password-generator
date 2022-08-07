const characters = ["A","B","C","D","E","F","G","H","I","J","K",
"L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a",
"b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5",
 "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")",
 "_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordElOne = document.getElementById("password-field1")
let passwordElTwo = document.getElementById("password-field2")
let passwordLength = 15
let copyText = document.getElementById("password-field1")
let toolTips = document.getElementById("copy-icon")

// getting random password function
const getRandomCharacter = () => {
    let passwordChar1 = Math.floor( Math.random() * characters.length)
    return characters[passwordChar1]
}

// generation random password function
const generateRandomPassword = () => {
    let randomPassword1 = ""
    let randomPassword2 = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword1 += getRandomCharacter()
        randomPassword2 += getRandomCharacter()
    }
    
    passwordElOne.textContent = randomPassword1
    passwordElTwo.textContent = randomPassword2
    
}
const generatePasswordTwo = generateRandomPassword()











