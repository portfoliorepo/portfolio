$(function() {

	//fixed-nav
	function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 50,
            header = document.querySelector(".fixed-nav"),
            logo = document.querySelectorAll(".logo a");
        if (distanceY > shrinkOn) {
            classie.add(header,"smaller");
            classie.remove(header,"animated");
            logo[0].removeAttribute("class");
            logo[0].setAttribute("class", "hidden");
            logo[1].removeAttribute("class");
            logo[1].setAttribute("class", "unhide");
        } else {
            if (classie.has(header,"smaller")) {
                classie.remove(header,"smaller");
                classie.remove(header,"animated");
                logo[0].removeAttribute("class");
                logo[0].setAttribute("class", "unhide");
                logo[1].removeAttribute("class");
                logo[1].setAttribute("class", "hidden");
            }
        }
    });
}
window.onload = init();

	var cbpAnimatedHeader = (function() {

    var docElem = document.documentElement,
        header = document.querySelector( '.fixed-nav' ),
        didScroll = false,
        changeHeaderOn = 50;

    function init() {
        window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 250 );
            }
        }, false );
    }

    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn && $(window).width() > 1024) {//1023px
            classie.add( header, 'cbp-af-header-shrink' );
            classie.add( document.querySelector( '.fixed-nav .main_nav > ul' ), 'cbp-af-nav-shrink' );
            if($('.fixed-nav').find('#sb-search').length==1) {
                classie.add(document.querySelector('.fixed-nav #sb-search'), 'cbp-af-search-shrink');
            }
            classie.add( document.querySelector( '.fixed-nav .login_box' ), 'cbp-af-login-shrink' );
        }
        else {
            classie.remove( header, 'cbp-af-header-shrink' );
            classie.remove( document.querySelector( '.fixed-nav .main_nav > ul' ), 'cbp-af-nav-shrink' );
            if($('.fixed-nav').find('#sb-search').length==1){
                classie.remove( document.querySelector( '.fixed-nav #sb-search' ), 'cbp-af-search-shrink' );
            }
            classie.remove( document.querySelector( '.fixed-nav .login_box' ), 'cbp-af-login-shrink' );
        }
        didScroll = false;
    }

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    init();

})();
/********************************Search********************************/

new UISearch( document.getElementById( 'sb-search' ) );




    /************************************************************************/



//Navigation

$("#line-1").click(function(e){
    e.preventDefault();
    $("#line-2, #line-3").removeClass("active");
    $(this).addClass("active");
});
$("#line-2").click(function(e){
    e.preventDefault();
    $("#line-1, #line-3").removeClass("active");
    $(this).addClass("active");
});
$("#line-3").click(function(e){
    e.preventDefault();
    $("#line-1, #line-2").removeClass("active");
    $(this).addClass("active");
});
$("#line-4").click(function(e){
    e.preventDefault();
    $("#line-1, #line-2, #line-3").removeClass("active");
    $(this).addClass("active");
});
$("#line-5").click(function(e){
    e.preventDefault();
    $("#line-1, #line-2, #line-3, #line-4").removeClass("active");
    $(this).addClass("active");
});
$("#line-6").click(function(e){
    e.preventDefault();
    $("#line-1, #line-2, #line-3, #line-4, #line-5").removeClass("active");
    $(this).addClass("active");
});
$("#line-7").click(function(e){
    e.preventDefault();
    $("#line-1, #line-2, #line-3, #line-4, #line-5, #line-6").removeClass("active");
    $(this).addClass("active");
});


