
$('.mobile-menu').on('click', function (e) {
    $('.menu-btn').toggleClass('menu-active');
    $('.ul').toggleClass('menu-active');
});

$('.ul a').on('click', function (e) {
    $('.menu-btn').removeClass('menu-active');
    $('.ul').removeClass('menu-active');
});

    $(document).ready(function (){
        $("#click").click(function (){
            $('html, body').animate({
                scrollTop: $("#main-content").offset().top
            }, 2000);
        });
    });