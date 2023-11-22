import React from 'react';
import './Dashboard.css';
import Account from '../Account';
import Sidebar from './Sidebar';

const Dashboard = ({user}) => {
  return (
    <div className='dashboard'>
      <Sidebar user={user} />
      <Account />
    </div>
  )
}

export default Dashboard;
