import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Investment Platform</h1>
      <nav>
        <ul>
          <li><Link to="/subscribe">Subscribe to a Fund</Link></li>
          <li><Link to="/cancel">Cancel a Subscription</Link></li>
          <li><Link to="/transactions">View Transaction History</Link></li>
          <li><Link to="/clients">View Clients</Link></li> 
          <li><Link to="/funds">View Funds</Link></li> 
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;
