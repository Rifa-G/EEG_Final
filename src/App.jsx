import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BankingDashboard from './BankingDashboard';
import StockInvestments from './StockInvestments';
import CryptoInvestments from './CryptoInvestments';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<BankingDashboard />} />
      <Route path="/investments" element={<StockInvestments />} />
      <Route path="/crypto" element={<CryptoInvestments />} />
    </Routes>
  );
}

export default App;
