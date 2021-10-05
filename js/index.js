import {suma, restar, multiplicar, division} from './operations.js'

let numberOne = document.querySelector("#numberOne");
let numberTwo = document.querySelector("#numberTwo");

let button = document.querySelector("#btn-calculate");




function generateCalculations(){

    if(numberOne.value!="" && numberTwo.value!=""){

        let number1 = parseInt(numberOne.value);
        let number2 = parseInt(numberTwo.value);

        return `
            La suma es ${suma(number1,number2)} \n
            La resta es ${restar(number1,number2)} \n
            La multiplicacion es ${multiplicar(number1,number2)} \n
            La division es ${division(number1,number2,0,suma,restar)}
        `

    }

    return "Debe ingresar los dos numeros"

}



button.addEventListener("click",(event)=>{
    alert(generateCalculations())
})