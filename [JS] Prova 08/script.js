/*

[JS-A08]Crie uma função em JavaScript que receba como parâmetro um objeto 
JSON contendo as informações de um livro, como título, autor e número de páginas. 
A função deve imprimir no console as informações do livro em uma mensagem formatada. 



Exemplo de objeto JSON:

{

"titulo": "A Metamorfose",

"autor": "Franz Kafka",

"paginas": 100

}



Exemplo de mensagem formatada a ser impressa no console:

O livro A Metamorfose, escrito por Franz Kafka, tem 100 páginas.

*/

const livro = {
    "titulo": "A Metamorfose",
      "autor": "Franz Kafka",
     "paginas": 100
};

function informacoesLivro(livro){
    const {titulo, autor, paginas} = livro;
    console.log(`O livro ${titulo}, escrito por ${autor}, tem ${paginas} páginas.`)
};

informacoesLivro(livro);