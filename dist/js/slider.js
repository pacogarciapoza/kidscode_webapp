$(document).ready(function() {
	$('#slide-0').show();
	$('.container-txt-0').show();
	
	var actualSlideStart = $('.slides li:visible');
	//si prevSlider no existe, iremos a la página de selección de ejercicio
	if (actualSlideStart.data('slide')=='0') {
		$('#btn-prev').hide();
		$('#btn-go-index').show();
	}
	
	function nextSlider(){
		$('#btn-go-index').hide();
		$('#btn-prev').show();

		var actualSlide = $('.slides li:visible');
		var nextSlide = actualSlide.next();

		if (nextSlide.length == 0) {
			nextSlide = $('#slide-0');//cambiarlo a html de selección de juego
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
			
			$('.container-txt-'+actualSlide.data('slide')).hide();
			$('.container-txt-'+nextSlide.data('slide')).show();
			
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

			$('#rumble-ok').hide();
		}
		else if(nextSlide.data('slide')=='5') //si estamos en slide 5 de rumble saludando
		{
			$('.container-txt-'+actualSlide.data('slide')).hide();
			$('.container-txt-'+nextSlide.data('slide')).show();
			$('#btn-prev').hide();
			$('#btn-cam').hide();
			$('#btn-next').show();
			$('#rumble-ok').show();
		}
		else if(nextSlide.data('slide')=='6') //si estamos en slide 6 mostraremos botón volver a empezar
		{
			$('#rumble-ok').hide();

			$('.container-txt-'+actualSlide.data('slide')).hide();
			$('.container-txt-'+nextSlide.data('slide')).show();
			$('#btn-next').hide();
			$('#btn-prev').hide();
			$('#btn-reload').show();
		}

		actualSlide.hide();
		nextSlide.show();
	};

	function prevSlider(){
		var actualSlide = $('.slides li:visible');
		var prevSlide = actualSlide.prev();

		if (prevSlide.data('slide')=='0') {
			$('#btn-prev').hide();
			$('#btn-go-index').show();
		}

		if (actualSlide.data('slide')=='1'|| actualSlide.data('slide')=='2'||actualSlide.data('slide')=='3'||actualSlide.data('slide')=='4')
		{
			$('#nav-'+actualSlide.data('slide')).removeClass('progress-bar-active');
			$('#nav-'+actualSlide.data('slide')).addClass('progress-bar-inactive');
			$('#num-'+actualSlide.data('slide')).removeClass('progress-num-active');
			$('#num-'+actualSlide.data('slide')).addClass('progress-num-inactive');
			$('.container-txt-'+actualSlide.data('slide')).hide();
			$('.container-txt-'+prevSlide.data('slide')).show();
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


});



