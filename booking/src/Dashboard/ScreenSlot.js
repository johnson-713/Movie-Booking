import React, {useState} from 'react';
import './ScreenSlot.css';
import { useNavigate } from 'react-router-dom';

const ScreenSlot = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const navigate = useNavigate();

  const handleTimeClick = (time) => {
    setSelectedTime(time);

    // Navigate to the Seats page with the selected time when a time slot is clicked
    navigate('/seats');
  };
  return (
    <div className='screenSlot'>
      <div className='screenSlot__btns'>
        <button onClick={() => handleTimeClick('9.30 AM')}>9.30 AM</button>
        <button onClick={() => handleTimeClick('10.30 AM')}>10.30 AM</button>
        <button onClick={() => handleTimeClick('11.30 AM')}>11.30 AM</button>
        <button onClick={() => handleTimeClick('12.30 AM')}>12.30 AM</button>
        <button onClick={() => handleTimeClick('1.30 AM')}>1.30 AM</button>
        <button onClick={() => handleTimeClick('2.30 AM')}>2.30 AM</button>
        <button onClick={() => handleTimeClick('3.30 AM')}>3.30 AM</button>
        <button onClick={() => handleTimeClick('4.30 AM')}>4.30 AM</button>
      </div>
      <div className='screenSlot__text'>
        {selectedTime ? (
          <>
            <span>Selected time slot: {selectedTime}</span>
            <span>Now select your seats</span>
          </>
        ) : (
          <span>Please select your time slot</span>
        )}
      </div>
    </div>
  )
}

export default ScreenSlot;
