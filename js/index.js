import {suma} from './operations.js'

let numberOne = document.querySelector("#numberOne");
let numberTwo = document.querySelector("#numberTwo");

let button = document.querySelector("#btn-calculate");




function generateCalculations(){
    let number1 = parseInt(numberOne.value);
    let number2 = parseInt(numberTwo.value);

    alert(suma(number1,number2))

}



button.addEventListener("click",(event)=>{
    generateCalculations()
})