import React, { useEffect, useState } from "react";
import "./BookingModal.css";
import { useNavigate } from "react-router-dom";

const BookingModal = () => {
  const navigate = useNavigate();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState(null);
  const [selectedScreen, setSelectedScreen] = useState(null);
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedMovie = localStorage.getItem("selectedMovie");
    const storedScreen = localStorage.getItem("selectedScreen");
    const storedSeats = localStorage.getItem("selectedSeats");
    const storedUser = localStorage.getItem('username')
    if(storedUser){
      setUser(storedUser)
    }
    if(storedSeats){
      setSelectedSeats(storedSeats)
    }
    if (storedMovie) {
      setSelectedMovie(storedMovie);
    }

    if (storedScreen) {
      setSelectedScreen(storedScreen);
    }
  }, []);

  useEffect(() => {
    const delayTime = 5000;

    const timeoutId = setTimeout(() => {
      localStorage.removeItem('selectedScreen')
      localStorage.removeItem('selectedMovie')
      localStorage.removeItem('selectedSeats')
      navigate("/movies");
    }, delayTime);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  const movieName = selectedMovie ? JSON.parse(selectedMovie).title : "";
  const screenTime = selectedScreen ? JSON.parse(selectedScreen).time : "";
  const price = selectedMovie ? JSON.parse(selectedMovie).price : ""
  const seats = selectedSeats ? JSON.parse(selectedSeats).length : "";
  const numbers = selectedSeats ? JSON.parse(selectedSeats).join(", ") : ""
  
  return (
    <div className="modal__content">
      <h3>Hi, {user}</h3>
      <div className="modal__title">
        <p>Movie: {movieName}</p>
        <p>Show Time: {screenTime}</p>
      </div>
      <div className="modal__seats">
        <p>Price: {seats*price}</p>
        <p>Seats No: {numbers}</p>
      </div>
      <div>
        <p>Total Seats: {seats}</p>
      </div>
      <h3>Successfully booked!</h3>
      <p> Booking information will be sent to your email.</p>
    </div>
  );
};

export default BookingModal;
