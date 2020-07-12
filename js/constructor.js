/*Esta funcion crea la estructiura de login*/
function funconstructor001() {
    /*se construye la estructura marco*/
    document.body.style.background = "#000000 url('images/fondo001.jpg')";

    /*la siguiente cadena de instrucciones crea el la estructura de login*/
    document.body.innerHTML="";
/*     $('body').append('<div id="iddivcontainerfuncon001" class="container col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6 col-lg-offset-4 col-lg-4" style="padding-top:100px"></div>');
        $('#iddivcontainerfuncon001').append('<br><div id="iddivpaneldefaultfuncon001" class="panel panel-default"></div>');
            $('#iddivpaneldefaultfuncon001').append('<div id="iddivpanelheadingfuncon001" class="panel-heading"></div>');
                $('#iddivpanelheadingfuncon001').append('<h3>Control de Acceso</h3>');
            $('#iddivpaneldefaultfuncon001').append('<div id="iddivpanelbodyfuncon001" class="panel-body"></div>');
                $('#iddivpanelbodyfuncon001').append('<div id="iddivformgroup001funcon001" class="form-group"></div>');
                    $('#iddivformgroup001funcon001').append('<div id="idinputgroup001funcon001" class="input-group"></div>');
                        $('#idinputgroup001funcon001').append('<span class="input-group-addon"><i class="glyphicon glyphicon-user" style="width:auto"></i></span><input type="text" id="IDInputUsuario" runat="server" class="form-control input-lg" name="user" placeholder="Usuario" required></input>');
                $('#iddivpanelbodyfuncon001').append('<div id="iddivformgroup002funcon001" class="form-group"></div>');
                    $('#iddivformgroup002funcon001').append('<div id="idinputgroup002funcon001" class="input-group"></div>');
                        $('#idinputgroup002funcon001').append('<span class="input-group-addon"><i class="glyphicon glyphicon-lock" style="width:auto"></i></span><input type="password" id="IDInputPassword" runat="server" class="form-control input-lg" name="user" placeholder="Password" onkeydown="return ValidarEnter(event)" required></input>');
                $('#iddivpanelbodyfuncon001').append('<button id="BotonValidar" runat="server" class="btn btn-info btn-lg" style="width: 100%" onclick="fun_login()">Validar</button>'); */
        $('body').append('<div id="iddivcontainerfuncon001" class="container col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6 col-lg-offset-4 col-lg-4" style="padding-top:100px"></div>');
            $('#iddivcontainerfuncon001').append('<div id="iddivcardfuncons001" class="card text-white bg-dark mb-3" style="max-width: 36rem;"></div>');
                /* $('#iddivcardfuncons001').append(''); */
                $('#iddivcardfuncons001').append('<div id="iddivcardheaderfuncon001" class="card-header text-center"></div>');
                    $('#iddivcardheaderfuncon001').append('<div class="text-center"><img src="images/SmallLogo.png" width="166" height="100" class="rounded" alt="Brainiac"></img></div>');

                $('#iddivcardfuncons001').append('<div id="iddivcardbody001funcon001" class="card-body"></div>');
                    $('#iddivcardbody001funcon001').append('<form id="idformfuncons001"></form>');
                        $('#idformfuncons001').append('<div id="idformrow001funcon001" class="form-group row"></div>');
                            $('#idformrow001funcon001').append('<label for="idinputusuariofuncons001" class="col-sm-4 col-form-label">Usuario:</label>');
                            $('#idformrow001funcon001').append('<div id="iddivinput001funcons001" class="col-sm-8"></div>');
                                $('#iddivinput001funcons001').append('<input type="text" class="form-control" id="idinputusuariofuncons001" placeholder="Ingrese Usuario...">');
                        $('#idformfuncons001').append('<div id="idformrow002funcon001" class="form-group row"></div>');
                            $('#idformrow002funcon001').append('<label for="iddivinput002funcons001" class="col-sm-4 col-form-label">Password:</label>');
                            $('#idformrow002funcon001').append('<div id="iddivinput002funcons001" class="col-sm-8"></div>');
                                $('#iddivinput002funcons001').append('<input type="text" class="form-control" id="idinputpasswordfuncons001" placeholder="Ingrese Password...">');                                
                        $('#idformfuncons001').append('<div id="idformrow003funcon001" class="form-group row"></div>');
                            $('#idformrow003funcon001').append('<div class="mx-auto"><button id="idbuttonaceptarfuncons001" type="button" class="btn btn-light"><i class="fas fa-arrow-alt-circle-right"></i> Aceptar</button></div>');
                $('#iddivcardfuncons001').append('<div id="iddivcardbody002funcon001" class="card-body" style="padding:0.25rem;min-height:0.5px"></div>');
                    $('#iddivcardbody002funcon001').append('<div class="row"><div class="mx-auto">Brainiac SpA <i class="fas fa-copyright"></i></div></div>');

    /*la siguiente cadena de instrucciones crea el mensaje de alertas*/
    $('body').append('<div class="modal" id="IDModalMensaje" tabidex="-1" role="dialog" aria-labelledy="miModalTitulo" aria-hidden="true"></div>');
        $('#IDModalMensaje').append('<div class="modal-dialog modal-sm"><div id="idmodalcontentfuncons001" class="modal-content"></div></div>');
            $('#idmodalcontentfuncons001').append('<div class="modal-header" id="IDModalMensajeheader" style="background-color:#dedede"></div>');
                $('#IDModalMensajeheader').append('<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button><h4 class="modal-title" id="IDModalMensajeTitulo">Grafica</h4>');
            $('#idmodalcontentfuncons001').append('<div class="modal-body" id="IDModalMensajebody"></div>');
            $('#idmodalcontentfuncons001').append('<div class="modal-footer" id="IDModalMensajefooter" style="background-color: #dedede"></div>');
                $('#IDModalMensajefooter').append('<button type="button" class="btn btn-info" data-dismiss="modal" onclick="CerrarDialogo()">Cerrar</button>');
    /*se finaliza la estructura marco*/


    /*se crea el efecto de tranparencia para esperar la carga*/
    $('body').append('<div id="IDDivProcesando001" style="display:none"></div>');
        $('#IDDivProcesando001').append('<div id="IDDivProcesando002" style="display:none" class="container"></div>');
            $('#IDDivProcesando002').append('<p style="text-align:center"><img src="images/loader.gif" width="128" heigth="128"></img></p>');
    /*fin del efecto*/

    /*se crea la estructura para contener el sonido de error*/
    $('body').append('<audio id="audio" controls style="display:none"><source type="audio/wav" src="sonidos/error.wav"></audio>');
    /*fin*/

    /*a continuacion se preselecciona el campo del Usuario*/
    document.getElementById('idinputusuariofuncons001').focus();
    /*fin de la instruccion*/
}

