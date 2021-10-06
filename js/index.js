import {suma, restar, multiplicar, division} from './operations.js'

let numberOne = document.querySelector("#numberOne");
let numberTwo = document.querySelector("#numberTwo");

let button = document.querySelector("#btn-calculate");




function generateCalculations(){

    if(numberOne.value!="" && numberTwo.value!=""){

        let number1 = parseInt(numberOne.value);
        let number2 = parseInt(numberTwo.value);


        const absX = (number1 < 0 ? -1*(number1) : number1);
        const absY = (number2 < 0 ? -1*(number2) : number2);

        let multiplicacionXY = multiplicar(number1, absY);
        multiplicacionXY = (number2 < 0 ? -1*(multiplicacionXY) : multiplicacionXY);


        let divisionXY = division(absX, absY, 0);
        divisionXY = (number1*number2 < 0? -1*(divisionXY) : divisionXY);

        return `
            La suma es ${suma(number1,number2)} \n
            La resta es ${restar(number1,number2)} \n
            La multiplicacion es ${multiplicacionXY} \n
            La division es ${divisionXY}
        `

    }

    return "Debe ingresar los dos numeros"

}



button.addEventListener("click",(event)=>{
    alert(generateCalculations())
})