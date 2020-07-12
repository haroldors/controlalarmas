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
/*     document.body.style.background = "#000000 url('images/Fondo001.jpg')";
    document.body.paddingTop = "80px";
        $('body').append('<nav id="idnavbarfun002" class="navbar navbar-default navbar-fixed-top navbar-inverse" role="navigation"></nav>');
            $('#idnavbarfun002').append('<div class="navbar-header" id="iddivnavbarheaderfun002"></div>');
                $('#iddivnavbarheaderfun002').append('<button id="buttonnavbarheaderfun002" type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse"></button>');
                    $('#buttonnavbarheaderfun002').append('<span class="sr-only">Desplegar Navegacion</span>');
                    $('#buttonnavbarheaderfun002').append('<span class="icon-bar"></span>');
                    $('#buttonnavbarheaderfun002').append('<span class="icon-bar"></span>');
                    $('#buttonnavbarheaderfun002').append('<span class="icon-bar"></span>');
                $('#iddivnavbarheaderfun002').append('<a class="navbar-brand" href="#">Brainiac</a>');
            $('#idnavbarfun002').append('<div class="collapse navbar-collapse navbar-ex1-collapse" id="IDBarraMenuSuperior"></div>');
                $('#IDBarraMenuSuperior').append('<ul class="nav navbar-nav" id="IDMenuSuperior"></ul>');
                    $('#IDMenuSuperior').append('<li id="IDMenuSuperior001"><a href="#" onclick="link001()"><i class="fa fa-cog fa-1x" aria-hidden="true"></i> Panel</a></li>');
                    $('#IDMenuSuperior').append('<li id="IDMenuSuperior002"><a href="#" onclick="link002()"><i class="fa fa-tty fa-1x" aria-hidden="true"></i> Despacho</a></li>');
                    $('#IDMenuSuperior').append('<li id="IDMenuSuperior003"><a href="#" onclick="link049()"><i class="fa fa-truck fa-1x" aria-hidden="true"></i> Logistica</a></li>');
                    $('#IDMenuSuperior').append('<li id="IDMenuSuperior004"><a href="#" onclick="link068()"><i class="fa fa-file-text-o fa-1x" aria-hidden="true"></i> Validacion</a></li>');
                    $('#IDMenuSuperior').append('<li id="IDMenuSuperior005"><a href="#" onclick="link075()"><i class="fa fa-line-chart fa-1x" aria-hidden="true"></i> Reportes</a></li>');
                    $('#IDMenuSuperior').append('<li id="IDMenuSuperior006"><a href="#" onclick="funsalir()"><span class="glyphicon glyphicon-off"> Salir</span></a></li>');
 */

    $('body').append('<nav id="idnavbarfuncons002" class="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark"></nav>');
        $('#idnavbarfuncons002').append('<button id="idbuttonfuncons002" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation"></button>');
            $('#idbuttonfuncons002').append('<span class="navbar-toggler-icon"></span>');
        $('#idnavbarfuncons002').append('<div id="iddivcollapsefuncons002" class="collapse navbar-collapse" id="navbarTogglerDemo01"></div>');
            $('#iddivcollapsefuncons002').append('<a class="navbar-brand" href="#">Brainiac</a>    ');
            $('#iddivcollapsefuncons002').append('<ul id="idul001funcons002" class="navbar-nav mr-auto mt-2 mt-lg-0"></ul>');
                $('#idul001funcons002').append('<li class="nav-item"><a class="nav-link" href="#"><i class="fas fa-cog"></i> Panel</a></li>');
                $('#idul001funcons002').append('<li class="nav-item" id="idlimonitoreofuncons002"><i class="fas fa-siren-on"></i> Monitoreo</li>');
                /* $('#idulfuncons002').append('<li class="nav-item"><a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a></li>'); */
            
            $('#iddivcollapsefuncons002').append('<ul id="idul002funcons002" class="navbar-nav my-2 my-lg-0"></ul>');
                $('#idul002funcons002').append('<li class="nav-item"><a class="nav-link" href="#"><i class="fas fa-power-off"></i> Cerrar</a></li>');


    /*Fin de la creacion de la Barra Superior*/


    /*se crea el contenedor del cuerpo del sistema*/
    $('body').append('<div id="iddivcontainerfluid001funcons002" class="container-fluid"  style="z-index: 1041"></div>');
        $('#iddivcontainerfluid001funcons002').append('<div id="iddivcontainerfluid002funcons002" class="container-fluid"></div>');    
            $('#iddivcontainerfluid002funcons002').append('<div id="iddivrow001funcons002" class="row"></div>');

                $('#iddivrow001funcons002').append('<div class="col-xs-12 col-sm-3" id="idcolumnaderechafuncons002"></div>');
                    $('#idcolumnaderechafuncons002').append('<div id="iddivcardfuncons002" class="card" style="width: 18rem;"></div>');
                        $('#iddivcardfuncons002').append('<div class="card-header">PANEL</div>');
                        $('#iddivcardfuncons002').append('<ul id="idulpanelderecho" class="list-group list-group-flush"></ul>');
                            $('#idulpanelderecho').append('<li class="list-group-item"><i class="fas fa-book"></i> Historico Conexiones</li>');
                            $('#idulpanelderecho').append('<li class="list-group-item"><i class="fas fa-users-cog"></i> Administracion Usuarios</li>');
                            $('#idulpanelderecho').append('<li class="list-group-item"><i class="fas fa-wrench"></i> Administracion Sensores</li>');

                $('#iddivrow001funcons002').append('<div class="col-xs-12 col-sm-9" id="idcolumnaizquierdafuncons002"></div>');
                    $('#idcolumnaizquierdafuncons002').append('<div id="iddivcardizquierdafuncons002" class="card"></div>');
                        $('#iddivcardizquierdafuncons002').append('<div id="iddivcardheaderfuncons002" class="card-header">En Desarrollo ...</div>');
                        $('#iddivcardizquierdafuncons002').append('<div id="iddivcardbodyfuncons002" class="card-body">En Desarrollo ...</div>');
    /*fin de la creacion del contenedor del cuerpo*/

    /*se crea la estructura para el Modal del Formulario*/
    $('body').append('<div class="modal" id="IDModalFormulario" tabidex="-1" role="dialog" aria-labelledy="miModalTitulo" aria-hidden="true" style="z-index: 1042"></div>');
        $('#IDModalFormulario').append('<div class="modal-dialog modal-lg"><div id="IDModalFormularioModalContent" class="modal-content"></div></div>');
            $('#IDModalFormularioModalContent').append('<div class="modal-header" id="IDModalFormularioheader" style="background-color:#dedede"></div>');
                $('#IDModalFormularioheader').append('<button type="button" class="close" data-dismiss="modal" aria-hidden="true">X</button>');
                $('#IDModalFormularioheader').append('<h4 class="modal-title" id="IDModalFormularioTitulo">Grafica</h4>');
            $('#IDModalFormularioModalContent').append('<div class="modal-body" id="IDModalFormulariobody"></div>');
            $('#IDModalFormularioModalContent').append('<div class="modal-footer" id="IDModalFormulariofooter" style="background-color:#dedede"></div>');
                $('#IDModalFormulariofooter').append('<button type="button" class="btn btn-info" data-dismiss="modal">Cerrar</button>');
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

    document.getElementById('idcaptiontablalistado').innerHTML = 'Listado de Reportes de Sensores';
    document.getElementById('idheadtablalistado').innerHTML = '';
    $('#idheadtablalistado').append('<tr id="idfilaheadtablalistado" class="thead-dark"></tr>');
        $('#idfilaheadtablalistado').append('<th>Item</th>');
        $('#idfilaheadtablalistado').append('<th>ID</th>');
        $('#idfilaheadtablalistado').append('<th>Sensor</th>');
        $('#idfilaheadtablalistado').append('<th>Fecha</th>');      
        $('#idfilaheadtablalistado').append('<th>IP</th>');
        $('#idfilaheadtablalistado').append('<th>-</th>');
    document.getElementById('idfoottablalistado').innerHTML = '';
    $('#idfoottablalistado').append('<tr id="idfilafoottablalistado" class="thead-dark"></tr>');
        $('#idfilafoottablalistado').append('<th>Item</th>');
        $('#idfilafoottablalistado').append('<th>ID</th>');
        $('#idfilafoottablalistado').append('<th>Sensor</th>');
        $('#idfilafoottablalistado').append('<th>Fecha</th>');      
        $('#idfilafoottablalistado').append('<th>IP</th>');
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