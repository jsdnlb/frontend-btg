import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TransactionHistory({ client_id }) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/transactions/${client_id}`);
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error.response ? error.response.data : error.message);
      }
    };

    fetchTransactions();
  }, [client_id]);

  return (
    <div>
      <h2>Transaction History</h2>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.Id}>
            {transaction.Fecha}: {transaction.Tipo} - {transaction.Monto}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionHistory;
