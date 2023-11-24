import React from 'react';
import './Seats.css';
import Sidebar from './Sidebar';
import SeatSlot from './SeatSlot';

const Seats = ({user}) => {
  return (
    <div className='seats'>
      <Sidebar user={user} />
      <SeatSlot />
    </div>
  )
}

export default Seats;
