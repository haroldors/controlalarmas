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

function funrecorrerdataparadatatable(vartablax, varencabezadotablax, varcuerpotablax, vardatadetablax) {
    var contador = 0;
    var varcadenaenfilasx = vardatadetablax.split("&#124");
    var varcantidaddefilas = varcadenaenfilasx.length - 1;

    do {
        funcargardataendatatable(vartablax, varencabezadotablax, varcuerpotablax, varcadenaenfilasx[contador]);
        contador++;
    } while (contador < varcantidaddefilas);
}

function funcargardataendatatable(vartablax, varencabezadotablax, varcuerpotablax, varcadenax) {

    var varestringx = varcadenax.split("&#59");
    var tabla = document.getElementById(vartablax);
    /*console.log(tabla.rows.length);*/
    var TotalFilas = tabla.rows.length - 1;

    var encabezado = document.getElementById(varencabezadotablax);
    var totalCeldas = encabezado.cells.length;

    var cuerpo = document.getElementById(varcuerpotablax);
    var tr = document.createElement('tr');
    cuerpo.appendChild(tr);
    var celda = document.createElement('td');
    var textocelda = document.createTextNode(TotalFilas);
    cuerpo.appendChild(tr);
    tr.appendChild(celda);
    celda.appendChild(textocelda);
    var cnt=0;
    for (cnt = 1; cnt < totalCeldas; cnt++) {
        celda = document.createElement('td');
        textocelda = document.createTextNode(varestringx[cnt - 1]);
        tr.appendChild(celda);
        celda.appendChild(textocelda);
    }
}

function funasignafuncionentabla(tablax, varposicionx, varfuncionx, varclasex, varaccionx, varstylex) {
    var tabla = document.getElementById(tablax);
    TotalFilas = tabla.rows.length; //asigna a la variable totalfilas la cantidad de filas de la tabladatos
    var cnt=0;
    for (cnt = 0; cnt < TotalFilas; cnt++) {
        var valorencelda = tabla.rows[cnt].cells[varposicionx].innerHTML;

        var i001 = document.createElement("i");
        i001.setAttribute('class', varclasex);
        i001.setAttribute('Title', varaccionx + ': ' + valorencelda);
        i001.setAttribute('onclick', varfuncionx + "('" + valorencelda + "')");
        i001.setAttribute('style', varstylex);

        tabla.rows[cnt].cells[varposicionx].innerHTML = "";
        tabla.rows[cnt].cells[varposicionx].style.textAlign = "center";
        tabla.rows[cnt].cells[varposicionx].appendChild(i001);

    }
}

function abrirmodalformulario() {
    $("#idmodalformulario").modal('show');
}

function funiconoentabla(tablax, varposicionx, varclassx, varstylex, vartitlex, varvalorx) {
    var tabla = document.getElementById(tablax);
    TotalFilas = tabla.rows.length; //asigna a la variable totalfilas la cantidad de filas de la tabladatos
    var cnt=0;
    for (cnt = 1; cnt < TotalFilas; cnt++) {
        if (tabla.rows[cnt].cells[varposicionx].innerHTML == varvalorx) {

            var i001 = document.createElement("i");
            i001.setAttribute('class', varclassx);
            i001.setAttribute('style', varstylex);
            i001.setAttribute('Title', vartitlex);

            tabla.rows[cnt].cells[varposicionx].innerHTML = "";
            tabla.rows[cnt].cells[varposicionx].style.textAlign = "center";

            tabla.rows[cnt].cells[varposicionx].appendChild(i001);
        }
    }
}