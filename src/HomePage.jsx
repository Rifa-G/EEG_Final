import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (email) {
        
      try {
        const response = await fetch('https://logtodatabase-rgzyvy3rca-uc.a.run.app', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: 'Neobank Waitlist',
            content: `Waitlist signup email: ${email}`,
          }),
        });
        const result = await response.text();
        console.log('Waitlist email logged:', result);
        setStatus('success');
        setEmail('');
      } catch (error) {
        console.error('Error logging email:', error);
        setStatus('error');
      }
    } else {
      setStatus('error');
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>
          Welcome to <span style={styles.highlight}>Nexus Neobank</span>
        </h1>
        <p style={styles.subtitle}>
          All your <span style={styles.highlight}>centralized</span> and <span style={styles.highlight}>decentralized</span> finances in one seamless ecosystem.
          Effortlessly buy stocks directly with crypto. <span style={styles.highlight}>No transaction fees</span>, ever.
        </p>
      </header>
      <div style={styles.actions}>
        <button style={styles.demoButton} onClick={() => navigate('/dashboard')}>
          Demo the Platform
        </button>
      </div>
      <form style={styles.waitlistForm} onSubmit={handleEmailSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email to join the waitlist"
          style={styles.input}
          required
        />
        <button type="submit" style={styles.submitButton}>Join the Waitlist</button>
      </form>
      {status === 'success' && (
        <p style={styles.successMessage}>
          Thank you! You've joined the waitlist.
        </p>
      )}
      {status === 'error' && (
        <p style={styles.errorMessage}>
          Please enter a valid email.
        </p>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    width: '100%',
    background: 'black',
    color: '#ffffff',
    textAlign: 'center',
    padding: '20px',
    boxSizing: 'border-box',
  },
  header: {
    marginBottom: '40px',
    width: '100%',
  },
  title: {
    fontSize: '3rem',
    fontWeight: '700',
    marginBottom: '16px',
  },
  subtitle: {
    fontSize: '1.5rem',
    lineHeight: '1.6',
    maxWidth: '80%',
    margin: '0 auto',
  },
  highlight: {
    color: '#2563eb',
    fontWeight: '700',
  },
  actions: {
    marginBottom: '40px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '20px',
    width: '100%',
  },
  demoButton: {
    padding: '12px 24px',
    backgroundColor: '#2563eb',
    color: '#000000',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  demoButtonHover: { backgroundColor: '#1e40af' },
  waitlistForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    width: '100%',
    maxWidth: '400px',
  },
  input: {
    padding: '12px',
    border: '2px solid #2563eb',
    borderRadius: '8px',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s',
    width: '100%',
  },
  submitButton: {
    padding: '12px',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background 0.3s',
    width: '100%',
  },
  successMessage: {
    color: '#10b981',
    fontWeight: '600',
    marginTop: '16px',
  },
  errorMessage: {
    color: '#ef4444',
    fontWeight: '600',
    marginTop: '16px',
  },
};

export default HomePage;
