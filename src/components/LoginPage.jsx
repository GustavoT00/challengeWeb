import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { dispatch } = useAuth();
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    // Perform authentication logic here (e.g., API call)
    dispatch({ type: 'LOGIN', payload: { username } });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;