import React from 'react';
import './styles/App.css'; // Import the CSS file for styles
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Auth from './components/Auth'; // Unified authentication component for login/signup
import UserDashboard from './pages/UserDashboard'; // User dashboard component
import AdminDashboard from './pages/AdminDashboard'; // Admin dashboard component
import Header from './components/Header';
import Footer from './components/Footer';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <div>
      <div className="background"></div> {/* Background image */}
      <div className="overlay"></div> {/* Optional overlay for readability */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} /> {/* Route for Auth component */}
        <Route path="/user-dashboard" element={<UserDashboard />} /> {/* User Dashboard */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} /> {/* Admin Dashboard */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
