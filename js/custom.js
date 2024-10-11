$(document).ready(function () {

    // responsive menu start

    $('.mob_main_menu, .mob_sub_menu').hide();

    $('.toggle_icon').click(function () {
        $('.mob_main_menu').slideToggle()
        $(this).find('i').toggleClass('fa-bars fa-times');
    })
    $('.mob_main_menu > li > a').click(function () {
        $(this).next('.mob_sub_menu').slideToggle();
    })

    // responsive menu end

    // slider js start

    $("#testimonials").owlCarousel(
        {
            items: 3,
            loop: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            smartSpeed: 3000,
            animateIn: 'animate__zoomIn',
            animateOut: 'animate__zoomOut',
            touchDrag: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,
                }
            },
        }
    );

    $("#team-page").owlCarousel(
        {
            items: 1,
            loop: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            smartSpeed: 1000,
            touchDrag: true,
        }
    );

    // slider js end

    // page scroll icon js start

    $(window).scroll(function () {
        var h = $(window).scrollTop();

        if (h > 150) {
            $('.sticky_icon').show();
        } else {
            $('.sticky_icon').hide();
        }
    })

    $('.sticky_icon').hide();
    $('.sticky_icon').click(function () {
        $('html,body').animate({ scrollTop: 0 })
    })

    setTimeout(() => {
        $('.page-loader').fadeOut(100);
    }, 2500)

    // page scroll icon js end
})
