
/*AnchoLink to other Page*/
$(document).ready(function(linkOtherPage) {
    var hash= window.location.hash
    if ( hash == '' || hash == '#' || hash == undefined ) return false;
        var target = linkOtherPage(hash);
        headerHeight = 120;
        target = target.length ? target : $('[name=' + hash.slice(1) +']');
    if (target.length) {
        $('html,body').stop().animate({
            scrollTop: target.offset().top - 160 //offsets for fixed header
        }, 'linear');
    }
} );


