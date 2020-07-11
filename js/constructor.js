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
            $('#iddivcontainerfuncon001').append('<div id="iddivcardfuncons001" class="card"></div>');
                $('#iddivcontainerfuncon001').append('<img src="images/SmallLogo.png" class="card-img-top" alt="Brainiac"></img>');
                $('#iddivcardfuncons001').append('<div id="iddivcardheaderfuncon001" class="card-header">Formulario Acceso</div>');

                $('#iddivcardfuncons001').append('<div id="iddivcardbodyfuncon001" class="card-body">Formulario Cuerpo</div>');

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
    document.getElementById('IDInputUsuario').focus();
    /*fin de la instruccion*/
}