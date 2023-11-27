import React, { useState } from 'react';
import './Screen.css';
import Sidebar from './Sidebar';
import ScreenSlot from './ScreenSlot';

const Screen = ({user, selectedMovie}) => {
  const [activeButton, setActiveButton] = useState(null)

  return (
    <div className='screens'>
      <Sidebar user={user} activeButton={activeButton} setActiveButton={setActiveButton} />
      <ScreenSlot movieName={selectedMovie?.title} activeButton={activeButton}/>
    </div>
  )
}

export default Screen;
