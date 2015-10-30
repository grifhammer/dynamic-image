$(window).load(function(){
	var	imageElements = $('.element-wrapper');
	var rescaleImageDiv = $(imageElements).find('.image-wrapper');
	for(i = 0; i < rescaleImageDiv.length; i++){
		var imageHeights = [];
		var imageWidths = [];
		var maxWidth = 0;
		var totalHeight;

		//Loop through all images in the image div to find total height and total width;
		$(rescaleImageDiv[i]).find('img').each(function(){
			imageHeights.push($(this).height());
			imageWidths.push($(this).width());
		});

		for(i = 0; i < imageWidths.length; i++){
			if(imageWidths[i] > maxWidth){
				maxWidth = imageWidths[i];
			}
		}
		for(i = 0; i < imageHeights.length; i++){
			totalHeight += imageHeights[i];
		}

		if(totalHeight > totalWidth){


			$(rescaleImageDiv[i]).height( 300 );
			maxWidth = $(rescaleImages[i]).width();
			$(rescaleImageDiv[i]).css('margin-left', (300-maxWidth) / 2);



		} else {


			$(rescaleImageDiv[i]).width( 300 );
			totalHeight = $(rescaleImageDiv[i]).height();
			$(rescaleImageDiv[i]).find('img').first().css('margin-top', (300-totalHeight) / 2);


		}
	}
});