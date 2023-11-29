import React, { useEffect, useState } from "react";
import "./ScreenSlot.css";
import Screens from "../Components/db/Data";
import Sidebar from "./Sidebar";

const ScreenSlot = () => {
  const [selectedScreens, setSelectedScreens] = useState(null)
  const [selectedMovie, setSelectedMovie] = useState(null)

  useEffect(() => {
    const storedMovie = localStorage.getItem('selectedMovie')
    const storedScreen = localStorage.getItem('selectedScreen')
    if(storedMovie) {
      setSelectedMovie(JSON.parse(storedMovie))
    }
    if(storedScreen){
      setSelectedScreens(JSON.parse(storedScreen))
    }
  }, [])

  const handleScreenSelect = (screen) => {
    if(screen?.id === selectedScreens?.id){
      setSelectedScreens(null)
      localStorage.removeItem('selectedScreen')
      return
    } 
    localStorage.setItem("selectedScreen", JSON.stringify(screen))
    setSelectedScreens(screen)
  }

  const movieName = selectedMovie?.title || "No movie selected";

  return (
      <div className="screen">
      <div className="screen__sidebar">
        <Sidebar />
      </div>
      <div className="screen__screenSlot">
      <h2>{movieName}</h2>
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
    
  );
};

export default ScreenSlot;
