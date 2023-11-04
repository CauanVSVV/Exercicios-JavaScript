function maioridade(){
    let idade_usuario = prompt("Digite a sua idade: ");
    if (idade_usuario < 18){
        alert("Você é menor de idade.");
    } else if (idade_usuario == 18){
        alert("Você acabou de atingir a maioridade.");
    } else {
        alert("Você é maior de idade.");
    }
}