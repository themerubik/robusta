$(function ($) {
    "use strict"



    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').fadeOut();
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').fadeIn();
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $('.bnr_slider_lists').owlCarousel({
        loop: true,
        margin: 10,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.club_slider').owlCarousel({
        loop: true,
        margin: 10,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplay: true,
        autoplayTimeout: 3000,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.club_cnt_slider').owlCarousel({
        loop: true,
        margin: 10,
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp',
        dots: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.testimonial_slider').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    // video js

    TweenMax.set(".play-circle-01", {
        rotation: 90,
        transformOrigin: "center"
    })

    TweenMax.set(".play-circle-02", {
        rotation: -90,
        transformOrigin: "center"
    })

    TweenMax.set(".play-perspective", {
        xPercent: 6.5,
        scale: .175,
        transformOrigin: "center",
        perspective: 1
    })

    TweenMax.set(".play-video", {
        visibility: "hidden",
        opacity: 0,
    })

    TweenMax.set(".play-triangle", {
        transformOrigin: "left center",
        transformStyle: "preserve-3d",
        rotationY: 10,
        scaleX: 2
    })

    const rotateTL = new TimelineMax({
            paused: true
        })
        .to(".play-circle-01", .7, {
            opacity: .1,
            rotation: '+=360',
            strokeDasharray: 456,
            ease: Power1.easeInOut
        }, 0)
        .to(".play-circle-02", .7, {
            opacity: .1,
            rotation: '-=360',
            strokeDasharray: 411,
            ease: Power1.easeInOut
        }, 0)

    const openTL = new TimelineMax({
            paused: true
        })
        .to(".play-backdrop", 1, {
            opacity: .95,
            visibility: "visible",
            ease: Power2.easeInOut
        }, 0)
        .to(".play-close", 1, {
            opacity: 1,
            ease: Power2.easeInOut
        }, 0)
        .to(".play-perspective", 1, {
            xPercent: 0,
            scale: 1,
            ease: Power2.easeInOut
        }, 0)
        .to(".play-triangle", 1, {
            scaleX: 1,
            ease: ExpoScaleEase.config(2, 1, Power2.easeInOut)
        }, 0)
        .to(".play-triangle", 1, {
            rotationY: 0,
            ease: ExpoScaleEase.config(10, .01, Power2.easeInOut)
        }, 0)
        .to(".play-video", 1, {
            visibility: "visible",
            opacity: 1
        }, .5)


    const button = document.querySelector(".play-button")
    const backdrop = document.querySelector(".play-backdrop")
    const close = document.querySelector(".play-close")

    button.addEventListener("mouseover", () => rotateTL.play())
    button.addEventListener("mouseleave", () => rotateTL.reverse())
    button.addEventListener("click", () => openTL.play())
    backdrop.addEventListener("click", () => openTL.reverse())
    close.addEventListener("click", e => {
        e.stopPropagation()
        openTL.reverse()
    })

});
