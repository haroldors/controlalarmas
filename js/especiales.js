function NoBack() {
    history.go(1);
    window.location.hash="no-back-button";
    window.location.hash="Again-No-back-button" //chrome
    window.onhashchange=function(){window.location.hash="no-back-button";}
    };

function funmensajedeenvio() {
    if (document.getElementById('iddivprocesando001').style.display == "none") {
        document.getElementById('iddivprocesando001').style.display = "block";
        document.getElementById('iddivprocesando002').style.display = "block";
    } else {
        document.getElementById('iddivprocesando001').style.display = "none";
        document.getElementById('iddivprocesando002').style.display = "none";
    }
} 

/*Esta Funcion envia 10 parametros*/
function funenvio10parametros(varprocesox, varparametro1x, varparametro2x, varparametro3x, varparametro4x, varparametro5x, varparametro6x, varparametro7x, varparametro8x, varparametro9x, varparametro10x) {
    var url = "log.php";

    var parametrosdeurl = "";
    parametrosdeurl = parametrosdeurl + "varproceso=" + encodeURIComponent(varprocesox);
    parametrosdeurl = parametrosdeurl + "&varparametro1=" + encodeURIComponent(varparametro1x);
    parametrosdeurl = parametrosdeurl + "&varparametro2=" + encodeURIComponent(varparametro2x);
    parametrosdeurl = parametrosdeurl + "&varparametro3=" + encodeURIComponent(varparametro3x);
    parametrosdeurl = parametrosdeurl + "&varparametro4=" + encodeURIComponent(varparametro4x);
    parametrosdeurl = parametrosdeurl + "&varparametro5=" + encodeURIComponent(varparametro5x);
    parametrosdeurl = parametrosdeurl + "&varparametro6=" + encodeURIComponent(varparametro6x);
    parametrosdeurl = parametrosdeurl + "&varparametro7=" + encodeURIComponent(varparametro7x);
    parametrosdeurl = parametrosdeurl + "&varparametro8=" + encodeURIComponent(varparametro8x);
    parametrosdeurl = parametrosdeurl + "&varparametro9=" + encodeURIComponent(varparametro9x);
    parametrosdeurl = parametrosdeurl + "&varparametro10=" + encodeURIComponent(varparametro10x);
    enviosegundoplano(url, parametrosdeurl);
}