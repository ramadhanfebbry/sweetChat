

// DEFAULTS FORM FOUNDATION FRAMEWORK, GENERALY YOU DON'T NEED TO EDIT THIS

;(function ($, window, undefined) {
  'use strict';

  var $doc = $(document),
      Modernizr = window.Modernizr;

  $(document).ready(function() {
    $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
    $.fn.foundationButtons          ? $doc.foundationButtons() : null;
    $.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
    $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
    $.fn.foundationTopBar           ? $doc.foundationTopBar() : null;
    $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
    $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
    $.fn.foundationTabs             ? $doc.foundationTabs({callback : $.foundation.customForms.appendCustomMarkup}) : null;
    $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;
    //$.fn.foundationMagellan         ? $doc.foundationMagellan() : null;
    $.fn.foundationClearing         ? $doc.foundationClearing() : null;

    $.fn.placeholder                ? $('input, textarea').placeholder() : null;
  });

  // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
  // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
  // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
  // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
  // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

  // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
  if (Modernizr.touch && !window.location.hash) {
    $(window).load(function () {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    });
  }

})(jQuery, this);





// EDIT BELOW THIS LINE FOR CUSTOM EFFECTS, TWEACKS AND INITS

/*--------------------------------------------------

Custom overwiev:

1.  Mobile specific			
2.  CarouFredSel - Responsive Carousel
3.  Titles - Loading slow effect
4.  Fit text - Resize big titles on small device platform
5.  Video - Show/hide promo video
6.  Twitter Feed
7.  PrettyPhoto
8.  Mailchimp integration
9.  Button - Go Up		
	
---------------------------------------------------*/


//You should bind all actions in document.ready, because you should wait till the document is fully loaded.
$(document).ready(function(){
	ifisMobile();
	profilesCarousel();
	loadingSlow();
	resizeBigFonts();
	hideVideo();
	showTwitterFeed();
	useMailchimp();
	hyperlinkPhone();
	goupPage();
});





/***************************************************
1. Mobile specific
***************************************************/
function ifisMobile(){
	if (
		(navigator.userAgent.indexOf('iPhone') != -1) || (navigator.userAgent.indexOf('iPod') != -1) ||
		((navigator.userAgent.indexOf('Android') != -1) && (navigator.userAgent.indexOf('Mobile') != -1))
	)
		{
			//Hide quote you don't need
			$('.hide-on-mobile').hide();
		}
		else {
			// Initialize Quovolver - Quote rotator
			$('.testimonials-carousel li').quovolver(400, 7000);
		}
}

//Hyperlink your phone numbers
function hyperlinkPhone(){
	 $("a[href^='tel:']").click(function(){
	 	if( !$("body").hasClass("mobile") )  return false;
  });
}





/***************************************************
2. CarouFredSel - Responsive Carousel
***************************************************/
function profilesCarousel(){
	$('#profile-thumbs').carouFredSel({
		responsive: true,
		width: '100%',
		mousewheel: true,
		swipe: {
			onMouse: true,
			onTouch: true
		},
		scroll: {
			items: 1,
			duration: 500,
			fx: "directscroll",
			//timeoutDuration: 500,
			//pauseOnHover: 'immediate',
		},
		auto: {
			pauseOnHover: 'resume',
			progress: '#timer1'
		},
		prev	: {	
			button	: "#profile-thumbs-prev",
			key		: "left"
		},
		next	: { 
			button	: "#profile-thumbs-next",
			key		: "right"
		},
		pagination	: "#profile-thumbs-pag",
		items: {
			width: 120,
			height: '100%',	//	optionally resize item-height
			visible: {
				min: 3,
				max: 8
			}
		}
	});
}






/***************************************************
3. Titles - Loading slow effect
***************************************************/
function loadingSlow(){
	jQuery('#call-to-actions .section-title').animate({opacity:1},1200,function(){ jQuery('#call-to-actions .lead').animate({opacity:1},1500);});
}





