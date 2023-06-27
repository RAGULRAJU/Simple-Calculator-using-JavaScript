const button = document.querySelector("button")
button.addEventListener("click",display)

let resultdiv = document.createElement("div")
resultdiv.id="result"
document.getElementById("wrapper").appendChild(resultdiv)

function display(){
let val1 = document.getElementById("val").value;
let arr = val1.split(" ");
let val2 = arr[1]
let text=""
let op1 = Number(arr[0])
let op2 = Number(arr[2])
let ans = 0

switch(val2){

case '+':
    ans = (op1+op2)
    break

case '-':
    ans = (op1-op2)
    break

case '*':
     ans = (op1*op2)
     break

case '/':
    ans = op1/op2
    break

default:
    console.log(ans)

}
    text = "The calculated Value is:" + ans
    document.getElementById("result").innerHTML = text
    }