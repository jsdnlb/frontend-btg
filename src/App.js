import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SubscribePage from './pages/SubscribePage';
import CancelPage from './pages/CancelPage';
import TransactionsPage from './pages/TransactionsPage';
import ClientsPage from './pages/ClientsPage';
import FundsPage from './pages/FundsPage'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/subscribe" element={<SubscribePage />} />
        <Route path="/cancel" element={<CancelPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/funds" element={<FundsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
