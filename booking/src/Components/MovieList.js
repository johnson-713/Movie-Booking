import React, { useEffect, useState } from 'react';
import './MovieList.css';
import MovieCard from './MovieCard';
import {Movies} from './db/Data';
import ScreenSlot from '../Dashboard/ScreenSlot';


const MovieList = () => {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [user, setUser] = useState(null);

useEffect(() => {
    const username = localStorage.getItem("username")
    const password = localStorage.getItem("password")

    if(username && password){
        setUser({username, password})
    }
}, [selectedMovie])

const handleClick = (movie) => {
  setSelectedMovie(movie)
}

  return (
    <>
    {selectedMovie ? (
        <>
        <ScreenSlot user={user} movieName={selectedMovie} />
        </>
    ) : (
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
    )}
    </>
  )
}

export default MovieList;
