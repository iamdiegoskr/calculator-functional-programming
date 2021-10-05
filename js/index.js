
let numberOne = document.querySelector("#numberOne");
let numberTwo = document.querySelector("#numberTwo");

let button = document.querySelector("#btn-calculate");




function generateCalculations(){
    let numberOne = numberOne.value;
    let numberTwo = numberTwo.value;
}



button.addEventListener("click",(event)=>{
    generateCalculations()
})