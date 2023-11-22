import React from 'react';
import './Account.css';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const navigate = useNavigate();

  const handleDelete = () => {
    navigate('/');
  }
  return (
    <div className='account'>
      <button onClick={handleDelete}>Delete your account</button>
      <p style={{marginRight: '60px'}}>This will lead to login screen</p>
    </div>
  )
}

export default Account;
