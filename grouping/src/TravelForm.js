import React, { useState } from 'react';

function TravelForm (state) {
  const [documentType, setDocumentType] = useState('passport');
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleDocumentTypeChange = (event) => {
    setDocumentType(event.target.value);
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

    const handleButtonClick = () => {
        console.log('Button clicked!');
      };

  return (
    <div>
      <div>
        <label htmlFor="documentType">Travel Document Type:</label>
        <select id="documentType" value={documentType} onChange={handleDocumentTypeChange}>
          <option value="passport">Passport</option>
          <option value="visa">Visa</option>
          <option value="idCard">ID Card</option>
        </select>
      </div>

      <div>
        <label htmlFor="country">Select Country:</label>
        <select id="country" value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Select a country</option>
          <option value="usa">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="france">France</option>
          <option value="germany">Germany</option>
          <option value="italy">Italy</option>
        </select>
      </div>
      <div className="button-container-2">
        <button id="button" type="button" className="btn btn" onClick={handleButtonClick}>
          Continue
        </button>
      </div>
          
    </div>
  );
};


export default TravelForm;
