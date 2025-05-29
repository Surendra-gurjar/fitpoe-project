import React from 'react';
import './Header.css';
import { FiSearch, FiBell, FiPlus } from 'react-icons/fi';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="app-title">Healthcare.</h1>
      </div>
      <div className="header-center">
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
      </div>
      <div className="header-right">
        <button className="add-button">
          <FiPlus />
        </button>
        <div className="notification-icon">
          <FiBell />
          <span className="notification-badge">3</span>
        </div>
        <div className="user-profile">
          <img 
            src="https://randomuser.me/api/portraits/women/44.jpg" 
            alt="User" 
            className="user-avatar"
          />
          <span className="user-name">Dr. Sarah Johnson</span>
        </div>
      </div>
    </header>
  );
}

export default Header;