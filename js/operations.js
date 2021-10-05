
export const suma = (a,b) => a+b;

export const restar = (a,b)=> a-b;

export const multiplicar = (a,b)=>{
    return new Array(b).fill(a).reduce(suma)
}

export const division = (a, b, result, add, substract)=>{
    if(a < 0){
        return substract(result, 1);
    }
    return division(substract(a, b), b, add(result, 1), add, substract)
}


