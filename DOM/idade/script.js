function verificar(){
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById('txtano');
  var res = document.getElementById('res');
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente');
  } else {
    var fsex = document.getElementsByName('radsex');
    var idade = ano - Number(fano.value);
    var genero = '';
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');
    if (fsex[0].checked) {
      genero = 'homem';
      if (idade >= 0 && idade < 3) {
        //bebe
        img.setAttribute('src', 'img/bebe-m.png');
      } else if(idade >= 3 && idade < 15){
        //crianca
        img.setAttribute('src', 'img/crianca-m.png');
      } else if(idade >= 15 && idade < 30){
        //jovem
        img.setAttribute('src', 'img/jovem-m.png');
      } else {
        //adulto
        img.setAttribute('src', 'img/adulto.png');
      }
    } else {
      genero = 'mulher';
      if (idade >= 0 && idade < 3) {
        //bebe
        img.setAttribute('src', 'img/bebe-f.png');
      } else if(idade >= 3 && idade < 15){
        //crianca
        img.setAttribute('src', 'img/crianca-f.png');
      } else if(idade >= 15 && idade < 30){
        //jovem
        img.setAttribute('src', 'img/jovem-f.png');
      } else {
        //adulto
        img.setAttribute('src', 'img/adulta.png');
      }
    }
    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
