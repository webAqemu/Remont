$(function () {

	$('.comments__box').slick({
		prevArrow: '<button class="comments__btn comments__btn--left"></button>',
		nextArrow: '<button class="comments__btn comments__btn--right"></button>',
		slidesToShow: 1,
		responsive: [
			{
				breakpoint: 740,
				settings: {
					arrows: false,
					dots: true,
				}
			},
		]
	});

});

jQuery(function ($) {
	$("input[type='tel']").mask("+38 (999)999-99-99", { placeholder: "_" });
});

$('.call-btn').click(function () {
	var popup_id = $('#' + $(this).attr("rel"));
	$(popup_id).show();
	$('.overlay-popup').show();
});

$('.overlay-popup, .popup-call__remove').click(function () {
	$('.overlay-popup, .popup').hide();
});