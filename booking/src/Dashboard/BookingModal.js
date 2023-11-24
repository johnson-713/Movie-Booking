import React from 'react';
import './BookingModal.css';

const BookingModal = () => {
  return (
    <div className="modal__content">
      <div className='modal__title'>
      <p>Movie: Leo</p>
      <p>Show Time: 9.30 AM</p>
      </div>
      <div className='modal__seats'>
      <p>Total Seats: 2</p>
      <p>Total Price: 360</p>
      </div>
      <h3>Successfully booked!</h3>
      <p> Booking information will be sent to your email.</p>
    </div>
  )
}

export default BookingModal;
