import React from 'react';
import TransactionsList from '../components/TransactionsList';
import BackButton from '../components/BackButton';

function TransactionsPage() {
  return (
    <div>
      <h1>Transactions</h1>
      <BackButton />
      <TransactionsList />
    </div>
  );
}

export default TransactionsPage;
