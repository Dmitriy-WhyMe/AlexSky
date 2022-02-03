(function ($) {
	$(document).ready(function () {
		const swiper = new Swiper('.swiper', {
			direction: 'horizontal',
			loop: false,
			slidesPerView: 3,
        	spaceBetween: 30,
			
			breakpoints: {
				// when window width is >= 320px
				320: {
				  slidesPerView: 1
				},
				// when window width is >= 480px
				480: {
				  slidesPerView: 1
				},
				// when window width is >= 640px
				640: {
				  slidesPerView: 2
				},
				// when window width is >= 769px
				769: {
					slidesPerView: 3
				}
			},
		  
			// Navigation arrows
			navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			},
		});


		$("#page-up").on("click","a", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1500);
		});

		$('#call').magnificPopup({
			type: 'inline'
		});
		$('#apply').magnificPopup({
			type: 'inline'
		});
		$('#thanks').magnificPopup({
			type: 'inline'
		});
		$('#text-popup-one').magnificPopup({
			type: 'inline'
		});
		$('#text-popup-two').magnificPopup({
			type: 'inline'
		});
		$('#text-popup-three').magnificPopup({
			type: 'inline'
		});
		$('#text-popup-four').magnificPopup({
			type: 'inline'
		});
		$('#text-popup-five').magnificPopup({
			type: 'inline'
		});
		
	});
})(jQuery);