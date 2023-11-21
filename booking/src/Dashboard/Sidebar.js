import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h3 id='title'>Hi, Surendar</h3>
      <button>Account</button>
      <button>Timing</button>
      <button>Seats</button>
      <div style={{ borderTop: "2px solid black",width: '80%'}}></div>
    </div>
  )
}

export default Sidebar;
