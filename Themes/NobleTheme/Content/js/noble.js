﻿/*!
 * nopAccelerate Noble Theme v2.2.0 (http://themes.nopaccelerate.com/themes/nopaccelerate-noble-theme/)
 * Copyright 2019 Xcellence-IT.
 * Licensed under http://www.nopaccelerate.com/terms/
 */

/* Using Noble js for nopAccelerate Noble Theme */

$(document).ready(function () {
    //Used js for Header Sticky Menu  
    //http://www.jqueryscript.net/menu/Sticky-Navigation-Bar-with-jQuery-Bootstrap.html
    $(window).bind('scroll', function() {
        var navHeight = $("div.header").height();
        var navWidth = $("div.header").width();
        ($(window).scrollTop() > navHeight) ? $('.main-menu').addClass('goToTop').width(navWidth) : $('.main-menu').removeClass('goToTop');
    });

    //Used js for Left Sliderbar Collapse(Responsive Devices)
    $('.block .title').click(function() {
        var e = window, a = 'inner';
        if (!('innerWidth' in window)) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        var result = { width: e[a + 'Width'], height: e[a + 'Height'] };
        if (result.width < 991) {
            $(this).siblings('.listbox').slideToggle('slow');
            $(this).toggleClass("arrow-up-down");
        }
    });


    //Used js for Tooltip 
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="tooltip"]').on('shown.bs.tooltip', function() {
        $('.tooltip').addClass('animated swing');
    })

    //Used js for Product Box and Product Thumbs Slider
    $('#home-category-slider,#home-bestseller-slider,#home-features-slider,#related-products-slider,#also-purchased-products-slider,#category-featured-slider,#manufacturer-featured-slider').owlCarousel({
        loop: false,
        dots: false,
        nav: true,
        navText: ["prev", "next"],
        autoPlay: true,
        lazyLoad: true,
        responsive: {
            0: {
                items: 3
            },
            640: {
                items: 4
            },
            768: {
                items: 4
            },
            980: {
                items: 4
            },
            1199: {
                items: 4
            }
        }
    })
    $('#product-slider').owlCarousel({
        loop: false,
        dots: false,
        nav: true,
        navText: ["prev", "next"],
        autoPlay: true,
        lazyLoad: true,
        responsive: {
            0: {
                items: 3
            },
            640: {
                items: 4
            },
            768: {
                items: 4
            },
            980: {
                items: 4
            },
            1199: {
                items: 4
            }
        }
    })
    $('#crosssell-products-slider').owlCarousel({
        loop: false,
        dots: false,
        nav: true,
        navText: ["prev", "next"],
        autoPlay: true,
        lazyLoad: true,
        responsive: {
            0: {
                items: 3
            },
            640: {
                items: 4
            },
            768: {
                items: 4
            },
            980: {
                items: 4
            },
            1199: {
                items: 4
            }
        }
    })
});
