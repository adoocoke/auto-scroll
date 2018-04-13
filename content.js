function scroll(speed) {
    $('html, body').animate({scrollTop: $(document).height() - $(window).height()}, speed, function () {
        $(this).animate({scrollTop: 0}, speed);
    });
}
speed = 20000;
scroll(speed)
setInterval(function () {
    scroll(speed)
}, speed * 2);