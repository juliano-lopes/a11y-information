console.log("rodando exemplo 16 de javascript");
var formulario = document.getElementById("formulario-de-envio-de-mensagens");
formulario.onsubmit = validarDados;
function validarDados() {
  var campos = formulario.querySelectorAll("input, textarea");
  var areaDeMensagens = document.getElementById("area-de-mensagens");
  var camposComErro = [];
  var contadorErros = 0;
  for (var contador = 0; contador < campos.length; contador++) {
    if (campos[contador].value == "") {
      camposComErro[contadorErros] = campos[contador];
      contadorErros++;
    }
  }
  if (camposComErro.length > 0) {
    //alert("existem " + camposComErro.length + " erros no formulário");
    var erros = "<h2 id='titulo-area-de-mensagens' tabindex='-1'>Existem " + camposComErro.length + " erros no formulário</h2>";
    erros += "<p id='texto-area-de-mensagens'>Corrija os campos a seguir:</p>";
    erros += "<ul>";
    for (contadorErros = 0; contadorErros < camposComErro.length; contadorErros++) {
      erros += "<li><a onclick='removerErro(this);' href='#" + camposComErro[contadorErros].id + "'>O campo " + camposComErro[contadorErros].id + " não pode ficar vazio</a></li>";
    }
    erros += "</ul>";
    areaDeMensagens.innerHTML = erros;
  } else {
    //alert("não existem erros");
    var confirmacao = "<h2 id='titulo-area-de-mensagens' tabindex='-1'>Confirmação de envio de dados</h2>";
    confirmacao += "<p id='texto-area-de-mensagens'>Verifique se os dados a seguir foram preenchidos corretamente:</p>";
    confirmacao += "<ul>";
    for (var contador = 0; contador < campos.length; contador++) {
      confirmacao += "<li><a href='#" + campos[contador].id + "'>" + campos[contador].id + ": " + campos[contador].value + "</a></li>";
    }
    confirmacao += "</ul>";
    confirmacao += "<button onclick='enviarFormulario();'>Confirmar dados preenchidos e enviar</button>";
    areaDeMensagens.innerHTML = confirmacao;

  }
  areaDeMensagens.setAttribute("aria-labelledby", "titulo-area-de-mensagens");
  areaDeMensagens.setAttribute("aria-describedby", "texto-area-de-mensagens");

  areaDeMensagens.querySelector("h2").focus();
  return false;
}
function enviarFormulario() {
  alert("Agradecemos pela mensagem!");
  formulario.submit();
}
function removerErro(linkClicado) {
  linkClicado.parentNode.parentNode.removeChild(linkClicado.parentNode);

}