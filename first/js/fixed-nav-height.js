// function init() {
//     window.addEventListener('scroll', function(e){
//         var distanceY = window.pageYOffset || document.documentElement.scrollTop,
//             shrinkOn = 100,
//             header = document.querySelector(".fixed-nav"),
//             logo = document.querySelectorAll(".logo a");
//         if (distanceY > shrinkOn) {
//             classie.add(header,"smaller");
//             classie.remove(header,"animated");
//             logo[0].removeAttribute("class");
//             logo[0].setAttribute("class", "hidden");
//             logo[1].removeAttribute("class");
//             logo[1].setAttribute("class", "unhide");
//         } else {
//             if (classie.has(header,"smaller")) {
//                 classie.remove(header,"smaller");
//                 classie.remove(header,"animated");
//                 logo[0].removeAttribute("class");
//                 logo[0].setAttribute("class", "unhide");
//                 logo[1].removeAttribute("class");
//                 logo[1].setAttribute("class", "hidden");
//             }
//         }
//     });
// }
// window.onload = init();

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
        }
        else {
            classie.remove( header, 'cbp-af-header-shrink' );
        }
        didScroll = false;
    }

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    init();

})();