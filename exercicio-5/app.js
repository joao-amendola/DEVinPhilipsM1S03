/*
[M1S03] Ex 5 - Parâmetros Infinitos
Para treinar os conceitos de Rest.

Crie dois arquivos:
- index.html
- app.js

No arquivo apps.js, utilizando o operador Rest, crie uma função que receba como parâmetro uma quantidade indefinida de variáveis inteiras (números inteiros).

A função deve retornar a soma de todos os parâmetros (...).
Após executada a função, o resultado deve ser exibido no console.

Exemplo:

const resultado = somaTudo(1, 2, 3, 4);
console.log(resultado);
// resultado deve ser 10
Obs.: Em index.html deve ser incluído o arquivo app.js, para rodar o script e executarmos a função.
*/

function somaTudo(...numeros) {
    let acumulador = 0;
    for (let i = 0; i < numeros.length; i++) {
      acumulador += numeros[i];
    }
    return acumulador;
  }

const resultado = somaTudo(1, 2, 3, 4);
console.log(resultado);