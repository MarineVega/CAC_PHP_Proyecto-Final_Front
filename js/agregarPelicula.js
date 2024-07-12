function mostrarMensajeError(elementId, mensaje) {
    var errorElemento = document.getElementById(elementId);    
    errorElemento.innerText = mensaje;
    e.preventDefault();
}

function resetMesajesError(){
    // levanto todos los elementos que tengan la clase error
    let errorElementos = document.querySelectorAll('.error');
    errorElementos.forEach(function(elemento) {
        elemento.innerText = "";
    });
}

// Validación de campos de formulario cuando se carga el DOM
document.addEventListener('DOMContentLoaded', () => {
    // Verificar si se tocó el botón submit del formulario del administrador
    const form = document.getElementById('formNuevaPelicula');
    form.addEventListener('submit', async (event) => {
         // Evito que se envíe el formulario automáticamente
        event.preventDefault();

        // Reseteo los mensajes de error
        resetMesajesError();

        // Obtener los valores de los campos del formulario
        // let titulo = document.getElementById('titulo').value.trim();
        // let genero = document.getElementById('genero').value.trim();
        // let duracion = document.getElementById('duracion').value.trim();
        // let director = document.getElementById('director').value.trim();
        // let reparto = document.getElementById('reparto').value.trim();
        // let sinopsis = document.getElementById('sinopsis').value.trim();
        // let imagen = document.getElementById('imagen').value;
        
        const formData = new FormData(formNuevaPelicula);

         //obtengo los valores de los inputs
         const titulo = formData.get('titulo');
         const genero = formData.get('genero');
         const duracion = formData.get('duracion');
         const director = formData.get('director');
         const reparto = formData.get('reparto');
         const sinopsis = formData.get('sinopsis');
         const imagen = formData.get('imagen');

        let esValido = true;

        // Verifico si los campos están vacíos
        //Si alguno de los campos están vacíos se muestra un mensaje de error en el dif correspondiente al input
        if (titulo === "") {
            mostrarMensajeError("titulo-error", "Por favor ingrese el título de la película.");
            esValido = false;
        }

        if (genero === "") {
            mostrarMensajeError("genero-error", "Por favor ingrese el género de la película.");
            esValido = false;
        }

        if (duracion === "") {
            mostrarMensajeError("duracion-error", "Por favor ingrese la duración de la película.");
            esValido = false;
        }

        if (director === "") {
            mostrarMensajeError("director-error", "Por favor ingrese el/los director/es de la película.");
            esValido = false;
        }

        if (reparto === "") {
            mostrarMensajeError("reparto-error", "Por favor ingrese el reparto de la película.");
            esValido = false;
        }

        if (sinopsis === "") {
            mostrarMensajeError("sinopsis-error", "Por favor ingrese la sinopsis de la película.");
            esValido = false;
        }

        if (imagen === "") {
            mostrarMensajeError("imagen-error", "Por favor ingrese la imagen de la película.");
            esValido = false;
        }

        // levanto solo el nombre del file para enviarlo a la api
        const imageName = imagen.name;
    
        //configuracion de options, es un post y necesita body
        const options = {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify({
               titulo: titulo,
               genero: genero,
               duracion: duracion,
               director: director,
               reparto: reparto,
               sinopsis: sinopsis,
               imagen: imageName
           })
    
       };
    
        //realizo la peticion fetch a la api para agregar una pelicula
        const response = await fetch('http://localhost/CAC_PHP_API/peliculas', options);
        //obtengo la respuesta
        const data = await response.json();
        //si la respuesta es correcta, muestro un mensaje de exito y limpio los inputs del formulario
        // si el codigo es 201, la pelicula se agrego correctamente
        if (response.status === 201) {
            alert('Pelicula agregada correctamente');
            formNuevaPelicula.reset();
            // que se recargue la pagina para ver la pelicula agregada
            location.reload();
        } else {
            alert('Error al agregar la pelicula');
        }

    });


});
 