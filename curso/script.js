function welcome(){
  alert("Bem vindo ao site do Thiaguin do TI");
  confirm("este site pode te deixar maluco");
  prompt("Você sabe qual jogo é este ?")
}

function mudaCor(cor){
  var elemento = document.getElementById("titulo");
  elemento.style.color = cor;
}

function limpa(){
  var elemento = document.getElementById("titulo");
  elemento.style = "clear";
}
