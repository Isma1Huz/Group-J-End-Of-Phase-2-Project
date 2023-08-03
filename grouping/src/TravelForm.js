import React, { useState } from 'react';

const PaymentPage = () => {
  
  // State to store form data and processing status
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Function to handle the back button click, go back to the previous page
  const handleBackButtonClick = () => {
    window.history.back(); // Go back to the previous page
  };
  
  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!cardNumber || !cardName || !expiryDate || !cvv) {
      alert('Please fill in all the required fields.');
      return;
    }

    
    setIsProcessing(true);

    
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
    }, 2000);
  };

  return (
    <div className='Payment-container'>
      <h2>Payment Details</h2>
      {/* Back button */}
      <button className='Back-button' onClick={handleBackButtonClick}>
        Back
      </button>
      {paymentSuccess ? (
        <div>
          <p>Payment successful!</p>
          <p>Your flight tickets have been booked.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="cardNumber">Card Number:</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="Enter card number"
            />
          </div>
          <div>
            <label htmlFor="cardName">Cardholder's Name:</label>
            <input
              type="text"
              id="cardName"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              placeholder="Enter cardholder's name"
            />
          </div>
          <div>
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input
              type="text"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM/YY"
            />
          </div>
          <div>
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="Enter CVV"
            />
          </div>
          {<button type="submit" disabled={isProcessing}>
            {isProcessing ? 'Processing...' : 'Pay Now'}
          </button> }
        </form>
      )}
    </div>
  );
};

export default PaymentPage;