export function renderMovieListFromMap(list, map) {
  cleanMovieList()
  list.forEach(movieId => renderElement(map.get(movieId)))
}

function buildElement({ title, poster_path, vote_average, id, recommended }) {
  const template = `
    <article class="movie ${recommended ? 'recommended' : ''}">
      <img class="movie-poster" src="//image.tmdb.org/t/p/w220_and_h330_face/${poster_path}" alt="">
      <p class="movie-title">${title}</p>
      <p class="movie-id">${id}</p>
      <span class="movie-rate">${vote_average}</span>
    </article>
  `

  // EL template es un string y debemos convertirlo en HTML:
  const movie = document.createElement('div') // Creamos 1 elemento HTML para poder invocar la función innerHTML.
  movie.innerHTML = template // innerHTML le inyecta HTML a 1 elemento HTML que ya exista (movie).
  return movie.firstElementChild // el div que creamos en movie no nos sirve, por ello únicamente extraemos a su primer hijo que en este caso es nuestro template.
}

function renderElement(movie) {
  const element = buildElement(movie)
  window.container.append(element)
}

function cleanMovieList() {
  window.container.innerHTML = '' // Elimina todo el HTML que pueda existir para posteriormente hacer el renderizado de las películas.
}

export default function renderMovieList(list) {
  cleanMovieList()
  list.forEach(renderElement)
}