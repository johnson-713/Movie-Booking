import React, { useState } from "react";
import "./ScreenSlot.css";
import Screens from "../Components/db/Data";
import Sidebar from "./Sidebar";
import Seat from "./Seat";



const ScreenSlot = ({ movieName, user }) => {
  console.log(movieName)
  const [selectedScreens, setSelectedScreens] = useState(null)

  const handleScreenSelect = (screen) => {
    if(screen?.id === selectedScreens?.id){
      setSelectedScreens(screen)
      return
    } 
    setSelectedScreens(screen)
  }

  const selectedMovieTitle = movieName ? movieName.title : null;

  return (
    <>
    {selectedScreens ? (
      <Seat selectedScreen={selectedScreens} movieName={selectedMovieTitle} user={user} />
    ) : (
      <div className="screen">
      <div className="screen__sidebar">
        <Sidebar user={user} />
      </div>
      <div className="screen__screenSlot">
      <h2>{selectedMovieTitle || "No movie selected"}</h2>
      <div className="screenSlot__btns">
        {
          Screens.map((screen) => (
            <button
            className={`btns ${selectedScreens && selectedScreens.id === screen.id ? "active" : ""}`}
            key={screen.id}
            onClick={() => handleScreenSelect(screen)}
          >
            {screen.time}
          </button>
          ))
        }
      </div>
      <div className="screenSlot__text">
        {selectedScreens ? (
          <span>Now select your seats</span>
        ) : (
          <span>Please select your time slot</span>
        )}
      </div>
    </div>
    </div>
    )}
    </>
    
  );
};

export default ScreenSlot;
