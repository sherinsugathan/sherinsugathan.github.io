jQuery(window).on("load", function() {
	"use strict";

	/* -----------------------------------------
	 FlexSlider Init
	 ----------------------------------------- */
	var slider = jQuery('.portfolio-slider');
	if ( slider.length ) {
		var animation      = slider.data('animation'),
			direction      = slider.data('direction'),
			slideshow      = slider.data('slideshow'),
			slideshowSpeed = slider.data('slideshowspeed'),
			animationSpeed = slider.data('animationspeed');

		slider.flexslider({
			animation     : animation,
			direction     : direction,
			slideshow     : slideshow,
			slideshowSpeed: slideshowSpeed,
			animationSpeed: animationSpeed,
			smoothHeight: true,
			prevText: '',
			nextText: '',
			directionNav: false,
			start: function(slider) {
				slider.removeClass('loading');
			}
		});
	}

	var filterNav = jQuery(".filter-nav");

	if ( filterNav.length ) {
		var $container = jQuery('.item-isotope');
		var navs = filterNav.find('a');
		$container.isotope();

		navs.on( 'click', function( e ) {
			var that = jQuery(this);
			var selector = that.attr('data-filter');

			navs.removeClass('selected');
			that.addClass('selected');

			$container.isotope({
				filter: selector,
				animationOptions: {
					easing: 'ease'
				}
			});

			e.preventDefault();
		});
	}

});

jQuery(document).ready(function($) {
	"use strict";

	/* -----------------------------------------
	 Menu
	 ----------------------------------------- */
	$( '#navigation .menu-item-has-children > a' ).after( '<button class="dropdown-toggle"></button>' );

	$( '#navigation .current-menu-ancestor > button' ).addClass( 'toggle-on' );
	$( '#navigation .current-menu-ancestor > .sub-menu' ).addClass( 'toggled-on' );

	$( '.dropdown-toggle' ).click( function( e ) {
		var _this = $( this );
		e.preventDefault();

		_this.toggleClass( 'toggle-on' );
		_this.next( '.children, .sub-menu' ).toggleClass( 'toggled-on' );
	} );

	$( '.mobile-toggle' ).click( function( e ) {
		e.preventDefault();
		var _this = $( this );

		_this.toggleClass( 'toggled' );
		$( '.side-wrap' ).toggle();
	});

	/* -----------------------------------------
	 Responsive Videos with fitVids
	 ----------------------------------------- */
	$('body').fitVids();

	/* -----------------------------------------
	 Lightbox
	 ----------------------------------------- */
	$( '.lightbox' ).fancybox();
});