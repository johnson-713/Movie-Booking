import React from 'react';
import './Seats.css';
import Sidebar from './Sidebar';
import SeatSlot from './SeatSlot';

const Seats = ({user, selectedMovie}) => {
  return (
    <div className='seats'>
      <Sidebar user={user} />
      <SeatSlot movieName={selectedMovie?.title} />
    </div>
  )
}

export default Seats;
