// Datos de la API
const API_SERVER = 'https://api.themoviedb.org/3';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTJjYTAwZDYxZWIzOTEyYjZlNzc4MDA4YWQ3ZmNjOCIsInN1YiI6IjYyODJmNmYwMTQ5NTY1MDA2NmI1NjlhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4MJSPDJhhpbHHJyNYBtH_uCZh4o0e3xGhZpcBIDy-Y8'
    }
};

function crearTarjetaPelicula(pelicula) {
    const card = document.createElement('div');
    card.classList.add('peliculasAclamadas');

    const cardInner = document.createElement('div');
    cardInner.classList.add('peliculas');

    const cardImg = document.createElement('img');
    cardImg.classList.add('caja-img');
    cardImg.src = `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`;
    cardImg.alt = pelicula.title;
    cardImg.loading = 'lazy';

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = pelicula.title;

    cardBody.appendChild(cardTitle);
    cardInner.appendChild(cardImg);
    cardInner.appendChild(cardBody);
    card.appendChild(cardInner);

    return card;
}

const cargarPeliculas = async (page = 1) => {
    try {
        const response = await fetch(`${API_SERVER}/movie/popular?page=${page}`, options);
        const data = await response.json();
        const movies = data.results;
        const peliculasSection = document.getElementById('peliculasSection');
        peliculasSection.innerHTML = ''; // Limpia la sección antes de agregar las nuevas tarjetas

        movies.forEach(movie => {
            const peliculaCard = crearTarjetaPelicula(movie);
            peliculasSection.appendChild(peliculaCard);
        });
    } catch (error) {
        console.error('Error al cargar las películas:', error);
    }
};

// Llama a la función para cargar las películas cuando la página se cargue
document.addEventListener('DOMContentLoaded', () => {
    cargarPeliculas();
});
