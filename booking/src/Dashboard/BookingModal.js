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
      navigate("/movies");
    }, delayTime);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  const movieName = selectedMovie ? JSON.parse(selectedMovie).title : "";
  const screenTime = selectedScreen ? JSON.parse(selectedScreen).time : "";
  const seats = selectedSeats ? JSON.parse(selectedSeats).length : "";
  const numbers = selectedSeats ? JSON.parse(selectedSeats).map((index) => index + 1).join(", ") : ""
  
  return (
    <div className="modal__content">
      <h3>Hi, {user}</h3>
      <div className="modal__title">
        <p>Movie: {movieName}</p>
        <p>Show Time: {screenTime}</p>
      </div>
      <div className="modal__seats">
        <p>Total Seats: {seats}</p>
        <p>Seats No: {numbers}</p>
      </div>
      <h3>Successfully booked!</h3>
      <p> Booking information will be sent to your email.</p>
    </div>
  );
};

export default BookingModal;
