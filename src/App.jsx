import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import BankingDashboard from './BankingDashboard';
import StockInvestments from './StockInvestments';
import CryptoInvestments from './CryptoInvestments';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<BankingDashboard />} />
      <Route path="/investments" element={<StockInvestments />} />
      <Route path="/crypto" element={<CryptoInvestments />} />
    </Routes>
  );
}

export default App;