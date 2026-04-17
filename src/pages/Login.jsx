import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, LogIn } from 'lucide-react';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Intended future logic here
  };

  return (
    <div className="auth-container">
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>
      
      <div className="glass-card" style={{ width: '100%', maxWidth: '480px', padding: '3rem 2rem' }}>
        <div className="auth-form-header">
          <h1 className="gradient-text">Welcome Back</h1>
          <p>Enter your details to access your account</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="premium-input-group">
            <input 
              type="email" 
              className="premium-input" 
              placeholder="Email address" 
              required 
            />
            <Mail className="input-icon" size={20} />
          </div>

          <div className="premium-input-group">
            <input 
              type="password" 
              className="premium-input" 
              placeholder="Password" 
              required 
            />
            <Lock className="input-icon" size={20} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', color: 'var(--text-muted)', fontSize: '0.9rem', cursor: 'pointer' }}>
              <input type="checkbox" style={{ marginRight: '0.5rem', accentColor: 'var(--primary)' }} />
              Remember me
            </label>
            <a href="#" className="auth-link" style={{ fontSize: '0.9rem' }}>Forgot Password?</a>
          </div>

          <button type="submit" className="premium-button" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            Sign In <LogIn size={20} />
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--text-muted)' }}>
          Don't have an account? <Link to="/register" className="auth-link">Create one</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
