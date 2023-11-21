import './App.css';
import MovieList from './Components/MovieList';
import SignupScreen from './Components/SignupScreen';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Seats from './Dashboard/Seats';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<SignupScreen />} />
          <Route path='/movies' element={<MovieList />} />
          <Route path='/seats' element={<Seats />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
