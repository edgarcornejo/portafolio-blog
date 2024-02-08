$(window).scroll(function(){ 
    $(this).scrollTop() < 100 ?
    $('.name-title').removeClass('scroll'):
    $('.name-title').addClass('scroll');
});