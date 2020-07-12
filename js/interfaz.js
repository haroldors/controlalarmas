function getHTTPObject() {
    var xmlhttp;
    if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
        try {
            xmlhttp = new XMLHttpRequest();
        } catch (e) {
            xmlhttp = false;
        }
    }
    return xmlhttp;
}
/*lo usamos para ver si hay un proceso activo*/
var enProceso = false;
/*Creamos el objeto XMLHttpRequest*/
var http = getHTTPObject();
/*lo usamos para ver si el formulario esta bien completado*/
var varvalidadorllenado = false;
/*lo usamos para mantener temporalmente los datos del cliente*/
var datoscliente = new Array(15);
var valormaximoentabla = 0;

function enviosegundoplano(url, parametrosdeurl) {
    if (!enProceso && http) {
        http.open("POST", url, true);
        http.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        http.onreadystatechange = handleHttpResponse;
        enProceso = true;
        http.send(parametrosdeurl);
    }
}

/*La siguiente funcion captura la informacion de Retorno */
function handleHttpResponse() {
    if (http.readyState == 4) {
        if (http.status == 200) {
            if (http.responseText.indexOf('invalid') == -1) {
                results = http.responseText.split(";");
                varlargodecadena = results.length;
                enProceso = false;
                var vardatarecuperada = "";
                var varestringx = "";
                /*Recibe la orden para cerrar la interrfaz*/
                if (results[0] == "000") {
                    if (results[1] == "NoActiva") {
                        funmensajeinformativo('Atencion!', '#ff0000', '#ffffff', 'La sesion esta Cerrada<br>tras 20 Minutos sin actividad', 'warning', '#ff0000');
                        window.setTimeout(function(){
                            CerrarMensaje();
                        }, 2500);
                        window.setTimeout(function(){
                            funconstructor001();
                        }, 2550);
                    }
                }

                if (results[0] == "002") {
                    if (results[1] == "ConDatos") {
                        funmensajedeenvio();
                        /* funconstructor042(); *//* crea la estructura de la tabla del body del panel */
                        /* funconstructor062(); *//*Crea Estructura de encabezado para Tabla de Codigos de Articulos*/
                        funrecorrerdataparadatatable('idtablalistado', 'idfilaheadtablalistado', 'idbodytablalistado', results[2]);
                        funiconoentabla('idtablalistado', 5, 'fas fa-siren-on', 'color:red;font-size:14px', 'Alarma', '0');
                        funiconoentabla('idtablalistado', 5, 'fas fa-siren fa-3x', 'color:green;font-size:14px', 'Normal', '1');
                        funasignafuncionentabla('idbodytablalistado', 6, 'link004', 'fa fa-search-plus', 'Editar','font-size:14px');
                        $('#idtablalistado').dataTable({
                            columnDefs: [ { orderable: false, targets: [ 5, 6 ] } ],
                            pageLength: -1,
                            lengthMenu: [[25, 50, 100, -1], [25, 50, 100, "Todos"]],
                            "language": {
                                "lengthMenu": "Mostrar _MENU_ registros por pagina",
                                "zeroRecords": "No se encontraron resultados en su Busqueda",
                                "searchPlaceholder": "Dato a Buscar",
                                "info": "Mostrar desde el registro _START_ al registro _END_ ",
                                "infoEmpty": "No Existen registros",
                                "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                                "search": "Buscar:",
                                "paginate": {
                                    "first": "Primero",
                                    "last": "Ultimo",
                                    "next": "Siguiente",
                                    "previous": "Anterior"
                                },
                            "scrollX": true
                            }
                        });
                        /*funlanzarDatatable('IDTablaListado');*/

                    } else {
                        funmensajedeenvio();
                        document.getElementById('idcaptiontablalistado').innerHTML = 'Codigos de Articulos [0]';
                    }
                };

                if (results[0] == "004") {
                    if (results[1] == "ConDatos") {
                        funmensajedeenvio();
                        abrirmodalformulario();
                        funconstructor006();
                        funconstructor007();
                        funrecorrerdataparadatatable('idtablalistadodetalle', 'idfilaheadtablalistadodetalle', 'idbodytablalistadodetalle', results[2]);
                        funiconoentabla('idtablalistadodetalle', 7, 'fas fa-siren-on', 'color:red;font-size:14px', 'Alarma', '0');
                        funiconoentabla('idtablalistadodetalle', 7, 'fas fa-siren fa-3x', 'color:green;font-size:14px', 'Normal', '1');
                    } else {
                        funmensajedeenvio();
                        document.getElementById('idcaptiontablalistadodetalle').innerHTML = 'Codigos de Articulos [0]';
                    }
                };

                if (results[0] == "005") {
                    if (results[1] == "ConDatos") {
                        funmensajedeenvio();
                        /* funconstructor042(); *//* crea la estructura de la tabla del body del panel */
                        /* funconstructor062(); *//*Crea Estructura de encabezado para Tabla de Codigos de Articulos*/
                        funrecorrerdataparadatatable('idtablalistado', 'idfilaheadtablalistado', 'idbodytablalistado', results[2]);

                        funasignafuncionentabla('idbodytablalistado', 1, 'link004', 'fas fa-edit', 'Editar','font-size:14px');
                        funiconoentabla('idtablalistado', 6, 'fas fa-times-square', 'color:red;font-size:14px', 'Deshabilitado', '0');
                        funiconoentabla('idtablalistado', 6, 'fas fa-check-square', 'color:green;font-size:14px', 'Habilitado', '1');

                        funiconoentabla('idtablalistado', 7, 'fas fa-siren-on', 'color:red;font-size:14px', 'Alarma', '0');
                        funiconoentabla('idtablalistado', 7, 'fas fa-siren fa-3x', 'color:green;font-size:14px', 'Normal', '1');
                        funasignafuncionentabla('idbodytablalistado', 8, 'link004', 'fas fa-book', 'Editar','font-size:14px');
                        $('#idtablalistado').dataTable({
                            columnDefs: [ { orderable: false, targets: [ 1, 6, 7, 8 ] } ],
                            pageLength: -1,
                            lengthMenu: [[25, 50, 100, -1], [25, 50, 100, "Todos"]],
                            "language": {
                                "lengthMenu": "Mostrar _MENU_ registros por pagina",
                                "zeroRecords": "No se encontraron resultados en su Busqueda",
                                "searchPlaceholder": "Dato a Buscar",
                                "info": "Mostrar desde el registro _START_ al registro _END_ ",
                                "infoEmpty": "No Existen registros",
                                "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                                "search": "Buscar:",
                                "paginate": {
                                    "first": "Primero",
                                    "last": "Ultimo",
                                    "next": "Siguiente",
                                    "previous": "Anterior"
                                },
                            "scrollX": true
                            }
                        });
                        /*funlanzarDatatable('IDTablaListado');*/

                    } else {
                        funmensajedeenvio();
                        document.getElementById('idcaptiontablalistado').innerHTML = 'Codigos de Articulos [0]';
                    }
                };

                /*recupera los tipos de sensores para el formulario de registro de nuevo sensor*/
                if (results[0] == "006") {
                    if (results[1] == "ConDatos") {

                        funmensajedeenvio();
                        abrirmodalformulario();
                        funconstructor010();
                        funrecorrerdatadeselect('idselect001funcons010', results[2]);
                        $('#idinput001funcons010').click();

                    } else {
                        funmensajedeenvio();
                        document.getElementById('idcaptiontablalistado').innerHTML = 'Codigos de Articulos [0]';
                    }
                };

            }
        }
    }
}

