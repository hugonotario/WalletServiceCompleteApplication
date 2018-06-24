(function( $ ) {
    'use strict';
 
    $(function() {
        //mapping selection
    $('.left-box li a, .right-box li a').click(function(){
        $(this).parent('li').toggleClass('selected');
    });
    });
 
})( jQuery );
