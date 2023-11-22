import React from 'react';
import './Screen.css';
import Sidebar from './Sidebar';
import ScreenSlot from './ScreenSlot';

const Screen = ({user}) => {

  return (
    <div className='screens'>
      <Sidebar user={user} />
      <ScreenSlot />
    </div>
  )
}

export default Screen;
