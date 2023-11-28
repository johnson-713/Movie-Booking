import React, { useState } from 'react';
import Screens from '../Components/db/Data';
import Sidebar from './Sidebar';
import './Seat.css';

const Seat = ({selectedScreen, movieName, user}) => {
    const [selectedSeats, setSelectedSeats] = useState([])
    const [screens, setScreens] = useState(Screens)

    const handleSeatSelect = (index) => {
        if(selectedSeats.includes(index)){
            setSelectedSeats(selectedSeats.filter((i) => i !== index))
            return
        } else {
            setSelectedSeats((seats) => [...seats, index])
        }
    }

    const handleBook = () => {
        alert(`Seats ${selectedSeats.map((index) => index+1).join(", ")} booked for ${movieName} at ${selectedScreen.time}`)
        const updatedScreens = Screens.map((screen) => {
            if(screen.id === selectedScreen?.id){
                const updatedSeats = [...screen.seats]
                selectedSeats.forEach((seat) => (updatedSeats[seat] = 0))
                return {
                    ...screen,
                    seats: updatedSeats,
                }
            }
            return screen
        })
        setScreens(updatedScreens)
    }


  return (
    <div className='seatsPage'>
        <div className='seatsPage__sidebar'>
            <Sidebar user={user} />
        </div>
        <div className='seatsPage__main'>
        <div className='seatsPage__seatGrid'>
      {
        screens.map((screen, index) => {
            const isSeatAvailable = screen.seats[index] === 1;
            return (
                <button
                    key={index}
                    className={`seat ${isSeatAvailable ? "available" : "unavailable"} 
                                    ${selectedSeats.includes(index) ? "selected" : ""}
                                    ${selectedSeats.includes(index) ? "booked" : ""}`}
                    onClick={() => {
                        if(isSeatAvailable){
                            handleSeatSelect(index)
                        }
                    }}
                >{index+1}</button>
            )
        })
      }
      </div>
          <div className='booking__summary'>
        <div>
        {
            selectedScreen && movieName && (
                <div className='selected__screen'>
                    <p>Time: {selectedScreen.time}</p>
                    <p>Movie: {movieName}</p>
                </div>
            )
        }
        </div>
        <div>
            {
                selectedSeats && selectedSeats?.length > 0 && (
                    <div className='selected__seats'>
                        <p>Selected seats: {selectedSeats.map(index => index+1).join(", ")}</p>
                        <p>Total seats: {selectedSeats?.length}</p>
                    </div>
                )
            }
        </div>
        <button onClick={handleBook} disabled={ !selectedScreen || selectedSeats?.length === 0}>Book Now</button>
    </div>
        </div>
    </div>
  )
}

export default Seat;
