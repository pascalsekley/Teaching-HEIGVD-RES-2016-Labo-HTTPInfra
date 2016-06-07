$(function(){
  console.log("Loading currencies");

  function loadCurrencies(){
    $.getJSON( "/api/students/", function( currency){
      console.log(currency);
      var message = "No currency here";
      if ( currency.length > 0 ){
        message = currency[0].randCurrency.code + ":   " + currency[0].randCurrency.name;
      }
      $(".intro-lead-in").text(message);
   });
 };

 loadCurrencies();
 setInterval(loadCurrencies, 2000);


});