/***************************************************
4. Fit text - Resize big fonts on small device platform
***************************************************/
function resizeBigFonts(){
	$(".section-title").fitText(1.2, {
		minFontSize: '48px',
		maxFontSize: '68px'
	});
		
	$(".block-grid .title").fitText(0.6, {
		minFontSize: '12px',
		maxFontSize: '36px'
	});
	
	$(".block-grid .subtitle").fitText(0.6, {
		minFontSize: '12px',
		maxFontSize: '18px'
	});
	
	$(".text-resize").fitText(2);
}





/***************************************************
5. Video - Show/hide promo video
***************************************************/
function hideVideo(){
    $("#tours").attr('src', '');
		$("#video").slideUp(700, function () {
			$("#videoLoad").fadeOut('slow');
			});
		$('.play').removeClass('disabled');
}

$("a.play").click(function (e) {
		e.preventDefault();
		$("#videoLoad").hide();
		var videotoload = $(this).attr("href"),
				viewportHeight = (jQuery(window).height()) - 533,
				scrolltovideo = $("#markerPoint").offset().top;
		if (viewportHeight > 100) {
				scrolltovideo = scrolltovideo - (viewportHeight / 2);
		} else {
				scrolltovideo = scrolltovideo - 55;
		}
		
		$('.play').show();
		$(this).addClass('disabled');
		
		$("html, body").animate({
				scrollTop: scrolltovideo
		}, 500, function () {
			$("#tours").attr('src', videotoload);
						$("#videoLoad").fadeIn('slow');
				$("#video").slideDown(900);
		});
});
		
$("#videoClose").click(function (e) {
		e.preventDefault();
		hideVideo();
});





/***************************************************
6. Twitter Feed
***************************************************/
function showTwitterFeed(){
  if ($('#tweet').length) {
    $('#tweet').tweet({
			username: 'envato', // Change with your username
			join_text: 'auto',
			//avatar_size: 32,
			count:3	,
			auto_join_text_default: ' we said, ',
			auto_join_text_ed: ' we ',
			auto_join_text_ing: ' we were ',
			auto_join_text_reply: ' we replied to ',
			auto_join_text_url: ' we were checking out ',
			loading_text: 'Loading tweets...'
		});
  };
}
	




/***************************************************
7. PrettyPhoto - Replace 'data-rel' with 'rel'
   'rel' attribute it's not a valid tag anymore
***************************************************/
$('a[data-rel]').each(function() {
		$(this).attr('rel', $(this).data('rel'));
});

//PrettyPhoto settings
$("a[rel^='prettyPhoto']").prettyPhoto({
		animation_speed: 'fast', /* fast/slow/normal */
		slideshow: false, /* false OR interval time in ms */
		autoplay_slideshow: false, /* true/false */
		opacity: 0.80, /* Value between 0 and 1 */
		show_title: true, /* true/false */
		allow_resize: true, /* Resize the photos bigger than viewport. true/false */
		default_width: 500,
		default_height: 344,
		counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
		theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
		hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
		wmode: 'opaque', /* Set the flash wmode attribute */
		autoplay: true, /* Automatically start videos: True/False */
		modal: false, /* If set to true, only the close button will close the window */
		overlay_gallery: false, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
		keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
		deeplinking: false,
		social_tools: false
});
		


	

/***************************************************
8. Mailchimp integration
***************************************************/

function useMailchimp(){
// Prepare the Newsletter and send data to Mailchimp
$('#newsletter-form').submit(function() {
	$.ajax({
		url: 'newsletter-form.php',
		type: 'POST',
		data: {
			email: $('#email').attr('value'),
			yname: 'Dating LP Template User' // Change here with something different
		},
		success: function(data){
			$('#result').html(data).css('color', 'green');
		},
		error: function() {
			$('#result').html('Sorry, an error occurred.').css('color', 'red');
		}

	});
	return false;
});
}

	
	
	

/***************************************************
9. Button - Go Up
***************************************************/
function goupPage(){
	// hide #btnGoUp first
	$("#btnGoUp").hide();
	
	// fade in #btnGoUp
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#btnGoUp').fadeIn();
			} else {
				$('#btnGoUp').fadeOut();
			}
		});
	
		// scroll body to 0px on click
		$('#btnGoUp').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
}
