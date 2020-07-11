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