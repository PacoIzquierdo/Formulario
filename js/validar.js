function iniciar() {

    if(document.cookie == ""){
        document.getElementById("registro").addEventListener("click", validarRegistro,false);
        document.getElementById("logIn").addEventListener("click", validarLogIn,false);
    }
    else registrado();
}

window.onload = iniciar;

var users = ["a@a.a"];
var passwords = ["1234"];

function validarRegistro(e){

    borrarError();e.preventDefault()
    if(valNombre() && valApellido() && valLogForm() && valContr() && valCContr()) {
        
        alert("Se ha registrado");
        users.push(document.getElementById("logForm").value);
        passwords.push(document.getElementById("contr").value);
        crearCookie("usuario", document.getElementById("logForm").value, 1);
        crearCookie("password", document.getElementById("contr").value, 1);
        document.getElementById("saludo").innerHTML = "Hola " + leerCookie("usuario");
        registrado();
        return true;
    
    }
    
    else e.preventDefault();

}

function validarLogIn(e){
    
    var usuario = document.getElementById("usuario");
    var userV = usuario.value;
    var contrL = document.getElementById("contrLog").value;
    e.preventDefault()
    if(users.includes(userV) && passwords.includes(contrL)) {
        
        alert("Se ha logueado");
        crearCookie("usuario", document.getElementById("usuario").value, 1);
        crearCookie("password", document.getElementById("contrLog").value, 1);
        document.getElementById("saludo").innerHTML = "Hola " + leerCookie("usuario");
        registrado();
        return true;
        
    }
    
    else {
     
        errorL(usuario, "E-mail o contraseña inválidos");
        e.preventDefault();
        
    }
}

function valNombre(){
    
    var elemento = document.getElementById("name");
    
    if(!elemento.checkValidity()){
        
        if(elemento.validity.valueMissing) error(elemento, "Nombre requerido");
        if(elemento.validity.patternMismatch) error(elemento, "Nombre mal introducido");
        return false;
        
    }
    
    elemento.className = "valido";
    return true;
    
}
function valApellido(){
    
    var elemento = document.getElementById("apellido");
    
    if(!elemento.checkValidity()){
        
        if(elemento.validity.valueMissing) error(elemento, "Apellido requerido");
        if(elemento.validity.patternMismatch) error(elemento, "Apellido mal introducido");
        return false;
        
    }
    
    elemento.className = "valido";
    return true;
    
}
function valLogForm(){
    
    var elemento = document.getElementById("logForm");
    
    if(!elemento.checkValidity()){
        
        if(elemento.validity.valueMissing) error(elemento, "E-mail requerido");
        if(elemento.validity.typeMismatch) error(elemento, "E-mail mal introducido");
        return false;
        
    }
    
    if(users.includes(elemento.value)){
        
        error(elemento, "E-mail ya registrado");
        return false;
        
    }
    
    elemento.className = "valido";
    return true;
    
}
function valContr(){
    
    var elemento = document.getElementById("contr");
    
    if(!elemento.checkValidity()){
        
        if(elemento.validity.valueMissing)error(elemento, "Contraseña requerida");
        if(elemento.validity.patternMismatch) error(elemento, "Contraseña mal introducida");
        return false;
        
    }
    
    elemento.className = "valido";
    return true;
    
}
function valCContr(){
    
    var elemento = document.getElementById("cContr");
    
    if(!elemento.checkValidity()){
        
        if(elemento.validity.valueMissing)error(elemento, "Confirmación de contraseña requerida");
        if(elemento.validity.patternMismatch) error(elemento, "Contraseña mal introducida");
        
        return false;
        
    }
    
    if(elemento.value != document.getElementById("contr").value){
        console.log(elemento.value +" "+ document.getElementById("contr").value)
        error(elemento, "Las contraseñas no coinciden");
        return false;
        
    }
    
    elemento.className = "valido";
    return true;
    
}

function error(elemento, mensaje){
    
    document.getElementById("mensError").innerHTML = mensaje;
    elemento.className = "error";
    elemento.focus();
    
}
function errorL(elemento, mensaje){
    
    document.getElementById("mensError1").innerHTML = mensaje;
    elemento.className = "error";
    elemento.focus();
    
}

function borrarError() {
    
    var formulario = document.forms[0];
    for(var c = 0 ; c < formulario.elements.length ; c++) formulario.elements[c].className = "";
        
}

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
    
}