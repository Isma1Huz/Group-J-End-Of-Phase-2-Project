import React from 'react';
import './App.css';
import RegistrationForm from './RegistrationForm';
import TravelForm from './TravelForm';

function App() {
  return (
    <div className="App">
       {/* Render the RegistrationForm component */}
      <RegistrationForm />
      <TravelForm />
    </div>
  )

}

export default App;
