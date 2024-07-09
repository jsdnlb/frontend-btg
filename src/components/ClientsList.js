import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config';


function ClientsList() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/clients/all`);
        setClients(response.data);
      } catch (error) {
        console.error('Error fetching clients:', error.response ? error.response.data : error.message);
      }
    };

    fetchClients();
  }, []);

  return (
    <div>
      <h2>Clients List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Balance</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
              <td>{client.balance}</td>
              <td>{new Date(client.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientsList;
