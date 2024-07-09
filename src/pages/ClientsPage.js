import React from 'react';
import ClientsList from '../components/ClientsList';
import BackButton from '../components/BackButton';

function ClientsPage() {
  return (
    <div>
      <h1>Clients</h1>
      <BackButton />
      <ClientsList />
    </div>
  );
}

export default ClientsPage;