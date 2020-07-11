(function($){

	jQuery(document).ready(function(){

		$('.main-slider-active').slick({
		  dots: false,
		  arrows: false,
		  infinite: false,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		});

		$('.testimonial-active').slick({
		  dots: true,
		  arrows: false,
		  infinite: false,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		});

		$('.brand-active').slick({
		  dots: true,
		  arrows: false,
		  infinite: false,
		  speed: 300,
		  slidesToShow: 5,
		  slidesToScroll: 1,
		});


		$('.image-popup-vertical-fit').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			mainClass: 'mfp-img-mobile',
			image: {
				verticalFit: true
			}
			
		});

		$('.image-popup-fit-width').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			image: {
				verticalFit: false
			}
		});

		$('.image-popup-no-margins').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			closeBtnInside: false,
			fixedContentPos: true,
			mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
			image: {
				verticalFit: true
			},
			zoom: {
				enabled: true,
				duration: 300 // don't foget to change the duration also in CSS
			}
		});


		$('.popup-video').magnificPopup({type:'iframe'});			

	});


}(jQuery));