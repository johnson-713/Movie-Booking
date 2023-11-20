import React from 'react';
import './MovieCard.css';

const MovieCard = ({name, language, image, price}) => {
  return (
    <div className='movieCard'>
      <img src={image} alt='' />
      <div className='movieCard__text'>
        <h3>{name}</h3>
        <p id='lang'>{language}</p>
        <p id='price'>Rs. {price} per seat</p>
      </div>
    </div>
  )
}

export default MovieCard;
