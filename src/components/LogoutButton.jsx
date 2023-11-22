import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Logout = () => {
  const { dispatch } = useAuth();

  const handleLogout = () => {
    // Perform logout logic here
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;