//mobile-menu open menu active

    $(".click_active1").click(function(e){
        e.preventDefault();
        $(".click_active1").removeClass('active');
        $('.li_wrapper').removeAttr('style');
        $(this).addClass('active');

        if ($(this).parent().parent().hasClass('li_wrapper')){
            $(this).parent().parent().css('background-color' , '#8fc148');
        }
    });
    $(".click_active2").click(function(e){
        e.preventDefault();
        $(".click_active2").removeClass('active');
        $('.li_wrapper').removeAttr('style');
        $(this).addClass('active');

        if ($(this).parent().parent().hasClass('li_wrapper')){
            $(this).parent().parent().css('background-color' , '#8fc148');
        }
    });
    $(".click_active3").click(function(e){
        e.preventDefault();
        $(".click_active3").removeClass('active');
        $('.li_wrapper').removeAttr('style');
        $(this).addClass('active');

        if ($(this).parent().parent().hasClass('li_wrapper')){
            $(this).parent().parent().css('background-color' , '#8fc148');
        }
    });
    $(".click_active4").click(function(e){
        e.preventDefault();
        $(".click_active4").removeClass('active');
        $('.li_wrapper').removeAttr('style');
        $(this).addClass('active');

        if ($(this).parent().parent().hasClass('li_wrapper')){
            $(this).parent().parent().css('background-color' , '#8fc148');
        }
    });

    $(".click_active5").click(function(e){
        e.preventDefault();
        $(".click_active5").removeClass('active');
        $('.li_wrapper').removeAttr('style');
        $(this).addClass('active');

        if ($(this).parent().parent().hasClass('li_wrapper')){
            $(this).parent().parent().css('background-color' , '#8fc148');
        }
    });
    $(".click_active6").click(function(e){
        e.preventDefault();
        $(".click_active6").removeClass('active');
        $('.li_wrapper').removeAttr('style');
        $(this).addClass('active');

        if ($(this).parent().parent().hasClass('li_wrapper')){
            $(this).parent().parent().css('background-color' , '#8fc148');
        }
    });
    $(".click_active7").click(function(e){
        e.preventDefault();
        $(".click_active7").removeClass('active');
        $('.li_wrapper').removeAttr('style');
        $(this).addClass('active');

        if ($(this).parent().parent().hasClass('li_wrapper')){
            $(this).parent().parent().css('background-color' , '#8fc148');
        }
    });




 /************************** Accordion *****************************/

    $(".u-vmenu").vmenuModule({
        Speed: 200,
        autostart: true,
        autohide: true
    });

/*******************************************************/

// animate slide-line on click



//search_mobile
    if (window.matchMedia("(max-width: 1200px)").matches) {
        $('.big_search').removeAttr('id');
        $('.small_search').attr('id', 'sb-search');

        $('body').on('click','#sb-search',function(e){
            e.preventDefault();
            if($(this).hasClass('sb-search-open')==false){
                $('.small_search').addClass("sb-search-open");
                $('.sb-search-input').focus();
            }else{
                $('.small_search').removeClass("sb-search-open");
                $('.sb-search-input').val('');
            }
        });
    }


$(document).on('mouseenter', '.box_menu > li > a', function () {
            $('.box_menu li.slide-line').css("visibility", "visible");
        var $this = jQuery(this),
            // get offset of hovered this
            offset = $this.offset(),
            $active = $this.parent().find("a.active"),
            //find the offset of the wrapping div  
            offsetBody = jQuery('.box_nav').offset();
  
        // GSAP animate to clicked menu item
        TweenMax.to(jQuery('.box_menu .slide-line'), 0.5, {
          css:{
            width: $this.outerWidth()+'px',
            left: (offset.left-offsetBody.left)+'px'
          },
          overwrite:"all",
          // easing for overshoot
          ease:Back.easeOut
        });
  
}).on('mouseleave', '.box_menu > li', function () {
  
        var $this = jQuery(this),
            // get the active menu selector
            $active = $this.parent().find("a.active"),
            // get offset of active menu item
            offset = $active.offset(),
            //find the offset of the wrapping div  
            offsetBody = jQuery('.box_nav').offset();
  
        // GSAP animate to clicked menu item
        TweenMax.to(jQuery('.box_menu .slide-line'), 0.5, {
          css:{
            width: $active.outerWidth()+'px',
            left: (offset.left-offsetBody.left)+'px'
          },
          overwrite:"all",
          ease:Power4.easeInOut
        });
    });


    $('.box_menu').append('<li class="slide-line"></li>');
    if (window.matchMedia("(min-width: 1201px)").matches) {
        $('.box_menu li.slide-line').css("visibility", "hidden");
    }



    //mobile-menu display block

    $('#nav-icon3').click(function(){
        $(this).toggleClass('open');
        if($(this).hasClass("open")) {
            $(".mobile-menu").css({'display' : 'block', 'overflow-y' : 'auto'});
            $('body').css('overflow' , 'hidden');
            $('.first_section, .box_menu li.slide-line').css('display' , 'none');
            $(".mobile-menu").animate({
                'left' : '0px'
            },500);
            $(".small_nav").animate({
                'left' : '0px'
            },500);
        } else {
            $(".small_nav").animate({
                'left' : '1200px'
            },500,function(){$(".mobile-menu").css('display' , 'none');});
            $('body').removeAttr('style');
            $('.first_section').css('display' , 'block');
            $('body').css('overflow-x' , 'hidden');

        }

    });

    $(window).resize(function(){
        if (window.matchMedia("(max-width: 1200px)").matches) {
            $('.box_menu li.slide-line').css('display' , 'none');
        } else if (window.matchMedia("(min-width: 1201px)").matches) {
            $('.box_menu li.slide-line').css('display' , 'block');
        }
    });

});

