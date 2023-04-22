let input = document.getElementById("input")
let output = document.getElementById("output")
let button = document.querySelectorAll(".button")
let arr = Array.from(button)
let str = ""

arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            str = eval(str)
            input.value = str
            output.value = ""
        }
        else if (e.target.innerHTML == "AC") {
            str = ""
            input.value = str
            output.value = ""
        }
        else if (e.target.innerHTML == "C") {
            str = str.substring(0, str.length - 1)
            input.value = str
            if (str.length == 0) {
                output.value = ""
            } else {
                output.value = eval(str)
            }
        }
        else if (e.target.innerHTML == "%") {
            input.value = str + "%"
            str += "/100"
            output.value = eval(str)
        }
        else if (e.target.innerHTML == "()") {
            if (
                str.indexOf("(") == -1 ||
                str.indexOf("(") != -1 &&
                str.indexOf(")") != -1 &&
                str.lastIndexOf("(") < str.lastIndexOf(")")) {
                str += "("
            }
            else if (
                str.indexOf("(") != -1 &&
                str.indexOf(")") == -1 ||
                str.indexOf("(") != -1 &&
                str.indexOf(")") != -1 &&
                str.lastIndexOf("(") > str.lastIndexOf(")")) {
                str += ")"
            }
            input.value = str
            output.value = eval(str)
        }
        else {
            if (validInput(e.target.innerHTML)) {
                str += e.target.innerHTML
                input.value = str
                output.value = eval(str)
            }
        }
    })
})

document.addEventListener("keydown", (e) => {
    let keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/", "%", "(", ")"]
    if (e.key === "Enter") {
        str = eval(str)
        input.value = str
        output.value = ""
    }
    else if (e.key === "%") {
        input.value = str + "%"
        str += "/100"
        output.value = eval(str)
    }
    else if (e.key === "Backspace") {
        str = str.substring(0, str.length - 1)
        input.value = str
        if (str.length == 0) {
            output.value = ""
        } else {
            output.value = eval(str)
        }
    }
    else if (keys.includes(e.key)) {
        if (validInput(e.key)) {
            str += e.key
            input.value = str
            output.value = eval(str)
        }
    }
})

function validInput(value) {
    let last = str.slice(-1)
    let operators = ["+", "-", "*", "/", "%"]
    if (value == "." && last == ".") {
        return false
    }
    if (operators.includes(value)) {
        if (operators.includes(last)) {
            return false
        }
        else {
            return true
        }
    }
    return true
}