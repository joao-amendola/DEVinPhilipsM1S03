/*
[M1S03] Ex 4 - Mesclando Objetos

Para exercitarmos spread com objetos:
Em um arquivo app.js incluído em index.html escreva uma função de nome mesclaObjetos, que aceita dois objetos como parâmetro e retorna um novo objeto que contem todos os pares chave-valor do primeiro e do segundo objetos.

Exemplo:

const objUm = { a: 1, b: 2 };
const objDois = { c: 3, d: 4 };
const novoObjeto = mesclaObjetos(objUm, objDois);
console.log(novoObjeto);
// { a: 1, b: 2, c: 3, d: 4 }
Extra: Faça utilizando arrow function.
*/

const objUm = { a: 1, b: 2 };
const objDois = { c: 3, d: 4 };
const mesclaObjetos = (objeto1, objeto2) => ({ ...objeto1, ...objeto2 })
const novoObjeto = mesclaObjetos(objUm, objDois);
console.log(novoObjeto);
// { a: 1, b: 2, c: 3, d: 4 }