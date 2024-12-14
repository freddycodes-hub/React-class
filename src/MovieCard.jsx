import React from 'react'
import './MovieCard.css'

const MovieCard = ({imageUrl, MovieTitle, MovieYear}) => {
  return (
    <div className='MovieCard'>
      <img src={imageUrl} alt={MovieTitle} />
      <div className="card-Body">
        <div className='title-container'>
          <h2 id='movieTitle'>{MovieTitle}</h2>
          <p id='movieYear'>{MovieYear}</p>
        </div>
      </div>
      <div className='anchor-contain'>
        <a href={imageUrl} title='Click to view image'>Click to view</a>
      </div>
    </div>
  )
}

export default MovieCard