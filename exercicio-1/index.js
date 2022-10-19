/*
    [M1S03] Ex 1 - Use Let, Const e Array

        Implemente uma função "procuraMinMax" que receba como parâmetro um array (numérico) e identifique o menor e o maior valor do mesmo.
        Imprima no console estes valores ou "Não é possível encontrar" quando não for possível.
        Teste a função com as seguintes entradas:
        [56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]
        []
        [1]
        [1, -1]
        null
        [-2,-2,-2,-2]
        [20,10, 30]

        Obs.: Use let e const para declarar variáveis se for necessário.
        Extra: Faça com uma arrow function.
*/

let array0 = [56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]
let array1 = []
let array2 = [1]
let array3 = [1, -1]
let array4 = null
let array5 = [-2,-2,-2,-2]
let array6 = [20,10, 30]

function procuraMinMax(array) {
    console.log(`Analisando [ ${array} ] ...`)
    if (!array == false && array.length > 0 ) {
        console.log(`Menor valor do array: ${Math.min(...array)}`)
        console.log(`Maior valor do array: ${Math.max(...array)}`)
        console.log('')
    }
    else {
        console.log("Não é um array.")
        console.log('')
    } 
}

procuraMinMax(array0)
procuraMinMax(array1)
procuraMinMax(array2)
procuraMinMax(array3)
procuraMinMax(array4)
procuraMinMax(array5)
procuraMinMax(array6)
