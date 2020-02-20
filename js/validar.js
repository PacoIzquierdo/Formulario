// Añadir eventos una vez haya cargado la página, comprobación de si existe usuario logueado  1234AaBc
window.onload = iniciar;
function iniciar() {

    borrarError();
    if(document.cookie == ""){
        document.getElementById("registro").addEventListener("click", validarRegistro,false);
        document.getElementById("logIn").addEventListener("click", validarLogIn,false);
    }
    else registrado();

}
// Usuarios para comprobar que funciona el login sin necesidad de registrar uno nuevo
var users = [];
var passwords = [];
// Comprobar que el formulario de registro esté introducido correctamente
function validarRegistro(e){

    borrarError();
    e.preventDefault()
    if(valNombre() && valApellido() && valLogForm() && valContr() && valCContr()) {
        
        alert("Se ha registrado");
        users[document.getElementById("logForm").value] = document.getElementById("name").value;
        passwords.push(document.getElementById("contr").value);
        crearCookie(document.getElementById("logForm").value, document.getElementById("name").value, 1);
        registrado(document.getElementById("logForm").value);
        return true;
    
   }
    
    else e.preventDefault();

}

// Comprobar que el formulario de login esté introducido correctamente
function validarLogIn(e){
    
    borrarError();
    var usuario = document.getElementById("usuario");
    var userV = usuario.value;
    var contrL = document.getElementById("contrLog").value;
    e.preventDefault()
    if(users[userV] != "" && passwords.includes(contrL)) {
        
        alert("Se ha logueado");
        crearCookie(userV, users[userV], 1);
        registrado(userV);
        return true;
        
    }
    
    else {
     
        errorL(usuario, "No encontrado");
        e.preventDefault();
        
    }
}

// Validaciones de campos de los formularios
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

// Añadir errores al introducir de manera incorrecta un valor en el formulario de registro
function error(elemento, mensaje){
    
    document.getElementById("mensError").innerHTML = mensaje;
    elemento.className = "error";
    elemento.focus();
    
}
// Añadir errores al introducir de manera incorrecta un valor en el formulario de login
function errorL(elemento, mensaje){
    
    document.getElementById("mensError1").innerHTML = mensaje;
    elemento.className = "error";
    elemento.focus();
    
}

// Limpiar los errores al volver a mandar el formulario para comprobar si sonc correctos
function borrarError() {
    
    var formulario = document.forms[0];
    for(var c = 0 ; c < formulario.elements.length ; c++) formulario.elements[c].className = "";
        
}