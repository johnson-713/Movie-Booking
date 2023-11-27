import React, { useEffect, useState } from "react";
import "./SeatSlot.css";
import { useNavigate } from "react-router-dom";

function Cell({ filled, onClick, available }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`cell ${filled ? "cell-activated" : ""} ${
        available ? "cell-available" : "cell-unavialable"
      }`}
      disabled={!available}
    />
  );
}

const SeatSlot = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([])
  const navigate = useNavigate();
  const config = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];

  useEffect(() => {
    const storedSelectedSeats = JSON.parse(localStorage.getItem("selectedSeats")) || []
    setSelectedSeats(storedSelectedSeats)

    const storedBookedSeats = JSON.parse(localStorage.getItem("bookedSeats")) || []
    setBookedSeats(storedBookedSeats)
  }, [])

  const activateCells = (index) => {
    if (selectedSeats.includes(index)) {
      const updatedSeats = selectedSeats.filter((seat) => seat !== index);
      setSelectedSeats(updatedSeats);
    } else {
      if (!bookedSeats.includes(index)) {
        const updatedSeats = [...selectedSeats, index]
        setSelectedSeats(updatedSeats);
      }
    }
  };

  const calculatePrice = () => {
    const totalPrice = selectedSeats.length * 180;
    return totalPrice;
  };

  const handleBooking = () => {
    setBookedSeats((prevBookedSeats) => {
      const updatedBookedSeats = [...prevBookedSeats, ...selectedSeats];
      console.log(updatedBookedSeats); 
      return updatedBookedSeats;
    });
    setSelectedSeats([])
    const price = calculatePrice();
    navigate("/message", {
      state: {
        totalSeats: selectedSeats.length,
        price,
      },
    });
  };

  useEffect(() => {  
    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats)) 
    localStorage.setItem("bookedSeats", JSON.stringify(bookedSeats))
  }, [selectedSeats, bookedSeats]);

  useEffect(() => {
    console.log(bookedSeats)
  }, [bookedSeats])

  return (
    <div className="wrapper">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${config[0].length}, minmax(0, 1fr))`,
        }}
      >
        {config.flat(1).map((value, index) => {
          return value ? (
            <Cell
              key={index}
              onClick={() => activateCells(index)}
              filled={selectedSeats.includes(index)}
              available={!bookedSeats.includes(index)}
            />
          ) : (
            <span key={index} />
          );
        })}
      </div>
      <div className="booking">
        <div className="booking__details">
          <p>Total seats: {selectedSeats.length}</p>
          <p>Price: {calculatePrice()}</p>
        </div>
        <button className="booking__btn" onClick={handleBooking}>
          Book
        </button>
      </div>
    </div>
  );
};

export default SeatSlot;
