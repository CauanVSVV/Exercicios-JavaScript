function calcularMaximoMinimo() {
    const entradaUsuario = document.getElementById("numeros").value;
    const entradaFormatada = entradaUsuario.replace(/\s/g, "");
    const numerosUsuario = entradaFormatada.split(",").map(numero => parseInt(numero.trim(), 10));
  
    if (numerosUsuario.length === 0 || isNaN(numerosUsuario[0])) {
      document.getElementById("resultado").innerHTML = "<br>A lista está <strong>vazia</strong>, digite os numeros.";
      return;
    }
  
    let valorMaximo = numerosUsuario[0];
    let valorMinimo = numerosUsuario[0];
  
    for (let i = 1; i < numerosUsuario.length; i++) {
      if (numerosUsuario[i] > valorMaximo) {
        valorMaximo = numerosUsuario[i];
      }

      if (numerosUsuario[i] < valorMinimo) {
        valorMinimo = numerosUsuario[i];
      }
    }
    document.getElementById("resultado").innerHTML = "Maior valor: <strong>" + valorMaximo + "</strong> <br><br>Menor valor: <strong>" + valorMinimo + "</strong>";
}