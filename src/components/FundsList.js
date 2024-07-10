import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config';
import '../styles/TableStyles.css'; 

function FundsList() {
  const [funds, setFunds] = useState([]);

  useEffect(() => {
    const fetchFunds = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/funds/all`);
        setFunds(response.data);
      } catch (error) {
        console.error('Error fetching funds:', error.response ? error.response.data : error.message);
      }
    };

    fetchFunds();
  }, []);

  return (
    <div className="table-container">
      <h2>Funds List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Categoy</th>
            <th>Minimum Amount</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {funds.map(fund => (
            <tr key={fund.id}>
              <td>{fund.id}</td>
              <td>{fund.name}</td>
              <td>{fund.category}</td>
              <td>{fund.min_amount}</td>
              <td>{new Date(fund.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FundsList;
