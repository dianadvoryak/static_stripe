$(function() {
  	$('.header__burger').click(function(event){
		$('.header__burger, .menu').toggleClass('active');
	});
	$('.menu__link').click(function(event){
		$('.header__burger, .menu').toggleClass('active');
	});

});
