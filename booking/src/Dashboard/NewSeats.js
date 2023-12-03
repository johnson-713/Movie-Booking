import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "./NewSeats.css";
import { useNavigate } from "react-router-dom";

const NewSeats = () => {
  const storedSeats = localStorage.getItem("selectedSeats");
  let initialValue;
  if (storedSeats === null) {
    initialValue = [];
  } else {
    initialValue = JSON.parse(storedSeats);
  }

  const [selectedSeats, setSelectedSeats] = useState(initialValue);
  const [selectedScreen, setSelectedScreen] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
  }, [selectedSeats]);

  const handleSeatSelect = (selectedSeat) => {
      setSelectedSeats((seats) => {
        const seatIndex = seats.findIndex((seat) => seat.id === selectedSeat.id)

        if(seatIndex !== -1){
          return [...seats.slice(0, seatIndex), ...seats.slice(seatIndex+1)]
        } else {
          return [...seats, selectedSeat]
        }
      });
  };

  useEffect(() => {
    const storedMovie = localStorage.getItem("selectedMovie");
    const storedScreen = localStorage.getItem("selectedScreen");
    if (storedMovie) {
      setSelectedMovie(JSON.parse(storedMovie));
    }

    if (storedScreen) {
      setSelectedScreen(JSON.parse(storedScreen));
    }
  }, []);

  const handleBook = () => {
    navigate("/message");
  };


  return (
    <div className="seatsPage">
      <div className="seatsPage__sidebar">
        <Sidebar />
      </div>
      <div className="seatsPage__main">
        <div className="seatsPage__seatGrid">
        {selectedScreen && (
            <div key={selectedScreen.id}>
              {selectedScreen.seats.map((seat) => {
                return (
                  <div key={seat.id}>
                    <button
                    className={`seat ${selectedSeats.some((s) => s.id === seat.id) ? "selected" : ""}`}
                    disabled={seat.booked}
                    onClick={() => {
                      if (!seat.booked) {
                        handleSeatSelect(seat);
                      }
                    }}
                  >
                    {seat.name}
                  </button>
                  </div>
                );
              })}
            </div>
          )}

        </div>
        <div className="booking__summary">
          <div>
            {selectedScreen && selectedMovie && (
              <div className="selected__screen">
                <p>Time: {selectedScreen.time}</p>
                <p>Movie: {selectedMovie.title}</p>
              </div>
            )}
          </div>
          <div>
            {selectedSeats?.length > 0 && (
              <div className="selected__seats">
                <p>
                  Selected seats:{" "}
                  {selectedSeats.map((selectedSeat) => selectedSeat.name).join(", ")}
                </p>
                <p>Price: {selectedSeats.length * (selectedSeats.map((seat) => seat.price))}</p>
                <p>Total Seats: {selectedSeats.length}</p>
              </div>
            )}
          </div>
          <button
            onClick={handleBook}
            disabled={!selectedScreen || selectedSeats.length === 0}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewSeats;
