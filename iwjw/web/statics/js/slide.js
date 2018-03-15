//current position
var pos = 0;
//number of slides
var totalSlides = $('#slider-wraps ul li').length;
//get the slide width
var sliderWidth = $('#slider-wraps').width();


$(document).ready(function(){
	
	
	/*****************
	 BUILD THE SLIDER
	*****************/
	//set width to be 'x' times the number of slides
	$('#slider-wraps ul#sliders').width(sliderWidth*totalSlides);
	
    //next slide 	
	$('#nexts').click(function(){
		slideRight();
	});
	
	//previous slide
	$('#previoust').click(function(){
		slideLeft();
	});
	
	
	
	/*************************
	 //*> OPTIONAL SETTINGS
	************************/
	//automatic slider
	var autoSlider = setInterval(slideRight, 3000);
	
	//for each slide 
	$.each($('#slider-wraps ul li'), function() {
	   //set its color
	   var c = $(this).attr("data-color");
	   $(this).css("background",c);
	   
	   //create a pagination
	  /* var li = document.createElement('li');
	   $('#pagination-wraps ul').append(li);*/
	});
	
	//counter
	countSlides();
	
	//pagination
	/*pagination();*/
	
	//hide/show controls/btns when hover
	//pause automatic slide when hover
	$('#slider-wraps').hover(
	  function(){ $(this).addClass('active'); clearInterval(autoSlider); }, 
	  function(){ $(this).removeClass('active'); autoSlider = setInterval(slideRight, 3000); }
	);
	
	

});//DOCUMENT READY
	


/***********
 SLIDE LEFT
************/
function slideLeft(){
	pos--;
	if(pos==-1){ pos = totalSlides-1; }
	$('#slider-wraps ul#sliders').css('left', -(sliderWidth*pos));
	
	//*> optional
	countSlides();
	/*pagination();*/
}


/************
 SLIDE RIGHT
*************/
function slideRight(){
	pos++;
	if(pos==totalSlides){ pos = 0; }
	$('#slider-wraps ul#sliders').css('left', -(sliderWidth*pos));
	
	//*> optional 
	countSlides();
	/*pagination();*/
}



	
/************************
 //*> OPTIONAL SETTINGS
************************/
function countSlides(){
	$('#counter').html(pos+1 + ' / ' + totalSlides);
}

/*
function pagination(){
	$('#pagination-wraps ul li').removeClass('active');
	$('#pagination-wraps ul li:eq('+pos+')').addClass('active');
}*/
