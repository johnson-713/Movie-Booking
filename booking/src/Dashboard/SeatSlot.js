import React, { useEffect, useState } from "react";
import "./SeatSlot.css";
import { useNavigate } from "react-router-dom";

function Cell({ filled, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={filled ? "cell cell-activated" : "cell"}
    />
  );
}

const SeatSlot = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [initialSelectedSeats, setInitialSelectedSeats] = useState([])
  const navigate = useNavigate();
  const config = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];

  const activateCells = (index) => {
    if (selectedSeats.includes(index)) {
      const updatedSeats = selectedSeats.filter((seat) => seat !== index);
      setSelectedSeats(updatedSeats);
    } else {
      setSelectedSeats([...selectedSeats, index]);
    }
  };

  const calculatePrice = () => {
    const totalPrice = selectedSeats.length * 180;
    return totalPrice;
  };

  const handleBooking = () => {
    const totalSeats = selectedSeats.length;
    setInitialSelectedSeats(selectedSeats)
    const price = calculatePrice();
    navigate("/message", {
      state: {
        totalSeats,
        price,
      },
    });
  };

  useEffect(() => {
    setSelectedSeats(initialSelectedSeats)
  }, [initialSelectedSeats])

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
