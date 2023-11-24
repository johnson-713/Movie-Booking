import React from 'react';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({user}) => {
  const navigate = useNavigate();

  const handleTiming = () => {
    navigate('/screen');
  }

  const handleAccount = () => {
    navigate('/dashboard')
  }

  const handleSeats = () => {
    navigate('/seats')
  }
  return (
    <div className='sidebar'>
      <h3 id='title'>Hi, {user && user.username}</h3>
      <button onClick={handleAccount}>Account</button>
      <button onClick={handleTiming}>Timing</button>
      <button onClick={handleSeats}>Seats</button>
      <div style={{ borderTop: "2px solid black",width: '80%'}}></div>
    </div>
  )
}

export default Sidebar;
