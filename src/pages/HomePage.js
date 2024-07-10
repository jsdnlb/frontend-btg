// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavStyles.css'; // Importa el archivo CSS

function NavBar() {
  return (
    <nav>
      <h1>Investment Platform - BTG Pactual</h1>
      <ul>
        <li>
          <Link to="/subscribe">
            <button>Subscribe to a Fund</button>
          </Link>
        </li>
        <li>
          <Link to="/cancel">
            <button>Cancel a Subscription</button>
          </Link>
        </li>
        <li>
          <Link to="/transactions">
            <button>View Transaction History</button>
          </Link>
        </li>
        <li>
          <Link to="/clients">
            <button>View Clients</button>
          </Link>
        </li>
        <li>
          <Link to="/funds">
            <button>View Funds</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
