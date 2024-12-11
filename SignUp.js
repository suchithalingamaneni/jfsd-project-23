import React, { useState } from 'react';
import axios from 'axios'; 
import { Navigate, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate =useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    const userData = { name, email, password };

    try {
      const response = await axios.post('http://localhost:9090/api/users/register', userData);
      if (response.status === 201) {
        alert('Sign Up successful!');
        console.log('Response:', response.data);
        // Optionally, clear form fields
        setName('');
        setEmail('');
        setPassword('');
        navigate(`/`);
      }
    } catch (error) {
      console.error('Error signing up:', error);
      
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '20px',
      boxSizing: 'border-box',
      color: '#fff',
    }}>
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)', 
        borderRadius: '8px',
        padding: '30px',
        width: '400px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}>
        <h2 style={{ textAlign: 'center' }}>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div style={{ marginBottom: '15px' }}>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #ccc',
              }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #ccc',
              }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #ccc',
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: '#ff9800',
              color: '#fff',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
