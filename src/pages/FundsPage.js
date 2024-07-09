import React from 'react';
import FundsList from '../components/FundsList';
import BackButton from '../components/BackButton';

function FundsPage() {
  return (
    <div>
      <h1>Funds</h1>
      <BackButton />
      <FundsList />
    </div>
  );
}

export default FundsPage;