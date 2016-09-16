/* Cuando la navegación se hace por AJAX
*  El Script de Addthis no se carga. 
*  Podemos solucionarlo con este código */

jQuery.getScript("https://s7.addthis.com/js/300/addthis_widget.js#pubid=TU-ID-PUBLICA", function () {
	//Agregamos la URL actual
	addthis_share = {
		url : location.href,
		title: 'El título del contenido', //Tendrás que encontrar formas de rellenar este parametro
						 
	}
	addthis_config = { pubid: 'TU-ID-PUBLICA'};
	addthis.init();
});
