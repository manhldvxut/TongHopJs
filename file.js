
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


// check input katakana

var changerColor = {backgroundColor: '#FCF3F3', borderColor : '#F2C2CA'};
var returnColor = {backgroundColor: '#fff', borderColor : '#D3D3CF'};
var textSelected = '選択してください';

$('.required__check').each(function(){
    const currentCheck = $(this)
    console.log(currentCheck.val())

    $(currentCheck).on('keydown keyup keypress change focus blur', function() {
        
        if ($(this).val() == '') {
            $(this).css(changerColor);
        } 
        else {
            $(this).css(returnColor);
        }

    }).change();

})

var valueSlection = $( ".sel-opt option:selected" ).val()

if(valueSlection == textSelected){
    $('.sel-opt').css(changerColor);
}else{
    $('.sel-opt').css(returnColor);
}

$('.sel-opt').change(function(){

    if($(this).val() != textSelected){
        $(this).css(returnColor);
    }else{
        $(this).css(changerColor);
    }
})

// check katakana
$('.checkKatakana').on('keydown keyup keypress change focus blur', function() {
    const checktextKatanata = $(this).val();
    if(checktextKatanata.match(/^[ァ-ヶー　]+$/) || checktextKatanata == '' ){
        $(this).css(returnColor)
      }else{
        $(this).css(changerColor)
      }
}).change()




// sticky js

$(window).on('scroll',function() {
    if ($('#form_cart').length) {
       
        var side = $(".ec-cartRole__actions-stickjs"), // BOX STICKY
            wrap = $("#form_cart"), // BOX CONTENT
            min_move = wrap.offset().top,
            max_move = wrap.height(),
            margin_bottom = max_move - min_move;

            console.log(min_move)

        var scrollTop = $(window).scrollTop();
        if (scrollTop > min_move && scrollTop < max_move) {
            var margin_top = scrollTop - min_move;
            side.css({"margin-top": margin_top + 140});
        } else if (scrollTop < min_move) {
            side.css({"margin-top": 0});
        } else if (scrollTop > max_move) {
            side.css({"margin-top": margin_bottom});
        }

    }
})