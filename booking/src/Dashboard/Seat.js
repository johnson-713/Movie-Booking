import React, { useEffect, useState } from "react";
import Screens from "../Components/db/Data";
import Sidebar from "./Sidebar";
import "./Seat.css";
import { useNavigate } from "react-router-dom";

const Seat = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedScreen, setSelectedScreen] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [screens, setScreens] = useState(Screens);
  const navigate = useNavigate();

  useEffect(() => {
    const storedSelectedSeats = localStorage.getItem("selectedSeats");
    if (storedSelectedSeats) {
      setSelectedSeats(JSON.parse(storedSelectedSeats));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
  }, [selectedSeats]);

  // const handleSeatSelect = (index) => {
  //   if (selectedSeats.includes(index)) {
  //     setSelectedSeats(selectedSeats.filter((i) => i !== index));
  //     return;
  //   } else {
  //     setSelectedSeats((seats) => [...seats, index]);
  //   }
  // };

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
    setScreens((prevScreens) => {
      const updatedScreens = [...prevScreens];
      const selectedScreenIndex = updatedScreens.findIndex(
        (screen) => screen.id === selectedScreen?.id
      );

      if (selectedScreenIndex !== -1) {
        const updatedSeats = [...updatedScreens[selectedScreenIndex].seats];
        selectedSeats.forEach((seat) => (updatedSeats[seat] = 0));

        console.log(updatedSeats);

        updatedScreens[selectedScreenIndex] = {
          ...updatedScreens[selectedScreenIndex],
          seats: updatedSeats,
        };
      }

      return updatedScreens;
    });
    localStorage.removeItem('selectedScreen')
    navigate('/message')
    // setSelectedSeats([selectedSeats])
    // console.log(selectedSeats)
  };

  const isSeatBooked = (index) => {
    return screens[selectedScreen]?.seats[index] === 0;
  };

  const movieName = selectedMovie ? JSON.parse(selectedMovie).title : "";
  const screenTime = selectedScreen ? JSON.parse(selectedScreen).time : "";
  const price = selectedMovie ? JSON.parse(selectedMovie).price : ""

  return (
    <div className="seatsPage">
      <div className="seatsPage__sidebar">
        <Sidebar />
      </div>
      <div className="seatsPage__main">
        <div className="seatsPage__seatGrid">
          {Screens.map((screen, index) => {
            const isSeatAvailable = screen.seats[index] === 1;
            const isCurrentlySelected = selectedSeats.includes(index);
            // const isCurrentlyBooked = isSeatBooked(index);

            return (
              <button
                key={index}
                className={`seat ${
                  isSeatAvailable ? "available" : "unavailable"
                } 
                ${isCurrentlySelected ? "selected" : ""}
                ${isSeatBooked(index) ? "booked" : ""}`}
                onClick={() => {
                  if (isSeatAvailable && !isSeatBooked(index)) {
                    handleSeatSelect(index);
                  }
                }}
                disabled={isSeatBooked(index)}
              >
                {index + 1}
              </button>
            );
          })}
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
                  {selectedSeats.map((index) => index + 1).join(", ")}
                </p>
                <p>Price: {(selectedSeats?.length)*price}</p>
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

export default Seat;
