import React from 'react';
import { useLocation } from 'react-router-dom';

const AdminDashboard = () => {
  const location = useLocation();
  const email = location.state?.email || 'Admin'; // Retrieve email from state

  return (
    <div>
      <h2>Welcome to the Admin Dashboard, {email}!</h2>
      {/* Add more admin-specific content here */}
    </div>
  );
};

export default AdminDashboard;
