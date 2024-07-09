import React from 'react';
import SubscriptionForm from '../components/SubscriptionForm';
import BackButton from '../components/BackButton';


function SubscribePage() {
  return (
    <div>
      <h1>Subscribe to a Fund</h1>
      <BackButton />
      <SubscriptionForm />
    </div>
  );
}

export default SubscribePage;
