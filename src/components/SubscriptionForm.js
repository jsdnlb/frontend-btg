import React, { useState } from 'react';
import axios from 'axios';

function SubscriptionForm() {
  const [client_id, setClientId] = useState('');
  const [fund_id, setFundId] = useState('');
  const [amount, setAmount] = useState('');
  const [notification, setNotification] = useState('Email');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/subscribe', {
        client_id,
        fund_id,
        amount: parseFloat(amount),
        notification,
      });
      console.log('Subscription successful:', response.data);
    } catch (error) {
      console.error('Error subscribing:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Client ID:</label>
        <input type="text" value={client_id} onChange={(e) => setClientId(e.target.value)} />
      </div>
      <div>
        <label>Fund ID:</label>
        <input type="text" value={fund_id} onChange={(e) => setFundId(e.target.value)} />
      </div>
      <div>
        <label>Amount:</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <div>
        <label>Notification:</label>
        <select value={notification} onChange={(e) => setNotification(e.target.value)}>
          <option value="Email">Email</option>
          <option value="SMS">SMS</option>
        </select>
      </div>
      <button type="submit">Subscribe</button>
    </form>
  );
}

export default SubscriptionForm;
