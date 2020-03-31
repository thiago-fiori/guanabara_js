function welcome(){
  alert("Bem vindo ao site do Thiaguin do TI");
  confirm("este site pode te deixar maluco");
  var nome = prompt("Qual seu nome ?");
  alert("Bem vindo,  " + nome);
}

function mudaCor(cor){
  var elemento = document.getElementById("titulo");
  elemento.style.color = cor;
}

function limpa(){
  var elemento = document.getElementById("titulo");
  elemento.style = "clear";
}
