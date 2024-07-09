import React from 'react';
import CancellationForm from '../components/CancellationForm';
import TransactionsList from '../components/TransactionsList';
import BackButton from '../components/BackButton';

function CancelPage() {
  return (
    <div>
      <h1>Cancel a Subscription</h1>
      <BackButton />
      <CancellationForm />
      <TransactionsList />
    </div>
  );
}

export default CancelPage;
