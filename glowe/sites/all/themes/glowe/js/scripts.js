jQuery(document).foundation();
jQuery(function(){
		alert('AAA');
	jQuery('.icon.lupa').click(function(){
		if(jQuery(this).hasClass('off'))
			jQuery(this).removeClass('off').addClass('on');
		else
			jQuery(this).removeClass('on').addClass('off');
		jQuery('.search-box').toggle();
	});
	
})