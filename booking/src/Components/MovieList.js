import React, { useState } from 'react';
import './MovieList.css';
import MovieCard from './MovieCard';
import Dashboard from '../Dashboard/Dashboard';


const MovieList = () => {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const Movies = [
        {
            id: 1,
            title: "Leo",
            image: "https://upload.wikimedia.org/wikipedia/en/7/75/Leo_%282023_Indian_film%29.jpg",
            price: 200,
            language: "Tamil"
        },
        {
            id: 1,
            title: "Leo",
            image: "https://upload.wikimedia.org/wikipedia/en/7/75/Leo_%282023_Indian_film%29.jpg",
            price: 200,
            language: "Tamil"
        },
        {
            id: 1,
            title: "Leo",
            image: "https://upload.wikimedia.org/wikipedia/en/7/75/Leo_%282023_Indian_film%29.jpg",
            price: 200,
            language: "Tamil"
        },
        {
            id: 1,
            title: "Leo",
            image: "https://upload.wikimedia.org/wikipedia/en/7/75/Leo_%282023_Indian_film%29.jpg",
            price: 200,
            language: "Tamil"
        },
        {
            id: 1,
            title: "Leo",
            image: "https://upload.wikimedia.org/wikipedia/en/7/75/Leo_%282023_Indian_film%29.jpg",
            price: 200,
            language: "Tamil"
        },
        {
            id: 1,
            title: "Leo",
            image: "https://upload.wikimedia.org/wikipedia/en/7/75/Leo_%282023_Indian_film%29.jpg",
            price: 200,
            language: "Tamil"
        },
        {
            id: 1,
            title: "Leo",
            image: "https://upload.wikimedia.org/wikipedia/en/7/75/Leo_%282023_Indian_film%29.jpg",
            price: 200,
            language: "Tamil"
        },
        {
            id: 1,
            title: "Leo",
            image: "https://upload.wikimedia.org/wikipedia/en/7/75/Leo_%282023_Indian_film%29.jpg",
            price: 200,
            language: "Tamil"
        },
    ]
  return (
    <>
    {selectedMovie ? (
        <Dashboard />
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
                  <div className='movie' key={movie.id} onClick={() => setSelectedMovie(movie)}>
                      <MovieCard 
                          image={movie.image}
                          name={movie.title}
                          price={movie.price}
                          language={movie.language}
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
