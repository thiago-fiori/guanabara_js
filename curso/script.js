function welcome(){
  alert("Bem vindo ao site do Thiaguin do TI");
  confirm("este site pode te deixar maluco");
  prompt("Como você se vê em 10 anos ?")
}

function mudaCor(cor){
  var elemento = document.getElementById("titulo");
  elemento.style.color = cor;
}

function limpa(){
  var elemento = document.getElementById("titulo");
  elemento.style = "clear";
}
