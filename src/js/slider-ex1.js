$(document).ready(function() {
	$('#slide-1-0').show();
	$('.container-txt-1-0').show();
	
	function nextSlider(){
		var actualSlide = $('.slides li:visible');
		var nextSlide = actualSlide.next();

		if (nextSlide.length == 0) {
			nextSlide = $('#slide-1-0');//cambiarlo a html de selección de juego
		}
		//si estamos en las slides 1, 2, 3 o 4 mostramos breadcrumbs animados
		if (nextSlide.data('slide')=='1'|| nextSlide.data('slide')=='2'||nextSlide.data('slide')=='3'||nextSlide.data('slide')=='4')
		{
			$('#nav-'+nextSlide.data('slide')).removeClass('progress-bar-inactive');
			$('#nav-'+nextSlide.data('slide')).addClass('progress-bar-active');
			$('#num-'+nextSlide.data('slide')).removeClass('progress-num-inactive');
			$('#num-'+nextSlide.data('slide')).addClass('progress-num-active');
			$('#rum-'+actualSlide.data('slide')).css('visibility','hidden');
			$('#rum-'+nextSlide.data('slide')).css('visibility','visible');
			
			$('.container-txt-1-'+actualSlide.data('slide')).hide();
			$('.container-txt-1-'+nextSlide.data('slide')).show();
			
			//si estamos en las slides 1, 2 o 3, mostramos animación de fichas
			if (nextSlide.data('slide')!='4')
			{
				$('.anim1-'+actualSlide.data('slide')).hide();
				$('.anim1-'+nextSlide.data('slide')).show();
			}
			else //si estamos en slide 4 mostraremos btn camera y ocultamos btn next
			{
				$('.anim1-'+actualSlide.data('slide')).hide();
				$('#btn-next').hide();
				$('#btn-cam').show();
			}

			$('#rumble-ok-ex-1').hide();
		}
		else if(nextSlide.data('slide')=='5') //si estamos en slide 5 de rumble saludando
		{
			$('.container-txt-1-'+actualSlide.data('slide')).hide();
			$('.container-txt-1-'+nextSlide.data('slide')).show();
			$('#btn-prev').hide();
			$('#btn-cam').hide();
			$('#btn-next').show();
			$('#rumble-ok-ex-1').show();

		}
		else if(nextSlide.data('slide')=='6') //si estamos en slide 6 mostraremos botón volver a empezar
		{
			$('#rumble-ok-ex-1').hide();

			$('.container-txt-1-'+actualSlide.data('slide')).hide();
			$('.container-txt-1-'+nextSlide.data('slide')).show();
			$('#btn-next').hide();
			$('#btn-reload').show();
		}

		actualSlide.hide();
		nextSlide.show();
	};

	function prevSlider(){
		var actualSlide = $('.slides li:visible');
		var prevSlide = actualSlide.prev();
		
		if (prevSlide.length == 0) {
			//prevSlide = $('#slide-1-6');//cambiarlo a página de selección de ejercicios
			//vamos a la página de selección de ejercicio index.html
			$(".container-nav-btn-cancel").click(function() { 
     			location.href = this.href; 
			});
			$(".container-nav-btn-cancel").click();
		}

		if (actualSlide.data('slide')=='1'|| actualSlide.data('slide')=='2'||actualSlide.data('slide')=='3'||actualSlide.data('slide')=='4')
		{
			$('#nav-'+actualSlide.data('slide')).removeClass('progress-bar-active');
			$('#nav-'+actualSlide.data('slide')).addClass('progress-bar-inactive');
			$('#num-'+actualSlide.data('slide')).removeClass('progress-num-active');
			$('#num-'+actualSlide.data('slide')).addClass('progress-num-inactive');
			$('.container-txt-1-'+actualSlide.data('slide')).hide();
			$('.container-txt-1-'+prevSlide.data('slide')).show();
			$('#rum-'+actualSlide.data('slide')).css('visibility','hidden');
			$('#rum-'+prevSlide.data('slide')).css('visibility','visible');
		
			//si estamos en las slides 1, 2 o 3, mostramos animación de fichas
			if (actualSlide.data('slide')!='1')
			{
				$('.anim1-'+actualSlide.data('slide')).hide();
				$('.anim1-'+prevSlide.data('slide')).show();
			}
			else
			{
				$('.anim1-'+actualSlide.data('slide')).hide();
			}
			//si estamos en slide 4 ocultaremos btn-camera y volveremos a mostrar btn-next
			if (actualSlide.data('slide')=='4')
			{
				$('#btn-cam').hide();
				$('#btn-next').show();
			}
		}

		actualSlide.hide();
		prevSlide.show();
	};

	$('#btn-next').click(nextSlider);
	$('#btn-prev').click(prevSlider);
	$('#btn-cam').click(nextSlider);
	// $('#btn-reload').click(funtion(){

	// });

});



