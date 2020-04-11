function copyToClipboard(elementId){
    var aux = document.createElement("input");
    aux.setAttribute('Value', document.getElementById(elementId).innerHTML );
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("Copy");
    document.body.removeChild(aux);
}

$(document).ready(function () {
    $('.menu-toggler').on('click' , function() {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click' , function() {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*= "#"]').on('click' , function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);
    });

    $('#up').on('click' , function() {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });

    $('a[href*= "#"]').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true,
    });

    
});