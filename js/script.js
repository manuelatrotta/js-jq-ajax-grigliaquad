//Griglia 6x6, ad ogni click sul quadrato parte una richiesta AJAX che prende un numero random da 1 a 9.
//Se è <= 5 il quadrato diventa giallo,
//se è > di 5 il quadrato diventa verde.
//Il numero ottenuto appare al centro del quadrato.
//I quadrati fateli prima a mano e poi con javascript

//function cube () {
//  var cella;
//  var riga;

//  for(var i = 1; i <= 6; i++) {
//    riga = $('<tr>');
//
//    for(var j=1; j <= 6; j++) {
//      cella = $('<td>');
//      cella.html(i*j);
//      riga.append(cella);
//    }
//    $('#cella').append(riga);
//  }

$(document).ready(function() {

    for (var i = 0; i < 36; i++) {
      var cella = $('.template .cella').clone();
      $('.container').append(cella);
    }

  $('.cella').on('click',
    function() {
     var cliccato = $(this);
      $.ajax({
        url:"https://flynn.boolean.careers/exercises/api/random/int",
        method: "GET",
        success: function(data, stato){
          console.log(data);
          cliccato.text(data.response);
          if (data.response<=5){
            cliccato.addClass('yellow');
          }else {
            cliccato.addClass('green');
          }
          console.log(data.response);
          },
          error:function (richiesta, stato, errore){
            alert('errore' + errore);
          }
      });
  });
});
//if( numberRandom <= 5) {
//  $('.cella').addClass('yellow');
//}else{
//  $('cella').addClass('green');
