import './App.css';
import MovieList from './Components/MovieList';
import SignupScreen from './Components/SignupScreen';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';
import BookingModal from './Dashboard/BookingModal';
import ScreenSlot from './Dashboard/ScreenSlot';
import Seat from './Dashboard/Seat';


function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<SignupScreen />} />
          <Route path='/movies' element={<MovieList />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/screen' element={<ScreenSlot />} />
          <Route path='/seats' element={<Seat />} />
          <Route path='/message' element={<BookingModal />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
