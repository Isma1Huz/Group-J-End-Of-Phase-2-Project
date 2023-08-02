import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login validation here (e.g., API call)
    if (username === 'kipngenoh' && password === '123') {
      // Replace 'kipngenoh' and '123' with your actual credentials
      console.log('Login successful');
      navigate('/home'); // Navigate to the home page after successful login
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="login-form">
     <h3> Welcome to Travelwings!</h3>
      <h2>Login</h2>
      <h4>Please Enter Your Details</h4>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
      <p>
        <Link to="/forgot-password">Forgot Password</Link>
      </p>
    </div>
  );
};

export default LoginForm;
