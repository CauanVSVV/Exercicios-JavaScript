/*

[JS-A10]Crie uma função em JavaScript que divida um número por zero. 
Utilize o bloco de código try/catch para capturar o erro e exibir uma 
mensagem personalizada de erro para o usuário.

*/

const numUsuario = 0;

function divideZero(num) {
    try {
        if(num === 0) {
            throw new Error("A divisão por 0 não é possivel");
        }

        const resultado = 2 / num;
        return resultado;
    } catch (error) {
        return error.message;
    }
};

const resultado = divideZero(numUsuario);
console.log(resultado);