
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Link here
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import Landing from './Pages/LandingPage/Landing';
import './App.css';

const App = () => {
  return (

    <>
    <Landing/>
    <Router>
      <div className="app">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Login</Link> 
              </li>
              <li>
                <Link to="/signup">Sign Up</Link> 
              </li>
              <li>
                <Link to="/forgot-password">Forgot Password</Link> 
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/forgot-password" element={<ForgotPasswordForm />} />
        </Routes>
      </div>
    </Router>
    </>)
}


