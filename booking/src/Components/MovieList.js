import React from 'react';
import './MovieList.css';
import MovieCard from './MovieCard';
import {Movies} from './db/Data';
import { useNavigate } from 'react-router-dom';


const MovieList = () => {
    const navigate = useNavigate();


const handleClick = (movie) => {
  localStorage.setItem("selectedMovie", JSON.stringify(movie))
  navigate('/screen')
}

  return (

      <div className='movieList'>
        <div className='movieList__nav'>
          <div className='movieList__nav--description'>
              <p id='tag'>Tagline</p>
              <h3>Movies</h3>
              <p id='desc'>Lorem ipsum dolor sit amet adipiscing elit.</p>
          </div>
              <button className='movieList__nav--btns'>View all</button>
        </div>
        <div className='movieList__selection'>
              {Movies.map((movie) => (
                <div className='movie' key={movie.id} onClick={() => handleClick(movie)}>
                  <MovieCard 
                    image={movie.image}
                    title={movie.title}
                    language={movie.language}
                    id={movie.id}
                    price={movie.price}
                    />
                </div>     
              ))}
        </div>
      </div>

  )
}

export default MovieList;
