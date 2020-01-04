$("document").ready(function(){
    var navbarHeight = $('header').outerHeight();
    $(window).on('scroll', function(){
        if($(window).width()>1170){
            if(window.scrollY > navbarHeight){
                $("#otherheader").css('top', '0px');
            } else {
                $("#otherheader").css('top', '-70px');
            }
        }
    });

});