import {suma, restar, multiplicar} from './operations.js'

let numberOne = document.querySelector("#numberOne");
let numberTwo = document.querySelector("#numberTwo");

let button = document.querySelector("#btn-calculate");




function generateCalculations(){
    let number1 = parseInt(numberOne.value);
    let number2 = parseInt(numberTwo.value);

    console.log("La suma es " + suma(number1,number2));

    console.log("La resta es " + restar(number1,number2));

    console.log("La multiplicacion es " + multiplicar(number1,number2))

}



button.addEventListener("click",(event)=>{
    generateCalculations()
})