import React from 'react';
import './ScreenSlot.css';

const ScreenSlot = () => {
  return (
    <div className='screenSlot'>
      <div className='screenSlot__btns'>
        <button>9.30 AM</button>
        <button>10.30 AM</button>
        <button>11.30 AM</button>
        <button>12.30 AM</button>
        <button>1.30 AM</button>
        <button>2.30 AM</button>
        <button>3.30 AM</button>
        <button>4.30 AM</button>
      </div>
      <div className='screenSlot__text'>
        <span>Please select your time slot</span>
        <span>Now select your seats</span>
      </div>
    </div>
  )
}

export default ScreenSlot;
