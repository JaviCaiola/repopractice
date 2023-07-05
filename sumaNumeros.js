//crear una function que sume 10 numeros de un array
let array = [1,2,3,4,5,6,7,8,9,10];

function suma(array){
    let suma = 0;
    for(let i = 0; i < array.length; i++){
        suma += array[i];
    }
    return suma;
}

console.log(suma(array));