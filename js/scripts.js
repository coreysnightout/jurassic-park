$(document).ready(function(){
  $('.parallax').parallax();

  $("a").click(function(){
    $("#dennis").fadeIn(2000);
    $("#dennis").delay(1000).fadeOut(2000);
  });
});
