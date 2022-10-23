/*
[M1S03] Ex 2 - Mensagem Arrow
Em um arquivo app.js (incluído em index.html) faça o seguinte:

No documento js faça uma arrow function para retornar uma mensagem (string) de "Olá, Mundo!".

Armazene esta arrow function em uma constante (const) de nome mensagemOla.

Chame a função mensagemOla e exiba o retorno desta função no console.

Ajuste a função mensagemOla para que receba um parâmetro nome e retorne a mensagem "Olá, [nome]!".

Exemplo:

mensagemOla("Mariana");
// "Olá, Mariana!"
Ao final, devemos ter uma função que monta uma mensagem de olá customizada com o nome informado por parâmetro.
*/
const nome = prompt("Digite seu nome: ")
const mensagemOla = (nome) => `Olá, ${nome}!`;

console.log(mensagemOla(nome))