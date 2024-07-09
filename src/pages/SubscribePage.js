import React from 'react';
import SubscriptionForm from '../components/SubscriptionForm';
import BackButton from '../components/BackButton';
import TransactionsList from '../components/TransactionsList';



function SubscribePage() {
  return (
    <div>
      <h1>Subscribe to a Fund</h1>
      <BackButton />
      <SubscriptionForm />
      <TransactionsList />
    </div>
  );
}

export default SubscribePage;
