//detectamos orientation del móvil para informar que el juego funciona
//solo en landscape

function isDesktop(){
	if ($(window).width()>1020) {
		return true;
	}
}

//cuando se carga la página
$(document).ready(function() {
	if(!isDesktop()){
		//iOS
		switch (window.orientation) {  
			case 0:  
	        // Portrait 
	        if ($('.container-alert').hasClass('closed'))
	        {
	        	$('.container-alert').removeClass('closed');
	        }
	        break; 
	        
	        case 180:  
	        // Portrait (Upside-down)
	        if ($('.container-alert').hasClass('closed'))
	        {
	        	$('.container-alert').removeClass('closed');
	        }
	        break; 

		    default: //90 and -90 are landscape
		    if (!($('.container-alert').hasClass('closed')))
		    {
		    	$('.container-alert').addClass('closed');
		    }
		    break;
		}

		//android
		switch (window.screen.orientation.angle) {  
			case 0:  
	        // Portrait
	        if ($('.container-alert').hasClass('closed'))
	        { 
	        	$('.container-alert').removeClass('closed');
	        }
	        break; 
	        
	        case 180:  
	        // Portrait (Upside-down)
	        if ($('.container-alert').hasClass('closed'))
	        { 
	        	$('.container-alert').removeClass('closed');
	        }
	        break; 

	        default:
	        if (!($('.container-alert').hasClass('closed')))
	        {
	        	$('.container-alert').addClass('closed');
	        }
	        break;
	    }
	}
});

//cuando se realiza un cambio de orientation del dispositivo
$(window).bind("orientationchange",function(){
	if(!isDesktop()){
		//iOS
		switch (window.orientation) {  
			case 0:  
	        // Portrait 
	        if ($('.container-alert').hasClass('closed'))
	        { 
	        	$('.container-alert').removeClass('closed');
	        }
	        break; 
	        
	        case 180:  
	        // Portrait  (Upside-down)
	        if ($('.container-alert').hasClass('closed'))
	        { 
	        	$('.container-alert').removeClass('closed');
	        }
	        break;  

	        default:
	        if (!($('.container-alert').hasClass('closed')))
	        {
	        	$('.container-alert').addClass('closed');
	        }
	        break;
	    }

		//android
		switch (window.screen.orientation.angle) {  
			case 0:  
	        // Portrait 
	        if ($('.container-alert').hasClass('closed'))
	        { 
	        	$('.container-alert').removeClass('closed');
	        }
	        break; 
	        
	        case 180:  
	        // Portrait  (Upside-down)
	        if ($('.container-alert').hasClass('closed'))
	        { 
	        	$('.container-alert').removeClass('closed');
	        }
	        break; 

	        default:
	        if (!($('.container-alert').hasClass('closed')))
	        {
	        	$('.container-alert').addClass('closed');
	        }
	        break;
	    }
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
