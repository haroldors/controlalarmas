function link001() {
	funconstructor001();

	document.getElementById('idbuttonaceptarfuncons001').onclick = function() {
		link002();
		/* link003(); */
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
					), 2000);			
		}

		document.getElementById('idlimonitoreofuncons002').onclick = function() {
			link003();
		}
}

/*la siguiente funcion modifica la distribucion de los div dentro de la ventana*/
function link003() {
    if (document.getElementById('idcolumnaderechafuncons002').className == 'col-xs-12 col-sm-3') {
		/* document.getElementById('idcolumnaderechafuncons002').className = 'col-xs-12'; */
		document.getElementById('idcolumnaderechafuncons002').style.display='none';
		document.getElementById('idcolumnaizquierdafuncons002').className='col-xs-12';
		/* document.getElementById('idcolumnaizquierdafuncons002').className = 'col-xs-12 col-sm-3'; */
/*         document.getElementById('idlinkredimencion').className = 'fa fa-plus-square-o fa-1x';
        document.getElementById('idcolumnaderecha').className = 'col-xs-12';
        document.getElementById('idcolumnaizquierda').className = 'col-xs-12';
        document.getElementById('idpanelbodyizquierdo').style.display = 'none';
        document.getElementById('idbuttonlateral').style.display='block';
        document.getElementById('idcolumnaderecha').style.display='none'; */
    } else {
		document.getElementById('idcolumnaderechafuncons002').style.display='block';
		document.getElementById('idcolumnaizquierdafuncons002').className='col-xs-12 col-sm-3';
/*         document.getElementById('idlinkredimencion').className = 'fa fa-minus-square-o fa-1x';
        document.getElementById('idcolumnaderecha').className = 'col-xs-12 col-sm-3';
        document.getElementById('idcolumnaizquierda').className = 'col-xs-12 col-sm-9';
        document.getElementById('idpanelbodyizquierdo').style.display = 'block';
        document.getElementById('idbuttonlateral').style.display='none';
        document.getElementById('idcolumnaderecha').style.display='block'; */
    }
}

