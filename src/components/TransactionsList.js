import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config';

function TransactionsList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/transactions/all`);
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error.response ? error.response.data : error.message);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div>
      <h2>Transactions List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Client ID</th>
            <th>Fund ID</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.client_id}</td>
              <td>{transaction.fund_id}</td>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
              <td>{new Date(transaction.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionsList;
