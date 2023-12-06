import './App.css';
import MovieList from './Components/MovieList';
import SignupScreen from './Components/SignupScreen';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';
import BookingModal from './Dashboard/BookingModal';
import ScreenSlot from './Dashboard/ScreenSlot';
import NewSeats from './Dashboard/NewSeats';
import TheatreList from './Dashboard/TheatreList';
// import Seat from './Dashboard/Seat';


function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<SignupScreen />} />
          <Route path='/movies' element={<MovieList />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/screen' element={<ScreenSlot />} />
          <Route path='/seats' element={<NewSeats />} />
          <Route path='/message' element={<BookingModal />} />
          <Route path='/theatres' element={<TheatreList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
