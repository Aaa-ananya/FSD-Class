import React from 'react'
import Movies from './Movies'
import './Map2.css'

function Map2() {
  return (
    <div className="container">
      {
        Movies.map(movie =>(
            <div key={movie.id} className="movie-container">
<h3>{movie.id}</h3>
<img src={movie.image} alt={movie.title} />
<h3>{movie.title}</h3>
<h3>{movie.language}</h3>
<h3> Price:{movie.cost}</h3>
            </div>
        ))
      }
    </div>
  )
}

export default Map2;

