
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
