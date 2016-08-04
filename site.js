// $(document).on('scroll', function (e) {
//     $('.navbar').css('color', ($(document).scrollTop() / 500));
// });

$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $('.navbar').addClass('affix');
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $('.navbar').removeClass('affix');
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }   

});

if (document.body.scrollTop != 0){
	$('.navbar').addClass('affix');
        $(".navbar-fixed-top").addClass("top-nav-collapse");
}

jQuery(document).ready(function($){
	var $timeline_block = $('.cd-timeline-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});
});