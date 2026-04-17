import React from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Lock, UserPlus } from 'lucide-react';

const Register = () => {
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
          <h1 className="gradient-text">Create Account</h1>
          <p>Join us to unlock premium features</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="premium-input-group">
            <input 
              type="text" 
              className="premium-input" 
              placeholder="Full Name" 
              required 
            />
            <User className="input-icon" size={20} />
          </div>

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
          
          <div className="premium-input-group">
            <input 
              type="password" 
              className="premium-input" 
              placeholder="Confirm Password" 
              required 
            />
            <Lock className="input-icon" size={20} />
          </div>

          <button type="submit" className="premium-button" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
            Sign Up <UserPlus size={20} />
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--text-muted)' }}>
          Already have an account? <Link to="/login" className="auth-link">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
