import './App.css';
import MovieList from './Components/MovieList';
import SignupScreen from './Components/SignupScreen';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';
import BookingModal from './Dashboard/BookingModal';
import ScreenSlot from './Dashboard/ScreenSlot';
import Seat from './Dashboard/Seat';


function App() {
  const [user, setUser] = useState({
    username: '',
  })

  const storedUsername = localStorage.getItem('username')

  useEffect(() => {

    if(storedUsername){
      setUser({username: storedUsername})
    }
  }, [storedUsername])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<SignupScreen />} />
          <Route path='/movies' element={<MovieList />} />
          <Route path='/dashboard' element={<Dashboard user={user} />} />
          <Route path='/screen' element={<ScreenSlot user={user} />} />
          <Route path='/seats' element={<Seat user={user} />} />
          <Route path='/message' element={<BookingModal user={user} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
