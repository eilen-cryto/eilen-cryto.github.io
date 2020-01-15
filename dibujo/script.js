// JavaScript Document


$(window).scroll( function() {
	if ( $('#dibujo').visible(true) ) {
		
	 var $svg = $('#dibujo').drawsvg({
      duration: 5000,
      easing: 'linear'
    });

$svg.drawsvg('animate');
	
	}
});

$("#dibujo").click( function() {

	 var mySVG = $('#dibujo').drawsvg();
 mySVG.drawsvg('animate');	
});


