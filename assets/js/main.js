(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        $(".case_study_carousel").owlCarousel({
            items: 3,
            margin: 30,
            loop: true,
            dots: true,
            nav: false,
        });
        
        $(".testimonial_carousel").owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            nav: false,
        });
        
        $(".logo_carousel").owlCarousel({
            items: 6,
            loop: true,
            dots: false,
            nav: false,
        });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	