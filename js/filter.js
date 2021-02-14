import { renderMovieListFromMap } from './render.js'

import {
  movieList,
  allMovies,
  popular as mostValued,
  notPopular as leastValued
} from './normalize.js'

filter.addEventListener('change', function() {
  switch (this.value) {
    case 'most-valued':
      return renderMovieListFromMap(mostValued, movieList)
    case 'least-valued':
      return renderMovieListFromMap(leastValued, movieList)
    default:
      return renderMovieListFromMap(allMovies, movieList)
  }
})