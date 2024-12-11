import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/header.css';


const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
  };
  return (
    <header>
      <nav style={{ display: 'flex',justifyContent: 'space-between', alignItems: 'center', padding: '10px'}}>
        <div>
          <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
          <Link to="/products" style={{ margin: '0 10px' }}>Products</Link>
          <Link to="/about" style={{ margin: '0 10px' }}>About</Link>
          <Link to="/contact" style={{ margin: '0 10px' }}>Contact</Link>
          <Link to="/signup" style={{ margin: '0 10px' }}>SignUp</Link>
          </div>

          {/* Search Bar */}
        <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              padding: '5px',
              fontSize: '16px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              marginRight: '10px',
            }}
          />
          <button
            type="submit"
            style={{
              padding: '5px 10px',
              fontSize: '16px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#007bff',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            Search
          </button>
        </form>
      </nav>
    </header>
  );
};

export default Header;