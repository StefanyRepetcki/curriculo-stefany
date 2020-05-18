
function scrollTopAnimated() { 
    var body = $("html, body");
    body.stop().animate({scrollTop:0}, 500, 'swing');
} 
$(window).scroll(function(){
    if( $(window).scrollTop() > 200 ) {
      $(".botaoparavoltar").css("display","block"); 
    }else{
      $(".botaoparavoltar").css("display","none"); 
    }
});