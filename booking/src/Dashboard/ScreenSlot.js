import React, { useEffect } from "react";
import "./ScreenSlot.css";
import { useLocation } from "react-router-dom";
import { useScreenSlotContext } from "../ScreenSlotProvider";

const ScreenSlot = ({ movieName }) => {
  const { state } = useLocation();

  const {activeButton, setActiveButton} = useScreenSlotContext();

  useEffect(() => {
    const initialActiveButton = state && state.activeButton
      ? state.activeButton
      : localStorage.getItem("activeButton") || null;
    setActiveButton(initialActiveButton);
    localStorage.setItem("activeButton", initialActiveButton);
  }, [state, setActiveButton]);

  const Screens = [
    {
      id: 1,
      timing: "9.30 AM",
      totalSeats: 27,
    },
    {
      id: 2,
      timing: "10.30 AM",
      totalSeats: 27,
    },
    {
      id: 3,
      timing: "11.30 AM",
      totalSeats: 27,
    },
    {
      id: 4,
      timing: "12.30 AM",
      totalSeats: 27,
    },
    {
      id: 5,
      timing: "1.30 AM",
      totalSeats: 27,
    },
    {
      id: 6,
      timing: "2.30 AM",
      totalSeats: 27,
    },
    {
      id: 7,
      timing: "3.30 AM",
      totalSeats: 27,
    },
    {
      id: 8,
      timing: "4.30 AM",
      totalSeats: 27,
    },
  ];

  const handleActive = (id) => {
    setActiveButton(id);
  };

  return (
    <div className="screenSlot">
      <h2>{movieName}</h2>
      <div className="screenSlot__btns">
        {Screens.map((screen) => (
          <button
            className={`btns ${activeButton === screen.id ? "active" : ""}`}
            key={screen.id}
            onClick={() => handleActive(screen.id)}
          >
            {screen.timing}
          </button>
        ))}
      </div>
      <div className="screenSlot__text">
        {activeButton ? (
          <span>Now select your seats</span>
        ) : (
          <span>Please select your time slot</span>
        )}
      </div>
    </div>
  );
};

export default ScreenSlot;
