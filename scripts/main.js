 $('document').ready(function(){
  draw();
  function draw(){
    for( i=1 ; i<=9 ; i++){
        $('.game').append('<div id="cell-'+i+'" class="cell"></div>');
    }  
  }
     $(".main-control__item").click(function(){
        var nombres = [];
     var cont = '';
       var f='';
    var x;

    for (i = 0; i < 2; i++) {
      if(i==0){
        x = prompt("Ingresa tu nombre Participante N°1:", "");
        nombres.push(x);
      }
      else{
        x = prompt("Ingresa tu nombre Participante N°2:", "");
        nombres.push(x);
      }
    }

    for (i = 0; i < 2; i++) {
        cont += nombres[i] + "  ";
    }
     var ale = cont[Math.floor(Math.random()*cont.length)];
    alert(ale);
     });
});