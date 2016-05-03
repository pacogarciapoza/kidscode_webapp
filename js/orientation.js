//detectamos orientation del móvil para informar que el juego funciona
//solo en landscape

// $(window).on("orientationchange",function(){

//   alert("The orientation has changed!");
// });

$(document).ready(function() {
	switch (window.orientation) {  
    case 0:  
        // Portrait 
        $('.container-alert').removeClass('closed');
        break; 
        
    case 180: 
        // Portrait (Upside-down)
        $('.container-alert').removeClass('closed');
        break; 
    
    default:
		$('.container-alert').addClass('closed');
	}
});

$(window).on("orientationchange",function(){
	switch (window.orientation) {  
    case 0:  
        // Portrait 
        $('.container-alert').removeClass('closed');
        break; 
        
    case 180: 
        // Portrait (Upside-down)
        $('.container-alert').removeClass('closed');
        break; 
    
    default:
		$('.container-alert').addClass('closed');
	}

	// if (window.orientation == 0 || window.orientation == 180)
	// {
	// 	$('.container-alert').removeClass('container-alert.closed');
	// }
	// else
	// {
	// 	// // You can also manually force this event to fire.
	// 	// $( window ).orientationchange();
	// 	$('.container-alert').addClass('container-alert.closed');
	// }
});
