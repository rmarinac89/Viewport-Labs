// Navigation Menu

$(document).ready(function() {

	$(".main-nav").click(function(event) {
		event.stopPropagation();
	$('.menu-items').toggle();
});

	$(document).click( function(){
        $('.menu-items').hide();
    });
	
});



// Background Image @media screen(max-width:800px)

// Ensures the bg images are the height on the viewport on page load

$(document).ready(function() {
	WinHeight = $(window).height()
$('.landing-wrapper #hidden-lg').css('height', WinHeight);
	
});

// Smooth Scrolling

$(document).ready(function() {

	smoothScroll.init({
	speed: 500, // Integer. How fast to complete the scroll in milliseconds
	easing: 'easeInOutCubic', // Easing pattern to use
	updateURL: false, // Boolean. Whether or not to update the URL with the anchor hash on scroll
	offset: 0, // Integer. How far to offset the scrolling anchor location in pixels

	});
	
});

// Remove class

$(document).ready(function() {

var viewportWidth = $(window).width();
	
	if (viewportWidth <= 991) {
	   $(".landing-wrapper > img").removeClass('hide');
	}

	else if (viewportWidth > 991) {
		$(".landing-wrapper > img").addClass('hide');
	}

});



