//detectamos orientation del móvil para informar que el juego funciona
//solo en landscape

$(window).on("orientationchange",function(){

  alert("The orientation has changed!");
});


$(window).on("orientationchange",function(){
  alert("Para poder jugar es necesario que tu dispositivo esté en horizontal (landscape)");
});


$(document).ready(function() {
	if ((window).orientation==0)
	{
		alert("2 para poder jugar es necesario que tu dispositivo esté en horizontal (landscape)")
	}

});
