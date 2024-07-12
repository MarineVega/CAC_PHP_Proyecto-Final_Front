function esValidoEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}


function mostrarMensajeError(elementId, mensaje) {
    var errorElemento = document.getElementById(elementId);    
    errorElemento.innerText = mensaje;
}

function resetMesajesError(){
    // levanto todos los elementos que tengan la clase mensaje-error
    let errorElementos = document.querySelectorAll('.mensaje-error');
    errorElementos.forEach(function(elemento) {
        elemento.innerText = "";
    });
}

const validarFormulario = () => {
    document.getElementById('formRegistro').addEventListener('submit', function(event) {
        // Evito que se envíe el formulario automáticamente
        event.preventDefault();
    
        // Reseteo los mensajes de error
        resetMesajesError();
        
        // Valido los campos
        let nombre = document.getElementById('nombre').value.trim();
        let apellido = document.getElementById('apellido').value.trim();        
        let email = document.getElementById('email').value.trim();  //trim elimina espacios
        let contrasenia = document.getElementById('contrasenia').value.trim();
        let nacimiento = document.getElementById('nacimiento').value;
        //let pais = document.getElementById('nacimiento').value;
        let comentario = document.getElementById('comentario').value.trim();

        let esValido = true;
      
        if (nombre === "") {
            mostrarMensajeError("nombreError", "Por favor ingrese nombre.");
            esValido = false;
        }

        if (apellido === "") {
            mostrarMensajeError("apellidoError", "Por favor ingrese apellido.");
            esValido = false;
        }

        if (email === "") {
            mostrarMensajeError("emailError", "Por favor ingrese un correo electrónico válido.");
            esValido = false;
        }
        
        if (contrasenia.length < 8) {        
            mostrarMensajeError("contraseniaError", "La contraseña debe tener al menos 8 caracteres.");
            esValido = false;
        }

        if (nacimiento === "") {
            mostrarMensajeError("nacimientoError", "Por favor ingrese una fecha de nacimiento válida.");
            esValido = false;
        }

        if (esValido) {
            alert('¡Formulario enviado correctamente!');
        }
    });  
};

document.addEventListener("DOMContentLoaded", validarFormulario);



