function crearCookie(nombre, valor, expira){
    
    var fecha = new Date();
    fecha.setTime(fecha.getTime()+(expira*24*60*60*1000));
    
    var expire = "expires="+fecha.toUTCString();
    
    document.cookie = nombre + "=" + valor + ";" + expire + ";path=/";
    
}
function leerCookie(nombre){
    
    var keyValue = document.cookie.match("(^|;) ?" + nombre + "=([^;]*)(;|$)");
    if (keyValue) {
        return keyValue[2];
    } else {
        return null;
    }
}
function borrarCookie(nombre){
    document.cookie = nombre + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
}

function salir(){
    
    borrarCookie("usuario");
    borrarCookie("password");
    pInicio();
    
}
function pInicio(){
    
        document.getElementById("tabs").style.display = "inline";
        let forms = document.getElementsByTagName("forms");
        for(let c = 0 ; c < forms.length ; c++) forms[c].style.display = 'inline';
        document.getElementById("registrado").style.display = 'none';
        
        let inputs = document.getElementsByTagName("input");
        for(let c = 0 ; c < inputs.length ; c++) inputs[c].value = "";
    
}
function registrado(){
    
        document.getElementById("tabs").style.display = "none";
        let forms = document.getElementsByTagName("forms");
        for(let c = 0 ; c < forms.length ; c++) forms[c].style.display = 'none';
        document.getElementById("registrado").style.display = 'inline';
        if(document.cookie) document.getElementById("saludo").innerHTML = "Hola " + leerCookie("usuario");
    
}