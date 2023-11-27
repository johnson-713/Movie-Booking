import React, { useEffect } from "react";
import "./BookingModal.css";
import { useNavigate } from "react-router-dom";

const BookingModal = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const delayTime = 5000;

    const timeoutId = setTimeout(() => {
      navigate("/movies");
    }, delayTime);

    return () => clearTimeout(timeoutId);
  }, [navigate]);
  
  return (
    <div className="modal__content">
      <h3>Hi, {user && user?.username}</h3>
      <div className="modal__title">
        <p>Movie: Leo</p>
        <p>Show Time: 9.30 AM</p>
      </div>
      <div className="modal__seats">
        <p>Total Seats: 2</p>
        <p>Total Price: 360</p>
      </div>
      <h3>Successfully booked!</h3>
      <p> Booking information will be sent to your email.</p>
    </div>
  );
};

export default BookingModal;
