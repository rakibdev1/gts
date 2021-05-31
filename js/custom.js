$(function(){
    $(window).on('scroll', function(){

        var scrolling = $(this).scrollTop();      
        if(scrolling > 500){
          $('.top-icon').fadeIn(500)
        }
        else{
            $('.top-icon').fadeOut(500)
        }
      });
    $('.top-icon').click(function(){
        $('html,body').animate({scrollTop:0},600)
    });
    
});