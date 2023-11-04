/*

[JS-A09]Considere o seguinte array de objetos representando
 informações sobre produtos de uma loja:


[  

    { nome: "Camisa", preco: 50.0 },

    { nome: "Calça", preco: 80.0 },

    { nome: "Jaqueta", preco: 150.0 },

    { nome: "Meia", preco: 10.0 }

 ]



Escreva uma função em JavaScript que calcule o preço total dos produtos desse array 
utilizando uma das funções agregadoras aprendidas em sala de aula.

A função deve se chamar calcularTotal e receber o array como parâmetro. O resultado deve ser 
retornado com duas casas decimais.

*/

const produtos = [
    { nome: "Camisa", preco: 50.0 },
    { nome: "Calça", preco: 80.0 },
    { nome: "Jaqueta", preco: 150.0 },
    { nome: "Meia", preco: 10.0 }
];

function calcularTotal(produtos) {
    const total = produtos.reduce((acumulador, produto) => {
        return acumulador + produto.preco;
    }, 0);
    return total.toFixed(2);
};

const precoTotal = calcularTotal(produtos);
console.log("O preço total é: " + precoTotal);