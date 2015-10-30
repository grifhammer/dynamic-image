$(window).load(function(){
	var	imageElements = $('.element-wrapper');
	var rescaleImageDiv = $(imageElements).find('.image-wrapper');
	for(divCounter = 0; divCounter < rescaleImageDiv.length; divCounter++){
		var imageHeights = [];
		var imageWidths = [];
		var maxWidth = 0;
		var totalHeight = 0;

		//Loop through all images in the image div to find total height and total width;
		$(rescaleImageDiv[divCounter]).find('img').each(function(){
			imageHeights.push($(this).height());
			imageWidths.push($(this).width());
		});

		for(widthCounter = 0; widthCounter < imageWidths.length; widthCounter++){
			if(imageWidths[widthCounter] > maxWidth){
				maxWidth = imageWidths[widthCounter];
			}
		}
		for(heightsCounter = 0; heightsCounter < imageHeights.length; heightsCounter++){
			totalHeight += imageHeights[heightsCounter];
		}

		if(totalHeight > maxWidth){
			var heightRatios = 0;
			var imagesInCurrDiv = $(rescaleImageDiv[divCounter]).find('img');
			for(heightsCounter = 0; heightsCounter < imageHeights; heightsCounter++){
				heightRatios = (imageHeights[heightsCounter]/totalHeight);
				$(imagesInCurrDiv[heightsCounter]).css('height',300*heightRatios);
			}

		} else {

			$(rescaleImageDiv[divCounter]).find('img').width(300);
			imageHeights = [];
			totalHeight = $(rescaleImageDiv[divCounter]).find('img').each(function(){
				imageHeights.push($(this).height());
			});
			totalHeight = 0;
			for(heightsCounter = 0; heightsCounter < imageHeights.length; heightsCounter++){
				totalHeight += imageHeights[heightsCounter];
			}
			$(rescaleImageDiv[divCounter]).find('img:first-child').css('margin-top', ((300-totalHeight) / 2) );
			$(rescaleImageDiv[divCounter]).find('img:first-child').css('float', 'left');
		}
	}
});

// get all image divs{
// 	loop through images in div{
// 		store the widths and heights
// 	}
// 	loop through height and width arrays{
// 		find max width
// 		find total height
// 	}
// 	if total height is greater than max width{
// 		set height of each to the elements to their ratio of total * 300
// 	} else{
// 		set width of all images to 300 px
// 	}
// }
