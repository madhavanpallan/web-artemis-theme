$(function(){

new WOW().init();

// float 
$('.is-floating-label input, .is-floating-label textarea').on('focus blur', function (e) {
  $(this).parents('.is-floating-label').toggleClass('is-focused', (e.type === 'focus' || this.value.length > 0));
}).trigger('blur');


// scroll top
 
});