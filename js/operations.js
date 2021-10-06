
export const suma = (a,b) => a+b;

export const restar = (a,b)=> a-b;

export const multiplicar = (a,b)=>{
    return new Array(b).fill(a).reduce(suma)
}

export const division = (x, y, cociente) => {
    if(x < 0)
        return restar(cociente, 1);
    return division(restar(x, y), y, suma(cociente,1));
}


