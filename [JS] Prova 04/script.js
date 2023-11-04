function calculaAreaRetangulo(largura, altura) {
    var area = largura * altura;
    return area;
}

function calcular() {
    var larguraInputUsuario = document.getElementById("largura");
    var alturaInputUsuario = document.getElementById("altura");
    var resultadoCalculoAreaRetangulo = document.getElementById("resultado");
    var largura = parseFloat(larguraInputUsuario.value);
    var altura = parseFloat(alturaInputUsuario.value);
    var areaRetangulo = calculaAreaRetangulo(largura, altura);

    resultadoCalculoAreaRetangulo.textContent = areaRetangulo;
}