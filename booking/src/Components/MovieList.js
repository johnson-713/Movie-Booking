import React from 'react';
import './MovieList.css';
import MovieCard from './MovieCard';


const MovieList = () => {
  return (
    <div className='movieList'>
      <div className='movieList__nav'>
        <div className='movieList__nav--description'>
            <p>Tagline</p>
            <h3>Movies</h3>
            <p>Lorem ipsum dolor sit amet adipiscing elit.</p>
        </div>
            <button className='movieList__nav--btns'>View all</button>
      </div>
      <div className='movieList__movies'>
        <MovieCard 
            image=""
            name=""
            price=""
            language=""
        />
        <MovieCard 
            image=""
            name=""
            price=""
            language=""
        />
        <MovieCard 
            image=""
            name=""
            price=""
            language=""
        />
        <MovieCard 
            image=""
            name=""
            price=""
            language=""
        />
        <MovieCard 
            image=""
            name=""
            price=""
            language=""
        />
        <MovieCard 
            image=""
            name=""
            price=""
            language=""
        />
        <MovieCard 
            image=""
            name=""
            price=""
            language=""
        />
        <MovieCard 
            image=""
            name=""
            price=""
            language=""
        />
        <MovieCard 
            image=""
            name=""
            price=""
            language=""
        />
        <MovieCard 
            image=""
            name=""
            price=""
            language=""
        />
        <MovieCard 
            image=""
            name=""
            price=""
            language=""
        />
        <MovieCard 
            image=""
            name=""
            price=""
            language=""
        />
        <MovieCard 
            image=""
            name=""
            price=""
            language=""
        />
        <MovieCard 
            image=""
            name=""
            price=""
            language=""
        />
        <MovieCard 
            image=""
            name=""
            price=""
            language=""
        />
      </div>
    </div>
  )
}

export default MovieList;
