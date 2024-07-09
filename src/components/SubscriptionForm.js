import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config';
import Swal from 'sweetalert2';

function SubscriptionForm() {
  const [clients, setClients] = useState([]);
  const [funds, setFunds] = useState([]);
  const [clientId, setClientId] = useState('');
  const [fundId, setFundId] = useState('');
  const [amount, setAmount] = useState('');
  const [notification, setNotification] = useState('Email');

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/clients/all`);
        setClients(response.data);
      } catch (error) {
        console.error('Error fetching clients:', error.response ? error.response.data : error.message);
      }
    };

    const fetchFunds = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/funds/all`);
        setFunds(response.data);
      } catch (error) {
        console.error('Error fetching funds:', error.response ? error.response.data : error.message);
      }
    };

    fetchClients();
    fetchFunds();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE_URL}/funds/subscribe/`, {
        client_id: clientId,
        fund_id: fundId,
        amount: parseFloat(amount),
        notification,
      });
      Swal.fire({
        title: "Subscription successful!",
        text: `Customer has subscribed to fund, for the amount of ${amount}`,
        icon: "success"
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error subscribing to fund',
        text: error.response.data.detail,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="client">Client:</label>
        <select id="client" value={clientId} onChange={(e) => setClientId(e.target.value)}>
          <option value="">Select a client</option>
          {clients.map((client) => (
            <option key={client.id} value={client.id}>
              {client.name} - {client.balance}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="fund">Fund:</label>
        <select id="fund" value={fundId} onChange={(e) => setFundId(e.target.value)}>
          <option value="">Select a fund</option>
          {funds.map((fund) => (
            <option key={fund.id} value={fund.id}>
              {fund.name} - {fund.min_amount}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
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
