import React from 'react';
import './Sidebar.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useScreenSlotContext } from '../ScreenSlotProvider';

const Sidebar = ({user}) => {
  const navigate = useNavigate();
  const {activeButton} = useScreenSlotContext()
  const location = useLocation()

  const handleTiming = () => {
    navigate('/screen', { state: { activeButton: activeButton}});
  }

  const handleAccount = () => {
    navigate('/dashboard', { state: { activeButton: activeButton}})
  }

  const handleSeats = () => {
    navigate('/seats', { state: { activeButton: activeButton}})
  }
  return (
    <div className='sidebar'>
      <h3 id='title'>Hi, {user && user?.username}</h3>
      <button className={location.pathname === '/dashboard' ? 'active' : ''} onClick={handleAccount}>Account</button>
      <button className={location.pathname === '/screen' ? 'active' : ''} onClick={handleTiming}>Timing</button>
      <button className={location.pathname === '/seats' ? 'active' : ''} onClick={handleSeats}>Seats</button>
      <div style={{ borderTop: "2px solid black",width: '80%'}}></div>
    </div>
  )
}

export default Sidebar;
