/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.querySelector('.convert-btn')
let rectangleInput = document.querySelector(".rectangle")
let lessThanZero = document.querySelector('.warning')
let group1Para = document.querySelector('.group1-p')
let group2Para = document.querySelector('.group2-p')
let group3Para = document.querySelector('.group3-p')


rectangleInput.value = ""
lessThanZero.textContent = ""

convertBtn.addEventListener("click", () => {
    const meter = 3.281
    const liter = 0.264
    const kilogram = 2.204
    lessThanZero.textContent = ""
    let inputValue = rectangleInput.value

    if (rectangleInput.value > 0) {
        if (inputValue.includes('.')) {
         inputValue = Number(inputValue).toFixed(3)
        }
        group1Para.textContent = `${inputValue} meters = ${(inputValue * meter).toFixed(3)} feet | ${inputValue} feet = ${(inputValue / meter).toFixed(3)} meters`
        group2Para.textContent = `${inputValue} liters = ${(inputValue * liter).toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue / liter).toFixed(3)} liters`
        group3Para.textContent = `${inputValue} kilograms = ${(inputValue * kilogram).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue / kilogram).toFixed(3)} kilograms`
    }
    else {
        lessThanZero.textContent ="Input must be greater than zero."
    }
    rectangleInput.value = ""
})
