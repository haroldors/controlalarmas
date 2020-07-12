function link001() {
	funconstructor001();

	document.getElementById('idbuttonaceptarfuncons001').onclick = function() {
		link002();
	}
}

function link002() {
	funconstructor002(); /* Construye la estructura marco */
	funconstructor003(); /* construye la estructura de la tabla */
	funconstructor004(); /* construye la estructura interna de la tabla de sesnsores */
	funconstructor005();
	funmensajedeenvio();
	funenvio10parametros(
		2, 
		'', 
		'', 
		'', 
		'', 
		'', 
		'', 
		'', 
		'', 
		'', 
		''
		);
	
		document.getElementById('idbuttonrefreshfuncons005').onclick = function() {
			funconstructor003();
			funconstructor004();
			funmensajedeenvio();
			window.setTimeout(
				funenvio10parametros(
					2, 
					'', 
					'', 
					'', 
					'', 
					'', 
					'', 
					'', 
					'', 
					'', 
					''
					)
				, 2000);			
		}
}

