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
    console.log("selected seat:", selectedSeats);
  }, [selectedSeats]);

  const handleSeatSelect = (index) => {
      setSelectedSeats((seats) => {
        if (seats.includes(index)) {
          return seats.filter((i) => i !== index);
        } else {
          return seats.concat(index);
        }
      });
  };

  useEffect(() => {
    const storedMovie = localStorage.getItem("selectedMovie");
    const storedScreen = localStorage.getItem("selectedScreen");
    if (storedMovie) {
      setSelectedMovie(storedMovie);
    }

    if (storedScreen) {
      setSelectedScreen(storedScreen);
    }
  }, []);

  const handleBook = () => {
    navigate("/message");
  };

  const movieName = selectedMovie ? JSON.parse(selectedMovie).title : "";
  const screenTime = selectedScreen ? JSON.parse(selectedScreen).time : "";
  const price = selectedMovie ? JSON.parse(selectedMovie).price : "";
  const screen = selectedScreen ? JSON.parse(selectedScreen) : "";

  return (
    <div className="seatsPage">
      <div className="seatsPage__sidebar">
        <Sidebar />
      </div>
      <div className="seatsPage__main">
        <div className="seatsPage__seatGrid">
        {selectedScreen && (
            <div key={screen.id}>
              {screen.seats.map((seat, seatIndex) => {
                const isSeatAvailable = !seat.booked;
                const isCurrentlySelected = selectedSeats.includes(`${seat.id}`);
                return (
                  <button
                    key={seatIndex}
                    className={`seat ${isCurrentlySelected ? "selected" : ""}`}
                    disabled={seat.booked}
                    onClick={() => {
                      if (isSeatAvailable) {
                        handleSeatSelect(`${seat.id}`);
                      }
                    }}
                  >
                    {seat.name}
                  </button>
                );
              })}
            </div>
          )}

        </div>
        <div className="booking__summary">
          <div>
            {selectedScreen && selectedMovie && (
              <div className="selected__screen">
                <p>Time: {screenTime}</p>
                <p>Movie: {movieName}</p>
              </div>
            )}
          </div>
          <div>
            {selectedSeats && selectedSeats?.length > 0 && (
              <div className="selected__seats">
                <p>
                  Selected seats:{" "}
                  {selectedSeats.join(", ")}
                </p>
                <p>Price: {selectedSeats?.length * price}</p>
                <p>Total Seats: {selectedSeats?.length}</p>
              </div>
            )}
          </div>
          <button
            onClick={handleBook}
            disabled={!selectedScreen || selectedSeats?.length === 0}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewSeats;