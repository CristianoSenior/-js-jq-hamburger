// Creare un hamburger menu con l’utilizzo di Html, Css e JavaScript/jQuery
// prendo lo zip che dopo vi allego e senza toccare l’HTML faccio funzionare l’hamburger menù;
// primo click, appare il menù;
// se cliccko che è già visibile, invece scompare.

var hamburgermenu = $(".hamburger-menu");
var barrette = $(".fas.fa-bars");
var chiudi = $(".fas.fa-times")
barrette.click(
  function(){
    hamburgermenu.show();
  }
)

chiudi.click(
  function(){
    hamburgermenu.hide();
  }
)
