/*
[M1S03] Ex 6 - Palíndromo

Um palindrome (palíndromo), segundo o dicionário Houaiss,
"diz-se de frase ou palavra que se pode ler, indiferentemente, da esquerda para direita ou vice-versa", como por exemplo: osso, Ana, radar.

Ou seja, é uma palavra que quando lida de trás pra frente tem o mesmo significado.

Implemente uma função em JavaScript que receba uma string como parâmetro e retorne se determinada palavra é um palindromo ou não.

Exemplo:

const teste1 = verificaPalindromo("ana");
// true

const teste2 = verificaPalindromo("julia");
// false
Obs.: Use let e const para declarar variáveis se for necessário.
Extra: Faça com uma arrow function.
*/

const verificaPalindromo = texto => {
    if (typeof texto !== 'string') {
      console.log('Texto inválido.');
      return false;
    }
    return [...texto].reverse().join('') === texto;
  }
  
  const teste1 = verificaPalindromo("marrocos");
  console.log('marrocos', teste1);
  
  const teste2 = verificaPalindromo("joao");
  console.log('joao', teste2);