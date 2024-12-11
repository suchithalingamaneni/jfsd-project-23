import React from 'react';
import about2 from '../assets/about2.png';

const Home = () => {
  return (
    <div style={{
      margin: 0, 
      padding: 0, 
      fontFamily: 'Arial, sans-serif', 
      backgroundImage: `url(${about2})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat', 
      height: '100vh',
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'flex-start', 
      alignItems: 'center', 
    }}>
      <h1 style={{ marginTop: '20px', fontSize: '2.5rem', fontWeight: 'bold' }}>Welcome to the World of Handloom Masterpieces</h1>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold'}}>Connecting you to amazing products</h2>
      </div>
    
  );
};

export default Home;
