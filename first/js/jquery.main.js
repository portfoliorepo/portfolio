$(window).trigger('resize').trigger('scroll');
$(document).ready(function(){
  
	$(window).resize(function(){
		if($(window).width()>751){
			$('nav.second_nav ul.second_menu li.slide-line2').css("top", "30px");
			$('nav.second_nav ul.second_menu li.slide-line2').css("left", "121px");
		}
		else{
			$('nav.second_nav ul.second_menu li.slide-line2').css("top", "78px");
			$('nav.second_nav ul.second_menu li.slide-line2').css("left", "121px");
		}
	});

  $(window).scroll(function() {
    $(".slideup").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 800) {
          $(this).addClass("fadeInUp");
        }
    });
  });

  $(window).scroll(function() {
    $(".slideup-low").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 1200) {
          $(this).addClass("fadeInUp");
        }
    });
  });

	$(".close_button").animated("fadeIn");

	$("#line-1").click(function(e){
		e.preventDefault();
		$("#line-2").removeClass("active");
		$(this).addClass("active");
	});
	$("#line-2").click(function(e){
			e.preventDefault();
		$("#line-1").removeClass("active");
		$(this).addClass("active");
	});

	function heightDetect(){
		// if($(window).width()>480){
			$(".header_bg").css("height", ($(window).height())*1-26);
		// }
		// else if($(window).width()<480){
		// 	$(".header_bg").css("height", ($(window).width())*1-217);
		// }
		// else{
		// 	$(".header_bg").css("height", "263px");
		// }
	};
	heightDetect();
	$(window).resize(function(){
		heightDetect();
	});
/*****************************FancyBox*****************************/
$('.fancybox_img').fancybox({
		width		: '100%',
		height		: '100%',
		autoCenter : true,
		fitToView	: true,
    tpl: {
        closeBtn: '<div class="close_button medien_close orange_close"><a href="medien.html"><img src="img/x-orange.svg" alt="X" /></a></div>'
    },
    openMethod : 'slidebottomIn',
    openSpeed : 1000,
    closeMethod : 'slidebottomOut',
    closeSpeed : 400,
    loop: false,
    // openEffect  : 'none',
    // closeEffect : 'none',
    nextEffect  : 'none',
    prevEffect  : 'none',
    padding     : 0,
    margin      : 50
   });

    if (window.matchMedia('(min-device-width : 375px)').matches && window.matchMedia('(max-device-width : 667px)').matches) {
        console.log('aaa');
        $('.disk_wrapper').removeAttr('href');
        $('.disk_wrapper').removeClass('fancybox_audio');
        $('.foto_wrapper > a').removeAttr('href');
        $('.foto_wrapper > a').removeClass('fancybox_img');
        $(".disk_wrapper").click(function(){
					$('body').find('.hidden_fancy').css("display", "block");
					$('body').css('overflow', 'hidden');
					// $('.diskografie').css('overflow', 'hidden');
					
				});
				$(".hidden_close").click(function(){
					$('.hidden_fancy').css('display', 'none');
					$('body').css('overflow', 'unset');
					// $('.diskografie').css('overflow', 'unset');
				});
    } else {

    	$(".fancybox_audio").fancybox({
				padding: 0,
				margin     : 0,
		    autoCenter : true,
		    tpl: {
		        closeBtn: '<div class="close_button orange_close"><a href="diskografie.html"><span>close</span> <img src="img/x-orange.svg" alt="X" /></a></div>'
		    },
				fitToView	: true,
				width		: '100%',
				height		: '100%',
				autoSize	: false,
				closeClick	: false,
				helpers : {
		        overlay : {
		            css : {
		                'background' : 'rgba(255, 255, 255, 0.95)',
		                'transition' : 'all .5s'
		            }
		        }
		    },
		    openMethod : 'slidebottomIn',
		    openSpeed : 1000,

		    closeMethod : 'slidebottomOut',
		    closeSpeed : 400,
		    loop: false
			});

		// 	if ($('.fancybox-overlay').css('display', 'block')){

		// 	$(window).scroll(function() {
		//     $(".slideup").each(function(){
		//       var pos = $(this).offset().top;

		//       var winTop = $(window).scrollTop();
		//         if (pos < winTop + 800) {
		//           $(this).addClass("fadeInUp");
		//           $(this).css('visibility', 'visible');
		//         }
		//     });
		//   });
		// }

  }
/**********************************************/


	$('.dropdown-toggle').dropdown();

	$("a[href='#s_landcontent']").mPageScroll2id();
	$("a[href='#s_agendacontent']").mPageScroll2id();
	$("a[href='#s_biografiecontent']").mPageScroll2id();
	$("a[href='#s_repertoirecontent']").mPageScroll2id();
	$("a[href='#s_diskografiecontent']").mPageScroll2id();
	$("a[href='#s_mediencontent']").mPageScroll2id();

	$(".nav_button").click(function(){
		$(this).next().slideToggle().css("opacity", "1");
	});

	$(".close_button a").click(function(e){
		e.preventDefault();
		$(this).closest(".nav_wrapper").slideToggle().css("opacity", "0");
		// $( ".main_social" ).slideDown( 4000, function() {
	 //  });
	});

