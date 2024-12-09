import React, { useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {
  Send,
  Users,
  Wallet,
  Globe,
  Repeat,
  Clock,
  TrendingUp,
  BarChart2,
  Settings,
  HelpCircle,
  Moon,
  LayoutGrid,
  Bitcoin,
  CandlestickChart,
  Search
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ReactConfetti from 'react-confetti';

const NexusLogo = () => (
  <svg width="40" height="40" viewBox="0 0 100 100">
    {/* Vertical lines - dark blue */}
    <path
      d="M20 20 L20 80"
      stroke="#1e3a8a"
      strokeWidth="15"
      strokeLinecap="round"
    />
    <path
      d="M80 20 L80 80"
      stroke="#1e3a8a"
      strokeWidth="15"
      strokeLinecap="round"
    />

    {/* Diagonal line with gradient */}
    <defs>
      <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path
      d="M20 20 L80 80"
      stroke="url(#blueGradient)"
      strokeWidth="15"
      strokeLinecap="round"
    />

    {/* White circles */}
    <circle cx="20" cy="20" r="9" fill="none" stroke="white" strokeWidth="2"/>
    <circle cx="20" cy="80" r="9" fill="none" stroke="white" strokeWidth="2"/>
    <circle cx="80" cy="20" r="9" fill="none" stroke="white" strokeWidth="2"/>
    <circle cx="80" cy="80" r="9" fill="none" stroke="white" strokeWidth="2"/>

    {/* White connecting lines */}
    <line x1="20" y1="27" x2="20" y2="73" stroke="white" strokeWidth="2"/>
    <line x1="80" y1="27" x2="80" y2="73" stroke="white" strokeWidth="2"/>
  </svg>
);

const CryptoInvestments = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('crypto');
  const [darkMode, setDarkMode] = useState(true);
  const [selectedTimeframe, setSelectedTimeframe] = useState('1Y');
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  // Crypto price history data
  const cryptoData = [
    { date: '2023-04', value: 28750.23 },
    { date: '2023-05', value: 30152.45 },
    { date: '2023-06', value: 29867.67 },
    { date: '2023-07', value: 31689.89 },
    { date: '2023-08', value: 32434.34 },
    { date: '2023-09', value: 31978.78 },
    { date: '2023-10', value: 33790.90 },
    { date: '2023-11', value: 35245.45 },
    { date: '2023-12', value: 37823.23 },
    { date: '2024-01', value: 39456.56 },
    { date: '2024-02', value: 42978.78 },
    { date: '2024-03', value: 45534.34 }
  ];

  // Crypto portfolio holdings
  const portfolioHoldings = [
    { 
      symbol: 'BTC', 
      name: 'Bitcoin', 
      amount: 0.45, 
      avgCost: 35420.42, 
      currentPrice: 45534.34,
      dayChange: '+3.24%',
      color: 'rgb(242, 169, 0)'
    },
    { 
      symbol: 'ETH', 
      name: 'Ethereum', 
      amount: 4.2, 
      avgCost: 2242.18, 
      currentPrice: 2856.90,
      dayChange: '+2.45%',
      color: 'rgb(98, 126, 234)'
    },
    { 
      symbol: 'SOL', 
      name: 'Solana', 
      amount: 55.5, 
      avgCost: 98.45, 
      currentPrice: 179.65,
      dayChange: '+5.21%',
      color: 'rgb(20, 241, 149)'
    }
  ];

  // Available payment methods
  const paymentMethods = [
    { symbol: 'USD', name: 'US Dollar', balance: '4,550.00', usdValue: '4,550.00', type: 'fiat' },
    { symbol: 'BTC', name: 'Bitcoin', balance: '0.45', usdValue: '20,490.45', type: 'crypto' },
    { symbol: 'ETH', name: 'Ethereum', balance: '4.2', usdValue: '11,998.98', type: 'crypto' },
    { symbol: 'SOL', name: 'Solana', balance: '55.5', usdValue: '9,970.57', type: 'crypto' },
    { symbol: 'USDT', name: 'Tether', balance: '5000', usdValue: '5,000.00', type: 'crypto' }
  ];

  // Sidebar items
  const sidebarItems = [
    { icon: LayoutGrid, label: 'Dashboard', id: 'dashboard' },
    { icon: BarChart2, label: 'Analytics', id: 'analytics' },
    { icon: CandlestickChart, label: 'Stocks & ETFs', id: 'stocks' },
    { icon: Bitcoin, label: 'Crypto Investments', id: 'crypto' },
    { icon: Wallet, label: 'My Wallet', id: 'wallet' },
    { icon: Users, label: 'Accounts', id: 'accounts' },
    { icon: Settings, label: 'Settings', id: 'settings' },
  ];

  const bottomSidebarItems = [
    { icon: HelpCircle, label: 'Help Centre', id: 'help' },
    { icon: Moon, label: 'Dark Mode', id: 'darkMode', toggle: true },
  ];
  const styles = {
    container: {
      background: '#000000',
      minHeight: '100vh',
      color: '#ffffff',
      width: '100vw',
      display: 'flex',
    },
    sidebar: {
      width: '20%',
      maxWidth: '280px',
      background: '#0F0F17',
      borderRight: '1px solid rgba(255, 255, 255, 0.05)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '16px',
      boxSizing: 'border-box',
    },
    mainContent: {
      flex: 1,
      padding: '20px 40px',
      maxWidth: '1400px',
      margin: '0 auto',
      overflowY: 'auto',
    },
    section: {
      background: 'rgb(31, 41, 55)',
      borderRadius: '16px',
      padding: '24px',
      marginBottom: '24px',
    },
    modal: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: '#1A1A27',
      borderRadius: '20px',
      padding: '32px',
      width: '480px',
      maxWidth: '90%',
      zIndex: 1000
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.8)',
      zIndex: 999
    },
    header: {
      padding: '16px',
      background: '#000000',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    },
    searchContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: '#252536',
      padding: '8px 16px',
      borderRadius: '8px',
      color: '#ffffff',
    },
    searchInput: {
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: '#ffffff',
      flex: 1,
      fontSize: '14px',
    },
    dropdown: {
      position: 'absolute',
      top: 'calc(100% + 8px)',
      left: 0,
      right: 0,
      background: '#252536',
      borderRadius: '8px',
      padding: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
      zIndex: 1000,
    },
    dropdownItem: {
      padding: '12px',
      borderRadius: '8px',
      cursor: 'pointer',
      color: '#ffffff',
      display: 'flex',
      justifyContent: 'space-between',
      background: 'transparent',
      transition: 'background 0.2s',
    },
    dropdownItemHover: {
      background: '#1A1A27',
    },
  };

  const BuyModal = ({ crypto, onClose }) => {
    const [step, setStep] = useState('select');
    const [selectedAsset, setSelectedAsset] = useState(null);

    const handleContinue = () => {
      if (step === 'select' && selectedAsset) {
        setStep('confirm');
      } else if (step === 'confirm') {
        setStep('success');
        setShowConfetti(true);
      }
    };

    return (
      <>
        <div style={styles.overlay} onClick={onClose} />
        <div style={styles.modal}>
          {showConfetti && (
            <ReactConfetti
              width={window.innerWidth}
              height={window.innerHeight}
              recycle={false}
              numberOfPieces={500}
              colors={['#f2a900', '#627eea', '#14f195', '#ec4899']}
            />
          )}
          {step === 'select' && (
            <>
              <h2 style={{ fontSize: '24px', marginBottom: '24px' }}>Buy {crypto.symbol}</h2>
              <div style={{ marginBottom: '24px' }}>
                <div style={{ opacity: 0.7, marginBottom: '8px' }}>Current Price</div>
                <div style={{ fontSize: '24px', fontWeight: '600' }}>${crypto.currentPrice}</div>
              </div>
              <div style={{ marginBottom: '24px' }}>
                <div style={{ opacity: 0.7, marginBottom: '8px' }}>Select Payment Method</div>
                {/* Fiat Section */}
                <div style={{ marginBottom: '16px' }}>
                  {paymentMethods
                    .filter(asset => asset.type === 'fiat')
                    .map((asset) => (
                      <button
                        key={asset.symbol}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '16px',
                          background: selectedAsset?.symbol === asset.symbol ? 'rgb(37, 99, 235)' : '#252536',
                          border: '1px solid rgb(37, 99, 235)',
                          borderRadius: '12px',
                          color: 'white',
                          cursor: 'pointer',
                          width: '100%',
                          marginBottom: '8px'
                        }}
                        onClick={() => setSelectedAsset(asset)}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <Wallet size={24} />
                          <div>
                            <div style={{ fontWeight: '500' }}>{asset.symbol}</div>
                            <div style={{ fontSize: '14px', opacity: 0.7 }}>Balance: ${asset.balance}</div>
                          </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div>${asset.usdValue}</div>
                        </div>
                      </button>
                  ))}
                </div>
                {/* Crypto Section */}
                <div style={{ opacity: 0.7, marginBottom: '8px' }}>Or Pay with Crypto</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {paymentMethods
                    .filter(asset => asset.type === 'crypto' && asset.symbol !== crypto.symbol)
                    .map((cryptoAsset) => (
                      <button
                        key={cryptoAsset.symbol}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '16px',
                          background: selectedAsset?.symbol === cryptoAsset.symbol ? 'rgb(37, 99, 235)' : '#252536',
                          border: 'none',
                          borderRadius: '12px',
                          color: 'white',
                          cursor: 'pointer'
                        }}
                        onClick={() => setSelectedAsset(cryptoAsset)}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <Bitcoin size={24} />
                          <div>
                            <div style={{ fontWeight: '500' }}>{cryptoAsset.symbol}</div>
                            <div style={{ fontSize: '14px', opacity: 0.7 }}>Balance: {cryptoAsset.balance}</div>
                          </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div>${cryptoAsset.usdValue}</div>
                        </div>
                      </button>
                  ))}
                </div>
              </div>
            </>
          )}
          {/* Rest of modal steps... */}
        </div>
      </>
    );
  };
  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
            <NexusLogo />
            <span style={{ fontSize: '24px', fontWeight: '600' }}>Nexus</span>
          </div>
          {sidebarItems.map(({ icon: Icon, label, id }) => (
            <div
              key={id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px',
                borderRadius: '8px',
                cursor: 'pointer',
                background: activeTab === id ? 'rgb(37, 99, 235)' : 'transparent',
              }}
              onClick={() => {
                setActiveTab(id);
                if (id === 'dashboard') {
                  navigate('/');
                } else if (id === 'stocks') {
                  navigate('/investments');
                }
              }}
            >
              <Icon size={20} />
              {label}
            </div>
          ))}
        </div>
        <div>
          {bottomSidebarItems.map(({ icon: Icon, label, id, toggle }) => (
            <div
              key={id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
              onClick={() => toggle && setDarkMode(!darkMode)}
            >
              <Icon size={20} />
              {label}
              {toggle && (
                <div
                  style={{
                    marginLeft: 'auto',
                    width: '40px',
                    height: '20px',
                    background: darkMode ? 'rgb(37, 99, 235)' : '#2A2A3C',
                    borderRadius: '10px',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '2px',
                      left: darkMode ? '20px' : '2px',
                      width: '16px',
                      height: '16px',
                      background: '#ffffff',
                      borderRadius: '50%',
                      transition: 'left 0.2s',
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <main style={styles.mainContent}>
        <header style={styles.header}>
          <h1 style={{ fontSize: '24px', fontWeight: '600', color: '#ffffff' }}>Crypto Investments</h1>
          <div style={{ position: 'relative' }}>
            <div style={styles.searchContainer}>
              <Search size={20} />
              <input
                type="text"
                placeholder="Search cryptocurrencies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={styles.searchInput}
              />
            </div>
            {searchQuery && (
              <div style={styles.dropdown}>
                {portfolioHoldings
                  .filter((crypto) =>
                    crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((crypto) => (
                    <div
                      key={crypto.symbol}
                      style={styles.dropdownItem}
                      onMouseEnter={(e) => e.currentTarget.style.background = styles.dropdownItemHover.background}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                      onClick={() => {
                        setSelectedCrypto(crypto);
                        setSearchQuery('');
                        setShowBuyModal(true);
                      }}
                    >
                      <span>{crypto.name} ({crypto.symbol})</span>
                      <span>${crypto.currentPrice.toLocaleString()}</span>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </header>

        {/* Portfolio Performance Chart */}
        <div style={styles.section}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '24px'
          }}>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>Portfolio Performance</h3>
              <div style={{ fontSize: '24px', fontWeight: '600', color: 'rgb(34, 197, 94)' }}>
                +67.82% <span style={{ fontSize: '16px', opacity: 0.7 }}>All Time</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              {['1D', '1W', '1M', '3M', '1Y', 'ALL'].map((timeframe) => (
                <button
                  key={timeframe}
                  onClick={() => setSelectedTimeframe(timeframe)}
                  style={{
                    background: selectedTimeframe === timeframe ? 'rgb(37, 99, 235)' : 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    color: 'white',
                    cursor: 'pointer'
                  }}
                >
                  {timeframe}
                </button>
              ))}
            </div>
          </div>

          <div style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart 
                data={cryptoData}
                margin={{ top: 10, right: 30, left: 10, bottom: 10 }}
              >
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="rgb(242, 169, 0)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="rgb(242, 169, 0)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  stroke="rgba(255, 255, 255, 0.1)" 
                  vertical={false}
                />
                <XAxis 
                  dataKey="date" 
                  stroke="rgba(255, 255, 255, 0.5)"
                  tickFormatter={(value) => {
                    const date = new Date(value);
                    return date.toLocaleDateString('en-US', { month: 'short' });
                  }}
                  tickLine={false}
                  axisLine={false}
                  interval={1}
                  tick={{ fontSize: 12 }}
                  dy={10}
                />
                <YAxis 
                  stroke="rgba(255, 255, 255, 0.5)"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 12 }}
                  tickFormatter={(value) => `$${value.toLocaleString()}`}
                  dx={-10}
                />
                <Tooltip
                  contentStyle={{
                    background: '#1E1E2D',
                    border: 'none',
                    borderRadius: '8px',
                    color: 'white',
                    padding: '12px'
                  }}
                  labelFormatter={(value) => {
                    const date = new Date(value);
                    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
                  }}
                  formatter={(value) => [`$${value.toLocaleString()}`, 'Value']}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="rgb(242, 169, 0)"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Crypto Holdings */}
        <div style={styles.section}>
          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '24px' }}>Your Crypto Holdings</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {portfolioHoldings.map((crypto) => (
              <div
                key={crypto.symbol}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px',
                  background: '#1A1A27',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, background 0.2s',
                }}
                onClick={() => {
                  setSelectedCrypto(crypto);
                  setShowBuyModal(true);
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: `${crypto.color}20`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: crypto.color
                  }}>
                    <Bitcoin size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '18px', fontWeight: '600' }}>{crypto.symbol}</div>
                    <div style={{ fontSize: '14px', opacity: 0.7 }}>{crypto.name}</div>
                  </div>
                </div>
                <div style={{ textAlign: 'right', marginLeft: 'auto', marginRight: '32px' }}>
                  <div style={{ fontSize: '18px', fontWeight: '600' }}>${crypto.currentPrice.toLocaleString()}</div>
                  <div style={{ 
                    fontSize: '14px', 
                    color: crypto.dayChange.startsWith('+') ? 'rgb(34, 197, 94)' : 'rgb(239, 68, 68)'
                  }}>
                    {crypto.dayChange}
                  </div>
                </div>
                <div style={{ 
                  textAlign: 'right',
                  marginLeft: '32px',
                  minWidth: '120px'
                }}>
                  <div style={{ fontSize: '16px', fontWeight: '500' }}>
                    {crypto.amount} {crypto.symbol}
                  </div>
                  <div style={{ fontSize: '14px', opacity: 0.7 }}>
                    Avg: ${crypto.avgCost.toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {showBuyModal && selectedCrypto && (
          <BuyModal crypto={selectedCrypto} onClose={() => setShowBuyModal(false)} />
        )}
      </main>
    </div>
  );
};

export default CryptoInvestments;