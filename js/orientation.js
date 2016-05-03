//detectamos orientation del móvil para informar que el juego funciona
//solo en landscape

// $(window).on("orientationchange",function(){

//   alert("The orientation has changed!");
// });

$(document).ready(function() {
	if ((window).orientation==0)
	{
		$('.container-alert').removeClass('container-alert.closed');
	}
	else
	{
		$('.container-alert').addClass('container-alert.closed');
	}
});

$(window).on("orientationchange",function(){
	if ((window).orientation==0 || (window).orientation==180)
	{
		$('.container-alert').removeClass('container-alert.closed');
	}
	else
	{
		$('.container-alert').addClass('container-alert.closed');
	}
});