/**********************Show div based on checkbox select**************/
$('.custom_check').each(function(){
    $(this).hide().after('<div class="class_checkbox" />');

});

// $('.class_checkbox').on('click', function(){
//     $('.class_checkbox').toggleClass('checked').prev().prop('checked',$('.class_checkbox').is('.checked'));
// });

 $('.custom_check').click(function(){
        if($(this).attr("value")=="konzerte"){
            $(".konzerte").toggle();
            $(this).parent().toggleClass('label_input');
            $(this).siblings('.class_checkbox').toggleClass('checked');
        }
        if($(this).attr("value")=="vierhandig"){
            $(".vierhandig").toggle();
            $(this).parent().toggleClass('label_input');
            $(this).siblings('.class_checkbox').toggleClass('checked');
        }
        if($(this).attr("value")=="zwei"){
            $(".zwei").toggle();
            $(this).parent().toggleClass('label_input');
            $(this).siblings('.class_checkbox').toggleClass('checked');
        }
        if($(this).attr("value")=="kammer"){
            $(".kammer").toggle();
            $(this).parent().toggleClass('label_input');
            $(this).siblings('.class_checkbox').toggleClass('checked');
        }
    });


/******sliding underline HTML*********/

$('.box_menu').append('<li class="slide-line"></li>');
$('.box_menu li.slide-line').css("visibility", "hidden");

// $('.slide-line').css({'left': $(".box_menu li").parent().find("a.active").offset().left-$('.box_nav').offset().left});
// $('.slide-line').css({'width': $(".box_menu li").parent().find("a.active").outerWidth()-3+'px'});

       //  var $this = jQuery(".box_menu li"),
       //      // get the active menu selector
       //      $active = $this.parent().find("a.active"),
       //      // get offset of active menu item
       //      offset = $active.offset(),
       //      //find the offset of the wrapping div  
       //      offsetBody = jQuery('.box_nav').offset();
  
       //  // GSAP animate to clicked menu item
       // $('.box_menu .slide-line').css({
       //      width: $active.outerWidth()+'px',
       //      left: (offset.left-offsetBody.left)+'px'
       //    });

$('.second_menu').append('<li class="slide-line2"></li>');
$('.second_bio_menu').append('<li class="slide-line3"></li>');

// animate slide-line on click
$(document).on('mouseenter', '.box_menu li a', function () {
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
  
}).on('mouseleave', '.box_menu li', function () {
  
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

	$(document).on('mouseenter', '.second_menu li a', function () {
  
        var $this = jQuery(this),
            // get offset of hovered this
            offset = $this.offset(),
            //find the offset of the wrapping div  
            offsetBody = jQuery('.second_menu').offset();
  
        // GSAP animate to clicked menu item
        TweenMax.to(jQuery('.second_menu .slide-line2'), 0.5, {
          css:{
            //width: $this.outerWidth()+'px',
            left: (offset.left-offsetBody.left)+101+'px',
            top: (offset.top-offsetBody.top)+30+'px'
          },
          overwrite:"all",
          // easing for overshoot
          ease:Back.easeOut
        });
  
}).on('mouseleave', '.second_menu li', function () {
  
        var $this = jQuery(this),
            // get the active menu selector
            $active = $this.parent().find("a.active"),
            // get offset of active menu item
            offset = $active.offset(),
            //find the offset of the wrapping div  
            offsetBody = jQuery('.second_menu').offset();
  
        // GSAP animate to clicked menu item
        TweenMax.to(jQuery('.second_menu .slide-line2'), 0.5, {
          css:{
            //width: $active.outerWidth()+'px',
            left: (offset.left-offsetBody.left)+101+'px',
            top: (offset.top-offsetBody.top)+30+'px'
          },
          overwrite:"all",
          ease:Power4.easeInOut
        });
	});

	$(document).on('mouseenter', '.second_bio_menu li a', function () {
  
        var $this = jQuery(this),
            // get offset of hovered this
            offset = $this.offset(),
            //find the offset of the wrapping div  
            offsetBody = jQuery('.second_bio_menu').offset();
  
        // GSAP animate to clicked menu item
        TweenMax.to(jQuery('.second_bio_menu .slide-line3'), 0.5, {
          css:{
            //width: $this.outerWidth()+'px',
            left: (offset.left-offsetBody.left)+69+'px',
            top: (offset.top-offsetBody.top)+30+'px'
          },
          overwrite:"all",
          // easing for overshoot
          ease:Back.easeOut
        });
  
}).on('mouseleave', '.second_bio_menu li', function () {
  
        var $this = jQuery(this),
            // get the active menu selector
            $active = $this.parent().find("a.active"),
            // get offset of active menu item
            offset = $active.offset(),
            //find the offset of the wrapping div  
            offsetBody = jQuery('.second_bio_menu').offset();
  
        // GSAP animate to clicked menu item
        TweenMax.to(jQuery('.second_bio_menu .slide-line3'), 0.5, {
          css:{
            //width: $active.outerWidth()+'px',
            left: (offset.left-offsetBody.left)+69+'px',
            top: (offset.top-offsetBody.top)+30+'px'
          },
          overwrite:"all",
          ease:Power4.easeInOut
        });
	});

});

