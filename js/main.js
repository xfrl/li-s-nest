(function($) {
	"use strict";
  	$(".main-menu a").click(function(){
		var id =  $(this).attr('class');
		$("#menu-container .content").slideUp('slow');
		$("#menu-container #menu-").slideDown('slow');
		$("#menu-container .homepage").slideUp('slow');
		return false;
	});

	$(".main-menu a.homebutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .homepage").slideDown('slow');
		return false;
	});

	$(".main-menu a.aboutbutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .about-section").slideDown('slow');
		return false;
	});

	$(".main-menu a.projectbutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .gallery-section").slideDown('slow');
		return false;
	});

	$(".main-menu a.contactbutton").click(function(){
		$("#menu-container .content").fadeOut();
		$("#menu-container .contact-section").slideDown('slow');
		return false;
	});

	$('.toggle-menu').click(function(){
        $('.show-menu').stop(true).slideToggle();
        return false;
    });

    $('.show-menu a').click(function() {
    	$('.show-menu').fadeOut('slow');
    });

})(jQuery);