function inicio(){
  var a = document.getElementById('area');
  a.addEventListener('click', evento);
  a.addEventListener('mouseenter', entrou);
  a.addEventListener('mouseout', saiu);
}

function clica(){
  var p1 = document.getElementById('azul');
  p1.style.color = 'blue';
  var p2 = document.getElementById('amarelo');
  p2.style.color = 'yellow';
  var p3 = document.getElementById('verde');
  p3.style.color = 'green';
  var d  = document.querySelector('p#verde2');
  d.style.color = 'lightgreen';
}

function evento(){
  var elemento = document.getElementById('area');
  elemento.innerText = "você clicou";
  elemento.style.background = 'transparent';
  elemento.style.border = '1px solid lightblue';
}

function entrou(){
  var elemento = document.getElementById('area');
  elemento.innerText = "entrou";
}

function saiu(){
  var elemento = document.getElementById('area');
  elemento.innerText = "saiu";
  elemento.style.background = 'mediumspringgreen';
}

//Detran
function multar(){
  var elemento  = document.getElementById('velocidade'); //recebendo a velocidade
  var aviso = document.getElementById('aviso'); //selecionando o texto de multa
  var speed = Number(elemento.value);//convertendo o input para int
  if (speed > 60) {
    aviso.innerText = "Multado";
    aviso.style.color = 'red';
  } else {
    aviso.innerText = "Sem multa";
    aviso.style.color = 'lightgreen';
  }
}

//hora do dia
function carregar(){
  var msg = document.getElementById('msg');
  var img = document.getElementById('imagem');
  var data = new Date();
  //hora = data.getHours();
  hora = 19;
  msg.innerHTML =  `Agora são ${hora} horas.`;
  if (hora >= 0 && hora <12) {
    //bom dia
    img.src='img/manha.png';
    document.body.style.background = 'deepskyblue';
  } else if (hora >= 12 && hora < 18) {
    //boa tarde
    img.src='img/tarde.png';
    document.body.style.background = '#e37514';
  } else {
    //boa noite
    img.src='img/noite.png';
    document.body.style.background = '#090f2d';
  }
}
