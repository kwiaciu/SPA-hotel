import $ from 'jquery';

export const customAlert = (textInside) => {
    const customAlert = (`<div class="info hidden">${textInside}</div>`)
    $('main').append(customAlert)
    $('.info').fadeIn( 200, function() {});
    $('.info').fadeOut( 2000, function() {});
    setTimeout( ()=> {$('.info').remove()}, 2200);

    return customAlert
}