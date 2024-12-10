import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  LineChart,
  Line,
  Wallet,
  Bitcoin,
} from 'recharts';
import {
  Send,
  Users,
  Globe,
  Repeat,
  Clock,
  TrendingUp,
  BarChart2,
  Settings,
  HelpCircle,
  Moon,
  LayoutGrid,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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

const BankingDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [showSignup, setShowSignup] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [graphView, setGraphView] = useState('combined');
  const navigate = useNavigate();

  const incomeOutcomeData = [
    { month: 'Jan', investments: 3000, spending: 2000 },
    { month: 'Feb', investments: 4000, spending: 2500 },
    { month: 'Mar', investments: 3500, spending: 1500 },
    { month: 'Apr', investments: 4200, spending: 2800 },
    { month: 'May', investments: 4500, spending: 3000 },
    { month: 'Jun', investments: 3800, spending: 2400 },
    { month: 'Jul', investments: 4139, spending: 2900 },
    { month: 'Aug', investments: 3900, spending: 2500 },
    { month: 'Sep', investments: 4600, spending: 3100 },
    { month: 'Oct', investments: 4800, spending: 3200 },
    { month: 'Nov', investments: 5000, spending: 3300 },
    { month: 'Dec', investments: 5200, spending: 3400 },
  ];

  const dynamicChartData = graphView === 'cryptoInvestments' 
    ? incomeOutcomeData.map(({ month, investments }) => ({ month, investments })) 
    : incomeOutcomeData;

  const mockChartData = [
    { date: '2024-01', value: 8500 },
    { date: '2024-02', value: 9200 },
    { date: '2024-03', value: 10754.41 },
  ];

  const paymentMethods = [
    { symbol: 'USD', name: 'US Dollar', balance: '4,550.00', usdValue: '4,550.00', type: 'fiat' },
    { symbol: 'BTC', name: 'Bitcoin', balance: '0.45', usdValue: '20,490.45', type: 'crypto' },
    { symbol: 'ETH', name: 'Ethereum', balance: '4.2', usdValue: '11,998.98', type: 'crypto' },
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
    cardCarousel: {
      display: 'flex',
      gap: '24px',
      marginBottom: '24px',
    },
    accountCard: {
      flex: '1',
      background: 'rgb(37, 99, 235)',
      borderRadius: '16px',
      padding: '24px',
    },
    euroCard: {
      flex: '1',
      background: 'rgb(31, 41, 55)',
      borderRadius: '16px',
      padding: '24px',
    },
    section: {
      background: 'rgb(31, 41, 55)',
      borderRadius: '16px',
      padding: '24px',
      marginBottom: '24px',
    },
    quickActions: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '16px',
      marginBottom: '24px',
    },
    actionButton: {
      background: 'rgb(31, 41, 55)',
      border: 'none',
      borderRadius: '16px',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px',
    },
    iconContainer: {
      width: '48px',
      height: '48px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
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
      zIndex: 1000,
      color: 'white',
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.8)',
      zIndex: 999,
    },
    button: {
      padding: '12px',
      backgroundColor: '#2563eb',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      marginTop: '16px',
    },
    input: {
      width: '100%',
      padding: '12px',
      marginBottom: '16px',
      borderRadius: '8px',
      border: '1px solid #ccc',
    },
  };

  const quickActions = [
    { icon: Send, label: 'Send', color: 'rgb(37, 99, 235)' },
    { icon: Repeat, label: 'Exchange', color: 'rgb(124, 58, 237)' },
    { icon: Users, label: 'Pay Friends', color: 'rgb(5, 150, 105)' },
    { icon: Globe, label: 'Transfer', color: 'rgb(239, 68, 68)' },
  ];

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

  const handleBuy = (crypto) => {
    setSelectedCrypto(crypto);
    setShowBuyModal(true);
  };

  const finalizeOrder = () => {
    setShowBuyModal(false);
    setShowSignup(true);
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
                } else if (id === 'analytics') {
                  navigate('/investments');
                } else if (id === 'stocks') {
                  navigate('/investments');
                } else if (id === 'crypto') {
                  navigate('/crypto');
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

      {/* Main Content */}
      <main style={styles.mainContent}>
        {/* Account Cards */}
        <div style={styles.cardCarousel}>
          <div style={styles.accountCard}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
              <span style={{ opacity: 0.8 }}>Main Account</span>
              <Wallet size={20} style={{ opacity: 0.8 }} />
            </div>
            <div style={{ fontSize: '32px', fontWeight: '600', marginBottom: '8px' }}>$4,550.00</div>
            <div style={{ fontSize: '14px', opacity: 0.8 }}>**** 4582</div>
          </div>
          <div style={styles.euroCard}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
              <span style={{ opacity: 0.8 }}>Crypto Wallet</span>
              <BarChart2 size={20} style={{ opacity: 0.8 }} />
            </div>
            <div style={{ fontSize: '32px', fontWeight: '600', marginBottom: '8px' }}>$8,950.00</div>
            <div style={{ fontSize: '14px', opacity: 0.8 }}>Fantom, BTC, ETH</div>
          </div>
          <div 
            style={{
              ...styles.accountCard,
              cursor: 'pointer',
            }}
            onClick={() => navigate('/investments')}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
              <span style={{ opacity: 0.8 }}>Stock Investments</span>
              <TrendingUp size={20} style={{ opacity: 0.8 }} />
            </div>
            <div style={{ fontSize: '32px', fontWeight: '600', marginBottom: '8px' }}>$45,760.00</div>
            <div style={{ fontSize: '14px', opacity: 0.8 }}>AAPL, TSLA, AMD</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={styles.quickActions}>
          {quickActions.map(({ icon: Icon, label, color }) => (
            <button key={label} style={styles.actionButton}>
              <div style={{ ...styles.iconContainer, background: color }}>
                <Icon size={24} color="white" />
              </div>
              <span style={{ fontSize: '14px' }}>{label}</span>
            </button>
          ))}
        </div>

        {/* Spending Analytics */}
        <div style={styles.section}>
          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '24px' }}>Spending Analytics</h3>
          
          {/* Dynamic Graph Controls */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', alignItems: 'center' }}>
            <div>
              <label style={{ marginRight: '12px', fontSize: '14px' }}>Select View:</label>
              <select
                onChange={(e) => setGraphView(e.target.value)}
                style={{
                  background: '#1f2937',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '8px 12px',
                }}
              >
                <option value="combined">Combined View</option>
                <option value="cryptoInvestments">Crypto Investments Only</option>
                <option value="stocksETFs">Stocks and ETFs Only</option>
              </select>
            </div>
          </div>

          {/* Graph */}
          <div style={{ height: '200px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={dynamicChartData}
                animationDuration={800}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                <XAxis
                  dataKey="month"
                  stroke="rgba(255, 255, 255, 0.7)"
                  style={{ fontSize: '12px' }}
                />
                <YAxis
                  stroke="rgba(255, 255, 255, 0.7)"
                  style={{ fontSize: '12px' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: 'none',
                    borderRadius: '8px',
                    color: 'white',
                  }}
                  formatter={(value, name) => {
                    const newName = name === 'investments' ? 'Crypto Investments' : 'Stocks & ETFs';
                    return [value, newName];
                  }}
                />
                {graphView !== 'stocksETFs' && (
                  <Bar
                    dataKey="investments"
                    fill="rgb(37, 99, 235)"
                    animationDuration={800}
                    radius={[5, 5, 0, 0]}
                    barSize={20}
                  />
                )}
                {graphView !== 'investments' && (
                  <Bar
                    dataKey="spending"
                    fill="rgb(173, 216, 230)"
                    animationDuration={800}
                    radius={[5, 5, 0, 0]}
                    barSize={20}
                  />
                )}
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Transactions Section */}
        <div style={{ ...styles.section }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '24px'
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: '600' }}>Recent Transactions</h3>
            <button style={{
              background: '#2A2A3C',
              border: 'none',
              borderRadius: '8px',
              padding: '8px 16px',
              color: 'white',
              fontSize: '14px',
              cursor: 'pointer'
            }}>
              View All
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { 
                name: '1.31 DOGE → NVDA Stocks', 
                amount: '-1.31 DOGE', 
                type: 'crypto', 
                date: 'Today',
                icon: <Bitcoin size={20} />,
                color: 'rgb(37, 99, 235)'
              },
              { 
                name: 'Bought EEG merch', 
                amount: '-$25.00', 
                type: 'money',
                date: 'Today',
                icon: <Wallet size={20} />,
                color: 'rgb(239, 68, 68)'
              },
              { 
                name: 'Sent 0.05 ETH → Nathan Chong', 
                amount: '-Ξ0.05', 
                type: 'crypto',
                date: 'Yesterday',
                icon: <Globe size={20} />,
                color: 'rgb(124, 58, 237)'
              },
              { 
                name: 'Received RIZZLER Meme Coin from Andrew Berube', 
                amount: '+10,000 RIZZLER', 
                type: 'crypto',
                date: '2 days ago',
                icon: <TrendingUp size={20} />,
                color: 'rgb(34, 197, 94)'
              },
              { 
                name: 'Used 0.01 BTC to Buy TSLA Stocks', 
                amount: '-0.01', 
                type: 'crypto',
                date: '3 days ago',
                icon: <Bitcoin size={20} />,
                color: 'rgb(234, 179, 8)'
              },
              { 
                name: '0.3 AVAX → AMD Stocks', 
                amount: '-0.3 AVAX', 
                type: 'crypto',
                date: '4 days ago',
                icon: <BarChart2 size={20} />,
                color: 'rgb(5, 150, 105)'
              },
              { 
                name: 'Received 0.2 SOL from Evan Liu', 
                amount: '+0.2 SOL', 
                type: 'crypto',
                date: '5 days ago',
                icon: <TrendingUp size={20} />,
                color: 'rgb(37, 99, 235)'
              }
            ].map((transaction, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '16px',
                  background: '#1A1A27',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, background 0.2s',
                  ':hover': {
                    transform: 'translateY(-2px)',
                    background: '#22222F'
                  }
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: `${transaction.color}20`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: transaction.color,
                  marginRight: '16px'
                }}>
                  {transaction.icon}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ 
                    fontSize: '16px', 
                    fontWeight: '500',
                    marginBottom: '4px'
                  }}>
                    {transaction.name}
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{
                    fontSize: '16px',
                    fontWeight: '500',
                    color: transaction.amount.startsWith('-') ? 
                      'rgb(239, 68, 68)' : 'rgb(34, 197, 94)',
                    marginBottom: '4px'
                  }}>
                    {transaction.amount}
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.5)'
                  }}>
                    {transaction.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Buy Modal */}
      {showBuyModal && (
        <>
          <div style={styles.overlay} onClick={() => setShowBuyModal(false)} />
          <div style={styles.modal}>
            <h2>Buy {selectedCrypto.symbol}</h2>
            <p>Current Price: ${selectedCrypto.currentPrice}</p>

            <h3>Select Payment Method</h3>
            {paymentMethods.map((method) => (
              <button
                key={method.symbol}
                onClick={() => setSelectedPaymentMethod(method)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '12px',
                  background: selectedPaymentMethod?.symbol === method.symbol ? 'rgb(37, 99, 235)' : '#252536',
                  color: 'white',
                  border: '1px solid #2563eb',
                  borderRadius: '8px',
                  width: '100%',
                  marginBottom: '8px',
                  cursor: 'pointer',
                }}
              >
                <span>{method.name}</span>
                <span>{method.usdValue}</span>
              </button>
            ))}

            <button style={styles.button} onClick={finalizeOrder}>
              Finalize Order
            </button>
          </div>
        </>
      )}

      {/* Signup Form */}
      {showSignup && (
        <>
          <div style={styles.overlay} onClick={() => setShowSignup(false)} />
          <div style={styles.modal}>
            <h2>Sign Up</h2>
            <p>Enter your email to complete the purchase:</p>
            <input type="email" placeholder="Email" style={styles.input} />
            <button style={styles.button}>Submit</button>
          </div>
        </>
      )}
    </div>
  );
};

export default BankingDashboard;


