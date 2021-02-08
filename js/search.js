import movies from './movies.js'
import render from './render.js'

const $search = window['search-form']

function filterByTitle(title) {
  return movies.filter((movie) => {
    return movie.title.toLowerCase().includes(title.toLowerCase())
  })
}

$search.addEventListener('submit', function (event) {
  event.preventDefault()
  const formData = new FormData(this)
  const title = formData.get('title')
  const movies = filterByTitle(title)
  render(movies)
})