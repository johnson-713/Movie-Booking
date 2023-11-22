import React, { useEffect, useState } from 'react';
import './MovieList.css';
import MovieCard from './MovieCard';
import Screen from '../Dashboard/Screen';
import Seats from '../Dashboard/Seats';


const MovieList = () => {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [user, setUser] = useState(null);

useEffect(() => {
    const username = localStorage.getItem("username")
    const password = localStorage.getItem("password")

    if(username && password){
        setUser({username, password})
    }
}, [])

    const Movies = [
        {
            id: 1,
            title: "Leo",
            image: "https://upload.wikimedia.org/wikipedia/en/7/75/Leo_%282023_Indian_film%29.jpg",
            price: 180,
            language: "Tamil"
        },
        {
            id: 2,
            title: "Kannur Squad",
            image: "https://upload.wikimedia.org/wikipedia/en/7/75/Kannur_Squad_poster.jpeg",
            price: 180,
            language: "Tamil"
        },
        {
            id: 3,
            title: "Jigarthanda DoubleX",
            image: "https://upload.wikimedia.org/wikipedia/en/4/4e/Jigarthanda_DoubleX.jpg",
            price: 180,
            language: "Tamil"
        },
        {
            id: 4,
            title: "Mark Antony",
            image: "https://upload.wikimedia.org/wikipedia/en/4/40/Mark_Antony_2023_poster.jpg",
            price: 180,
            language: "Tamil"
        },
        {
            id: 5,
            title: "Irugapatru",
            image: "https://upload.wikimedia.org/wikipedia/en/0/09/Irugapatru.jpg",
            price: 180,
            language: "Tamil"
        },
        {
            id: 6,
            title: "Jailer",
            image: "https://upload.wikimedia.org/wikipedia/en/c/cb/Jailer_2023_Tamil_film_poster.jpg",
            price: 180,
            language: "Tamil"
        },
        {
            id: 7,
            title: "Ghost",
            image: "https://upload.wikimedia.org/wikipedia/en/c/c2/Ghost_Kannada_Film.jpg",
            price: 180,
            language: "Kannada"
        },
        {
            id: 8,
            title: "RDX: Robert Dony Xavier",
            image: "https://upload.wikimedia.org/wikipedia/en/b/be/RDX-_Robert_Dony_Xavier_poster.jpg",
            price: 180,
            language: "Tamil"
        },
    ]
  return (
    <>
    {selectedMovie ? (
        <Screen user={user} selectedMovie={selectedMovie} />
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
    {
        selectedMovie && (
            <Seats selectedMovie={selectedMovie} />
        )
    }
    </>
    
  )
}

export default MovieList;
