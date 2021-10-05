
export const suma = (a,b) => a+b;

export const restar = (a,b)=> a-b;

export const multiplicar = (a,b)=>{
    return new Array(b).fill(a).reduce(suma)
}

