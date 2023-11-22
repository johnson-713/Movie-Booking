import './App.css';
import MovieList from './Components/MovieList';
import SignupScreen from './Components/SignupScreen';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Screen from './Dashboard/Screen';
import Seats from './Dashboard/Seats';
import Dashboard from './Dashboard/Dashboard';


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
          <Route path='/screen' element={<Screen user={user} />} />
          <Route path='/seats' element={<Seats user={user} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
