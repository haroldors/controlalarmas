function link001() {
	funconstructor001();

	document.getElementById('idbuttonaceptarfuncons001').onclick = function() {
		link002();
		/* link003(); */
	}
}

function link002() {

	funconstructor002(); /* Construye la estructura marco */
	/* document.getElementById('idlimonitoreofuncons002').click(); */
	window.setTimeout(function(){$('#idlimonitoreofuncons002').click()}, 50);


	/* al presionar el boton panel */
	document.getElementById('idlipanelfuncons002').onclick = function() {
		if (document.getElementById('idcolumnaderechafuncons002').style.display == 'none') {
			document.getElementById('idcolumnaderechafuncons002').style.display='block';
			document.getElementById('idcolumnaizquierdafuncons002').className='col-9';
		}
	}

	/* al presionar el boton monitoreo */
	document.getElementById('idlimonitoreofuncons002').onclick = function() {
		if (document.getElementById('idcolumnaderechafuncons002').style.display == 'block') {
			document.getElementById('idcolumnaderechafuncons002').style.display='none';
			document.getElementById('idcolumnaizquierdafuncons002').className='col-12';
			funconstructor003(); /* construye la estructura de la tabla */
			funconstructor004(); /* construye la estructura interna de la tabla de sesnsores */
			funconstructor005(); /* crea la barra de botones superio de monitor */
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

			/* al presionar el boton refresh */
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
						), 2000);
			}
		}
	}

	/* al presionar el boton cerrar */
	document.getElementById('idlicerrarfuncons002').onclick = function() {
		if (confirm('Esta completamente seguro de cerrar la sesion?')) {
			link001();
		}
	}

	/* al presionar el boton administracion de sensores */
	document.getElementById('idadminsensoresfuncons002').onclick = function() {

		funconstructor003(); /* carga la estructura de la tabla */
		funconstructor008(); /*carga la estructura de los encabezados de la tabla*/
		funconstructor009(); /*carga la lista de botones superiores*/
		funmensajedeenvio();
		window.setTimeout(
			funenvio10parametros(
				5,
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
				), 2000);

		/*el siguiente codigo se ejecuta la momento de dar click en el boton refresh*/
		document.getElementById('idbuttonrefreshfuncons009').onclick = function() {
			funmensajedeenvio();
			window.setTimeout(
				funenvio10parametros(
					5,
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
					), 2000);
		}
	}

}

/*la siguiente funcion modifica la distribucion de los div dentro de la ventana*/
function link003() {
    if (document.getElementById('idcolumnaderechafuncons002').style.display == 'block') {
		document.getElementById('idcolumnaderechafuncons002').style.display='none';
		document.getElementById('idcolumnaizquierdafuncons002').className='col-xs-12';

    } else {
		document.getElementById('idcolumnaderechafuncons002').style.display='block';
		document.getElementById('idcolumnaizquierdafuncons002').className='col-xs-12 col-sm-9';
    }
}

/* la siguiente funcion despliega los reportes */
function link004(varidx) {
	funmensajedeenvio();
	document.getElementById('idmodaltitle').innerHTML ="Detalle";

	window.setTimeout(
		funenvio10parametros(
			4,
			varidx,
			'',
			'',
			'',
			'',
			'',
			'',
			'',
			'',
			''
			), 2000);

}
