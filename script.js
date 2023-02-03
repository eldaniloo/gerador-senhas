const passInput = document.querySelector('#inputPasswordId')
const lenInput = document.querySelector('#inputLengthId')
const infoLength = document.querySelector('label[for="inputLengthId"]')
const btnGerar = document.querySelector ('#btnGerar')

const chkLower = document.querySelector('#chkLowerId')
const chkUpper = document.querySelector('#chkUpperId')
const chkNumber = document.querySelector('#chkNumberId')
const chkSymbols = document.querySelector('#chkSymbolsrId')

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const symbols = ['!', '@', '#', '$', '%']

const caracters = Array.from(Array(26)).map((_, i) => i + 97)
const lowerCaseCaracters = caracters.map((item) => String.fromCharCode(item))
const upperCaseCaracters = lowerCaseCaracters.map((item) => item.toUpperCase())

infoLength.innerHTML = lenInput.value

lenInput.addEventListener("change", () => {
    infoLength.innerHTML = lenInput.value
})

btnGerar.addEventListener('click', () => {
    generatePassword(
        chkLower.checked,
        chkSymbols.checked,
        chkLower.checked,
        chkUpper.checked,
        lenInput.value
    )
})
const generatePassword = (
    hasNumbers,
    hasSymbols,
    hasLowercase,
    hasUppercase,
    length
) => {
    const newArray = [
        ...(hasNumbers ? numbers : []),
        ...(hasSymbols ? symbols : []),
        ...(hasLowercase ? lowerCaseCaracters : []),
        ...(hasUppercase ? upperCaseCaracters : [])  
    ]

    if (newArray.length === 0) return

    let password = ""

    for (let i = 0; i < length; i++) {
        const ramdomIndex = Math.floor(Math.random() * newArray.length);
        password += newArray[ramdomIndex]
        
    }
    passInput.value = password
}