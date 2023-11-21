import React from 'react';
import './Screen.css';
import Sidebar from './Sidebar';
import ScreenSlot from './ScreenSlot';

const Screen = () => {
  return (
    <div className='screens'>
      <Sidebar />
      <ScreenSlot />
    </div>
  )
}

export default Screen;
