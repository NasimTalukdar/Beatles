$(function () {
    var backToTop = $('.backToTop');
    var html_body = $('html,body');

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 400) {
            backToTop.fadeIn();
        } else {
            backToTop.fadeOut();
        }
        if (scrolling > 200) {
            $('.menu').addClass('fixedNav');
        } else {
            $('.menu').removeClass('fixedNav');
        }
    });

    backToTop.click(function () {
        $('html,body').animate({
            scrollTop: 0,
        }, 2000);
    });

    //animation on internal link up scroll js
    $('.menu-bg .menu .menu-list ul li a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1000);
                return false;
            }
        }

    });
    $("#snow").fallingSnow({
        speedAdjust: 5,
    });
});