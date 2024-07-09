import React, { useState } from 'react';
import axios from 'axios';

function CancellationForm() {
  const [client_id, setClientId] = useState('');
  const [transaction_id, setTransactionId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/cancel', {
        client_id,
        transaction_id,
      });
      console.log('Cancellation successful:', response.data);
    } catch (error) {
      console.error('Error cancelling:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Client ID:</label>
        <input type="text" value={client_id} onChange={(e) => setClientId(e.target.value)} />
      </div>
      <div>
        <label>Transaction ID:</label>
        <input type="text" value={transaction_id} onChange={(e) => setTransactionId(e.target.value)} />
      </div>
      <button type="submit">Cancel Subscription</button>
    </form>
  );
}

export default CancellationForm;
