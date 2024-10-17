const input = document.querySelector("#input-field")
const clear =  document.querySelector("#clear")
const mc = document.querySelector("#mc")
const percentage = document.querySelector("#percentage")
const divide = document.querySelector("#divide")
const seven = document.querySelector("#seven")
const eight = document.querySelector("#eight")
const nine = document.querySelector("#nine")
const multiply = document.querySelector("#multiply")
const four = document.querySelector("#four")
const five = document.querySelector("#five")
const six  = document.querySelector("#six")
const minus = document.querySelector("#minus")
const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
const add = document.querySelector("#add")
const zero = document.querySelector("#zero")
const dot = document.querySelector("#dot")
const equalto = document.querySelector("#equalto")

clear.addEventListener("click", () => {
    input.value = ""
})

mc.addEventListener("click", () => {
    input.value = input.value.slice(0, -1)
})

percentage.addEventListener("click", () => {
    input.value += "%"
})

divide.addEventListener("click", () => {
    input.value += "/"
})

seven.addEventListener("click", () => {
    input.value += "7"
})

eight.addEventListener("click", () => {
    input.value += "8"
})

nine.addEventListener("click", () => {
    input.value += "9"
})

multiply.addEventListener("click", () => {
    input.value += "*"
})

four.addEventListener("click", () => {
    input.value += "4"
})

five.addEventListener("click", () => {
    input.value += "5"
})

six.addEventListener("click", () => {
    input.value += "6"
})

minus.addEventListener("click", () => {
    input.value += "-"
})

one.addEventListener("click", () => {
    input.value += "1"
})

two.addEventListener("click", () => {
    input.value += "2"
})

three.addEventListener("click", () => {
    input.value += "3"
})

add.addEventListener("click", () => {
    input.value += "+"
})

zero.addEventListener("click", () => {
    input.value += "0"
})

dot.addEventListener("click", () => {
    input.value += "."
})

equalto.addEventListener("click", () => {
    input.value = eval(input.value)
})