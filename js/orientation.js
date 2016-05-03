//detectamos orientation del móvil para informar que el juego funciona
//solo en landscape

// $(window).on("orientationchange",function(){

//   alert("The orientation has changed!");
// });

$(document).ready(function() {
	//iOS
	switch (window.orientation) {  
    case 0:  
        // Portrait 
       $(window).orientationchange();
        break; 
        
    case 180: 
        // Portrait (Upside-down)
        $(window).orientationchange();
        break; 
    
    default:
		break; 
	}

	//android
	switch (window.screen.orientation.angle) {  
    case 0:  
        // Portrait 
        $(window).orientationchange();
        break; 
        
    case 180: 
        // Portrait (Upside-down)
        $(window).orientationchange();
        break;  
    
    default:
		break; 
	}
});

$(window).bind("orientationchange",function(){
	//iOS
	switch (window.orientation) {  
    case 0:  
        // Portrait 
        $(window).orientationchange();
        break; 
        
    case 180: 
        // Portrait (Upside-down)
        $(window).orientationchange();
        break;  
    
    default:
		// $('.container-alert').addClass('closed');
		break;
	}

	//android
	switch (window.screen.orientation.angle) {  
    case 0:  
        // Portrait 
        // $('.container-alert').removeClass('closed');
        $(window).screen.orientationchange();
        break; 
        
    case 180: 
        // Portrait (Upside-down)
        // $('.container-alert').removeClass('closed');
        $(window).screen.orientationchange();
        break; 
    
    default:
		//$('.container-alert').addClass('closed');
		break;
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
