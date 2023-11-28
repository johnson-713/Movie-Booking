import React from 'react';
import './Sidebar.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Sidebar = ({user}) => {
  const navigate = useNavigate();
  const location = useLocation()

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
      <button className={location.pathname === '/dashboard' ? 'active' : ''} onClick={handleAccount}>Account</button>
      <button className={location.pathname === '/screen' ? 'active' : ''} onClick={handleTiming}>Timing</button>
      <button className={location.pathname === '/seats' ? 'active' : ''} onClick={handleSeats}>Seats</button>
      <div style={{ borderTop: "2px solid black",width: '80%'}}></div>
    </div>
  )
}

export default Sidebar;
