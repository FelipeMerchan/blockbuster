import movies from './movies.js'
import render from './render.js'

const $button = document.querySelector('#recommended')

function setRecommendedMovies(movies) {
  return movies.map((movie) => {
    return {...movie, recommended: movie.vote_average > 7}
  })
}

$button.addEventListener('click', () => {
  render(setRecommendedMovies(movies))
})