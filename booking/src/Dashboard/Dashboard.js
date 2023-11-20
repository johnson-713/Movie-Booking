import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className='sidebar'>
      <h3 style={{ textAlign: 'left'}}>Hi, Surendar</h3>
      <button>Account</button>
      <button>Timing</button>
      <button>Seats</button>
      <div style={{ borderTop: "2px solid black",width: '80%'}}></div>
    </div>
  )
}

export default Dashboard;
