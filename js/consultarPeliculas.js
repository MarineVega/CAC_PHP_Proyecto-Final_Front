// Cuando el DOM se cargue
document.addEventListener('DOMContentLoaded', async () => {
    // Realizamos una petición fetch a esta API para obtener todas las películas de la base; 
    // configuración de options, es un get y no necesita body

    const options = {
        method : 'GET',
        headers : {
           'Content-Type': 'application/json'
        }
    };

    const response = await fetch('http://localhost/CAC_PHP_API/peliculas', options);
    const data = await response.json();
    //console.log(data);

    const peliculas = data;

    // Obtengo el tbody de la tabla
    const tbody = document.getElementById('bodyTablePeliculas');
    // Recorre todas las películas
    peliculas.forEach(pelicula => {
        // crea un tr
        const tr = document.createElement('tr');

        const idPelicula = document.createElement('td');
        idPelicula.textContent = pelicula.id_pelicula

        // crea un td con el tículo de la película
        const tdTitulo = document.createElement('td');
        tdTitulo.textContent = pelicula.titulo;

        // crea un td con el genero de la película
        const tdGenero = document.createElement('td');
        tdGenero.textContent = pelicula.genero;
        
        // crea un td con la duración de la película
        const tdDuracion = document.createElement('td');
        tdDuracion.textContent = pelicula.duracion;

        // crea un td con el director de la película
        const tdDirector = document.createElement('td');
        tdDirector.textContent = pelicula.director;

        // crea un td con el reparto de la película
        const tdReparto = document.createElement('td');
        tdReparto.textContent = pelicula.reparto;

        // crea un td con la sinopsis de la película
        const tdSinopsis = document.createElement('td');
        tdSinopsis.textContent = pelicula.sinopsis;

        // crea un td con la imagen de la película
        const tdImagen = document.createElement('td');
        const img = document.createElement('img');
        img.src = '../assets/img/' + pelicula.imagen;        
        img.width = '300';
        img.alt = 'pelicula.titulo';
        tdImagen.appendChild(img);
        // agrega la clase a la imagen para que se vea mejor con bootstrap fluid thumbnail
        img.classList.add('img-fluid');
        img.classList.add('img-thumbnail');

        // añade las td al tr
        tr.appendChild(idPelicula);
        tr.appendChild(tdTitulo);
        tr.appendChild(tdGenero);
        tr.appendChild(tdDuracion);
        tr.appendChild(tdDirector);
        tr.appendChild(tdReparto);
        tr.appendChild(tdSinopsis);
        tr.appendChild(tdImagen);

        // añade el tr al body
        tbody.appendChild(tr);
    
    });



});