function funconstructor002() {

    /*se crea la barra menu superior del menu global*/
    document.body.innerHTML = "";
    $('body').append('<nav id="idnavbarfuncons002" class="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark"></nav>');
        $('#idnavbarfuncons002').append('<button id="idbuttonfuncons002" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation"></button>');
            $('#idbuttonfuncons002').append('<span class="navbar-toggler-icon"></span>');
        $('#idnavbarfuncons002').append('<div id="iddivcollapsefuncons002" class="collapse navbar-collapse" id="navbarTogglerDemo01"></div>');
            $('#iddivcollapsefuncons002').append('<a class="navbar-brand" href="#">Brainiac</a>    ');
            $('#iddivcollapsefuncons002').append('<ul id="idul001funcons002" class="navbar-nav mr-auto mt-2 mt-lg-0"></ul>');
                $('#idul001funcons002').append('<li class="nav-item"><a id="idlipanelfuncons002" class="nav-link" href="#"><i class="fas fa-cog"></i> Panel</a></li>');
                $('#idul001funcons002').append('<li class="nav-item"><a id="idlimonitoreofuncons002" class="nav-link" href="#"><i class="fas fa-siren-on"></i> Monitoreo</a></li>');            
            $('#iddivcollapsefuncons002').append('<ul id="idul002funcons002" class="navbar-nav my-2 my-lg-0"></ul>');
                $('#idul002funcons002').append('<li class="nav-item"><a id="idlicerrarfuncons002" class="nav-link" href="#"><i class="fas fa-power-off"></i> Cerrar</a></li>');
    /*Fin de la creacion de la Barra Superior*/

    /*se crea el contenedor del cuerpo del sistema*/
    $('body').append('<div id="iddivcontainerfluid001funcons002" class="container-fluid"  style="z-index: 1041"></div>');
        $('#iddivcontainerfluid001funcons002').append('<div id="iddivcontainerfluid002funcons002" class="container-fluid"></div>');    
            $('#iddivcontainerfluid002funcons002').append('<div id="iddivrow001funcons002" class="row"></div>');

                $('#iddivrow001funcons002').append('<div class="col-xs-12 col-sm-3" id="idcolumnaderechafuncons002" style="display:block"></div>');
                    $('#idcolumnaderechafuncons002').append('<div id="iddivcardfuncons002" class="card" style="width: 18rem;"></div>');
                        $('#iddivcardfuncons002').append('<div class="card-header">PANEL</div>');
                        $('#iddivcardfuncons002').append('<ul id="idulpanelderecho" class="list-group list-group-flush"></ul>');
                            $('#idulpanelderecho').append('<li class="list-group-item"><i class="fas fa-book"></i> Historico Conexiones</li>');
                            $('#idulpanelderecho').append('<li class="list-group-item"><i class="fas fa-users-cog"></i> Administracion Usuarios</li>');
                            $('#idulpanelderecho').append('<li id="idadminsensoresfuncons002" class="list-group-item"><i class="fas fa-wrench"></i> Administracion Sensores</li>');

                $('#iddivrow001funcons002').append('<div class="col-xs-12 col-sm-9" id="idcolumnaizquierdafuncons002" style="display:block"></div>');
                    $('#idcolumnaizquierdafuncons002').append('<div id="iddivcardizquierdafuncons002" class="card"></div>');
                        $('#iddivcardizquierdafuncons002').append('<div id="iddivcardheaderfuncons002" class="card-header">En Desarrollo ...</div>');
                        $('#iddivcardizquierdafuncons002').append('<div id="iddivcardbodyfuncons002" class="card-body">En Desarrollo ...</div>');
    /*fin de la creacion del contenedor del cuerpo*/

    /*se crea la estructura para el Modal del Formulario*/
    $('body').append('<div id="idmodalformulario" class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true" style="z-index: 1042"></div>');
        $('#idmodalformulario').append('<div id="idmodaldialog" class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"></div>');
            $('#idmodaldialog').append('<div id="idmodalcontent" class="modal-content"></div>');
                $('#idmodalcontent').append('<div id="idmodalheader" class="modal-header"></div>');
                    $('#idmodalheader').append('<h5 id="idmodaltitle" class="modal-title" id="staticBackdropLabel">Modal title</h5>');
                    $('#idmodalheader').append('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
                $('#idmodalcontent').append('<div id="idmodalbody" class="modal-body"></div>');
                $('#idmodalcontent').append('<div id="idmodalfooter" class="modal-footer"></div>');
                    $('#idmodalfooter').append('<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>');
    /*fin*/
    
    /*se crea el efecto de tranparencia para esperar la carga*/
    $('body').append('<div id="iddivprocesando001" style="position: fixed;display:none;z-index: 1043"></div>');
    $('#iddivprocesando001').append('<div id="iddivprocesando002" style="display:none" class="container"></div>');
        $('#iddivprocesando002').append('<p style="text-align:center"><img src="images/loader.gif" width="128" heigth="128"></img></p>');
    /*fin del efecto*/

    /*se crea el mensaje de alerta*/
    $('body').append('<div class="modal" id="IDModalMensaje" tabidex="-1" role="dialog" aria-labelledy="miModalTitulo" aria-hidden="true" style="z-index: 1044"></div>');
        $('#IDModalMensaje').append('<div class="modal-dialog modal-sm"><div id="idmodalcontentfuncons002" class="modal-content"><div class="modal-header" id="IDModalMensajeheader" style="background-color:#dedede"></div></div></div>');
            $('#IDModalMensajeheader').append('<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><h4 class="modal-title" id="IDModalMensajeTitulo">Grafica</h4></button>');
            $('#idmodalcontentfuncons002').append('<div class="modal-body" id="IDModalMensajebody"></div>');
            $('#idmodalcontentfuncons002').append('<div class="modal-footer" id="IDModalMensajefooter" style="background-color:#dedede"></div>');
                $('#IDModalMensajefooter').append('<button type="button" class="btn btn-info" data-dismiss="modal">Cerrar</button>');
    /*fin de la estructura de Mensaje */
}

/* contruye la estructura de la tabla */
function funconstructor003() {    
    document.getElementById('iddivcardbodyfuncons002').innerHTML = '';
    $('#iddivcardbodyfuncons002').append('<div id="idtableresponsivefuncons003" class="table-responsive-sm"></div>');
    $('#idtableresponsivefuncons003').append('<table id="idtablalistado" class="table table-hover table-bordered table-condensed table-sm"></table>');
        $('#idtablalistado').append('<caption id="idcaptiontablalistado"></caption>');
        $('#idtablalistado').append('<thead id="idheadtablalistado"></thead>');
        $('#idtablalistado').append('<tbody id="idbodytablalistado"></tbody>');
        $('#idtablalistado').append('<tfoot id="idfoottablalistado"></tbody>');
}

/* construye la estructura interna de la tabla de lista de sensores */
function funconstructor004() {

    document.getElementById('idcaptiontablalistado').innerHTML = 'Listado de Sensores';
    document.getElementById('idheadtablalistado').innerHTML = '';
    $('#idheadtablalistado').append('<tr id="idfilaheadtablalistado" class="thead-dark"></tr>');
        $('#idfilaheadtablalistado').append('<th>Item</th>');
        $('#idfilaheadtablalistado').append('<th>ID</th>');
        $('#idfilaheadtablalistado').append('<th>Sensor</th>');
        $('#idfilaheadtablalistado').append('<th>Tipo</th>');      
        $('#idfilaheadtablalistado').append('<th>IP</th>');
        $('#idfilaheadtablalistado').append('<th>-</th>');
        $('#idfilaheadtablalistado').append('<th>-</th>');
    document.getElementById('idfoottablalistado').innerHTML = '';
    $('#idfoottablalistado').append('<tr id="idfilafoottablalistado" class="thead-dark"></tr>');
        $('#idfilafoottablalistado').append('<th>Item</th>');
        $('#idfilafoottablalistado').append('<th>ID</th>');
        $('#idfilafoottablalistado').append('<th>Sensor</th>');
        $('#idfilafoottablalistado').append('<th>Tipo</th>');      
        $('#idfilafoottablalistado').append('<th>IP</th>');
        $('#idfilafoottablalistado').append('<th>-</th>');
        $('#idfilafoottablalistado').append('<th>-</th>');        

    document.getElementById('idbodytablalistado').innerHTML = '';

}

/* crea la barra de botones superior de la vista de reportes */
function funconstructor005() {
    document.getElementById('iddivcardheaderfuncons002').innerHTML = '';
    $('#iddivcardheaderfuncons002').append('<div id="idbtngroupfuncons005" class="btn-group" role="group" aria-label="Basic example"></div>');
        $('#idbtngroupfuncons005').append('<button id="idbuttonrefreshfuncons005" type="button" class="btn btn-secondary"><i class="fas fa-sync-alt"></i></button>');
        $('#idbtngroupfuncons005').append('<button type="button" class="btn btn-secondary"><i class="fas fa-file-csv"></i></button>');
}

/* contruye la estructura de la tabla detalle */
function funconstructor006() {    
    document.getElementById('idmodalbody').innerHTML = '';
    $('#idmodalbody').append('<div id="idtableresponsivefuncons006" class="table-responsive-sm"></div>');
    $('#idtableresponsivefuncons006').append('<table id="idtablalistadodetalle" class="table table-hover table-bordered table-condensed table-sm"></table>');
        $('#idtablalistadodetalle').append('<caption id="idcaptiontablalistadodetalle"></caption>');
        $('#idtablalistadodetalle').append('<thead id="idheadtablalistadodetalle"></thead>');
        $('#idtablalistadodetalle').append('<tbody id="idbodytablalistadodetalle"></tbody>');
        $('#idtablalistadodetalle').append('<tfoot id="idfoottablalistadodetalle"></tbody>');
}

/* construye la estructura interna de la tabla de lista detalle de reportes de sensores */
function funconstructor007() {

    document.getElementById('idcaptiontablalistadodetalle').innerHTML = 'Listado de Reporte del Sensor';
    document.getElementById('idheadtablalistadodetalle').innerHTML = '';
    $('#idheadtablalistadodetalle').append('<tr id="idfilaheadtablalistadodetalle" class="thead-dark"></tr>');
        $('#idfilaheadtablalistadodetalle').append('<th>Item</th>');
        $('#idfilaheadtablalistadodetalle').append('<th>Reporte</th>');
        $('#idfilaheadtablalistadodetalle').append('<th>ID_Sensor</th>');
        $('#idfilaheadtablalistadodetalle').append('<th>Sensor</th>');
        $('#idfilaheadtablalistadodetalle').append('<th>Tipo</th>');
        $('#idfilaheadtablalistadodetalle').append('<th>Fecha</th>');      
        $('#idfilaheadtablalistadodetalle').append('<th>IP</th>');
        $('#idfilaheadtablalistadodetalle').append('<th>-</th>');
    document.getElementById('idfoottablalistadodetalle').innerHTML = '';
    $('#idfoottablalistadodetalle').append('<tr id="idfilafoottablalistadodetalle" class="thead-dark"></tr>');
        $('#idfilafoottablalistadodetalle').append('<th>Item</th>');
        $('#idfilafoottablalistadodetalle').append('<th>Reporte</th>');
        $('#idfilafoottablalistadodetalle').append('<th>ID_Sensor</th>');
        $('#idfilafoottablalistadodetalle').append('<th>Sensor</th>');
        $('#idfilafoottablalistadodetalle').append('<th>Tipo</th>');
        $('#idfilafoottablalistadodetalle').append('<th>Fecha</th>');      
        $('#idfilafoottablalistadodetalle').append('<th>IP</th>');
        $('#idfilafoottablalistadodetalle').append('<th>-</th>');        

    document.getElementById('idbodytablalistadodetalle').innerHTML = '';

}