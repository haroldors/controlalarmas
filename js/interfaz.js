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
            }
        }
    }
}

