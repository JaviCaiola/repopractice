//crear una funcion que multiplique los numeros de un array

let numeros = [1,2,3,4,5,6,7,8,9,10];

function multiplicar(numeros) {
    let resultado = 1;
    for (let i = 0; i < numeros.length; i++) {
        resultado *= numeros[i];
    }
    return resultado;
}

console.log(multiplicar(numeros));