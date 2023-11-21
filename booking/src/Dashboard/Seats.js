import React from 'react';
import './Seats.css';
import Sidebar from './Sidebar';
import SeatSlot from './SeatSlot';

const Seats = () => {
  return (
    <div className='seats'>
      <Sidebar />
      <SeatSlot />
    </div>
  )
}

export default Seats;
