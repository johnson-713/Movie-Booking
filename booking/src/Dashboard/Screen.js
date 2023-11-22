import React from 'react';
import './Screen.css';
import Sidebar from './Sidebar';
import ScreenSlot from './ScreenSlot';

const Screen = ({user, selectedMovie}) => {

  return (
    <div className='screens'>
      <Sidebar user={user} />
      <ScreenSlot movieName={selectedMovie?.title}/>
    </div>
  )
}

export default Screen;
