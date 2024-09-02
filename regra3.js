document.getElementById("calcular").addEventListener("click", () => {
  var valor1 = parseFloat(document.getElementById("valor1").value);
  var valor2 = parseFloat(document.getElementById("valor2").value);
  var valor3 = parseFloat(document.getElementById("valor3").value);

  if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || valor1 === 0) {
    alert("Por favor, insira valores válidos nos campos.");
    return;
  }

  var resultado = (valor2 * valor3) / valor1;

  document.getElementById("resultado").value = resultado;
});
