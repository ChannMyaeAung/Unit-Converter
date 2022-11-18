/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById('input-el')
const convertBtn = document.getElementById('convert-btn')
const resultOne = document.getElementById('result-1')
const resultTwo = document.getElementById('result-2')
const resultThree = document.getElementById('result-3')

convertBtn.addEventListener('click', () => {
    if(inputEl.value === ""){
        window.alert('Please enter/choose a number')
    }

    resultOne.textContent = 
    `${inputEl.value} ${inputEl.value < 2 ? "meter" : "meters"} = ${(inputEl.value * 3.281).toFixed(3)} feet
    | ${inputEl.value} ${inputEl.value < 2 ? "foot" : "feet"} = ${(inputEl.value / 3.281).toFixed(3)} meters
    `

    resultTwo.textContent = 
    `${inputEl.value} ${inputEl.value < 2 ? "liter" : "liters"} = ${(inputEl.value * 0.264).toFixed(3)} gallons
    | ${inputEl.value} ${inputEl.value < 2 ? "gallon" : "gallons"} = ${(inputEl.value / 0.264).toFixed(3)} liters
    `

    resultThree.textContent = 
    `${inputEl.value} ${inputEl.value < 2 ? "kilogram" : "kilograms"} = ${(inputEl.value * 2.204).toFixed(3)} feet
    | ${inputEl.value} ${inputEl.value < 2 ? "pound" : "pounds"} = ${(inputEl.value / 2.204).toFixed(3)} meters
    `
})
