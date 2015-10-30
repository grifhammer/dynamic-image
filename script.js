$(window).load(function(){
	var	imageElements = $('.element-wrapper');
	var rescaleImages = $(imageElements).find('.dynamic-image');
	for(i = 0; i < rescaleImages.length; i++){
		var imageHeight = $(rescaleImages[i]).height();
		var imageWidth = $(rescaleImages[i]).width();
		var imageRatio  = 0;

		if(imageHeight > imageWidth){
			$(rescaleImages[i]).height( 300 );
			imageWidth = $(rescaleImages[i]).width();
			$(rescaleImages[i]).css('margin-left', (300-imageWidth) / 2);

		} else {
			$(rescaleImages[i]).width( 300 );
			imageHeight = $(rescaleImages[i]).height();
			$(rescaleImages[i]).css('margin-top', (300-imageHeight) / 2);
		}
	}
});