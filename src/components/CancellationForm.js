// src/components/CancellationForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config';
import '../styles/FormStyles.css'; 
import Swal from 'sweetalert2';

function CancellationForm() {
  const [clients, setClients] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [clientId, setClientId] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [notification, setNotification] = useState('Email');

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/clients/all`);
        setClients(response.data);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error cancelling subscription...',
          text: error.response.data.detail,
        });
      }
    };

    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/transactions/all`);
        setTransactions(response.data);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error cancelling subscription...',
          text: error.response.data.detail,
        });
      }
    };

    fetchClients();
    fetchTransactions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE_URL}/funds/cancel/`, {
        client_id: clientId,
        transaction_id: transactionId,
        notification,
      });
      Swal.fire({
        title: 'Good job!',
        text: 'Cancellation successful',
        icon: 'success',
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error cancelling subscription...',
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
        <label htmlFor="transaction">Transaction:</label>
        <select id="transaction" value={transactionId} onChange={(e) => setTransactionId(e.target.value)}>
          <option value="">Select a transaction</option>
          {transactions.map((transaction) => (
            <option key={transaction.id} value={transaction.id}>
              {transaction.id}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Notification:</label>
        <select value={notification} onChange={(e) => setNotification(e.target.value)}>
          <option value="Email">Email</option>
          <option value="SMS">SMS</option>
        </select>
      </div>
      <button type="submit">Cancel Subscription</button>
    </form>
  );
}

export default CancellationForm;
