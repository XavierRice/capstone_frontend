import React from 'react';
import { useAuthDataProvider } from './AuthProv'; 

function Logout() {
    const { logout } = useAuthDataProvider();
  
    const handleLogout = () => {
      logout(); // Call the logout function
    };
  
    return (
      <button onClick={handleLogout}>Logout</button>
    );
  }
  
  export default Logout;