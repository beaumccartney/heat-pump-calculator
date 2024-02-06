import React from 'react';
import './Header.css'; // Make sure to create a corresponding CSS file

function Header({ userName }) {
  return (
    <div className="header">
      <div className="header-profile">
        <div className="header-profile-name">Liam</div>
        <div className="header-profile-icon">▼</div>
      </div>
    </div>
  );
}

export default Header;
