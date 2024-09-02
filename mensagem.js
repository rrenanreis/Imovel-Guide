document.getElementById("mensagem-cpf").addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, "");
  if (value.length > 11) value = value.slice(0, 11);

  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

  e.target.value = value;
});

document.getElementById("mensagem-telefone").addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, "");

  if (value.length > 11) value = value.slice(0, 11);

  if (value.length > 10) {
    value = value.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  } else if (value.length > 5) {
    value = value.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  } else if (value.length > 2) {
    value = value.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
  } else if (value.length > 0) {
    value = value.replace(/^(\d{0,2})/, "($1");
  }

  e.target.value = value;

  if (e.target.value.length === 1 && e.target.value === "(") {
    e.target.value = "";
  }
});

document.getElementById("mensagem-btn").addEventListener("click", () => {
  var valorCpf = document.getElementById("mensagem-cpf").value;
  var valorTelefone = document.getElementById("mensagem-telefone").value;
  var valorAssunto = document.getElementById("mensagem-assunto").value;
  var alertaMensagem =
    "Mensagem enviada com sucesso! " +
    " CPF: " +
    valorCpf +
    " Telefone: " +
    valorTelefone +
    " Assunto: " +
    valorAssunto;
  alert(alertaMensagem);
});
