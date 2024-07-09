import React, { useState } from 'react';
import TransactionHistory from '../components/TransactionHistory';

function TransactionsPage() {
  const [client_id, setClientId] = useState('');

  return (
    <div>
      <h1>Transaction History</h1>
      <div>
        <label>Client ID:</label>
        <input type="text" value={client_id} onChange={(e) => setClientId(e.target.value)} />
      </div>
      {client_id && <TransactionHistory client_id={client_id} />}
    </div>
  );
}

export default TransactionsPage;
