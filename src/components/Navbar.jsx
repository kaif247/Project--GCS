import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [notificationCount] = useState(3);
  const [messageCount] = useState(1);

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠', isActive: true },
    { id: 'watch', label: 'Watch', icon: '📺', isActive: false },
    { id: 'marketplace', label: 'Marketplace', icon: '🛒', isActive: false },
    { id: 'groups', label: 'Groups', icon: '👥', isActive: false },
    { id: 'gaming', label: 'Gaming', icon: '🎮', isActive: false },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left Section */}
        <div className="navbar-left">
          <div className="navbar-logo">
            <svg
              viewBox="0 0 24 24"
              width="40"
              height="40"
              fill="#1877F2"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Facebook"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </div>

          <div className={`navbar-search ${isSearchFocused ? 'focused' : ''}`}>
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search Facebook"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              aria-label="Search Facebook"
            />
          </div>
        </div>

        {/* Center Section - Navigation */}
        <div className="navbar-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${item.isActive ? 'active' : ''}`}
              aria-label={item.label}
              aria-current={item.isActive ? 'page' : undefined}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>

        {/* Right Section - Icons */}
        <div className="navbar-right">
          <button
            className="navbar-icon-btn"
            aria-label="Menu"
            title="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <rect x="2" y="2" width="5" height="5" />
              <rect x="9" y="2" width="5" height="5" />
              <rect x="16" y="2" width="5" height="5" />
              <rect x="2" y="9" width="5" height="5" />
              <rect x="9" y="9" width="5" height="5" />
              <rect x="16" y="9" width="5" height="5" />
              <rect x="2" y="16" width="5" height="5" />
              <rect x="9" y="16" width="5" height="5" />
              <rect x="16" y="16" width="5" height="5" />
            </svg>
          </button>

          <button
            className="navbar-icon-btn notification-btn"
            aria-label="Messenger"
            title="Messenger"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
            </svg>
            {messageCount > 0 && <span className="badge">{messageCount}</span>}
          </button>

          <button
            className="navbar-icon-btn notification-btn"
            aria-label="Notifications"
            title="Notifications"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
            </svg>
            {notificationCount > 0 && (
              <span className="badge notification-badge">{notificationCount}</span>
            )}
          </button>

          <button
            className="navbar-icon-btn profile-btn"
            aria-label="User profile"
            title="User profile"
          >
            <img
              src="https://i.pravatar.cc/150?img=1"
              alt="Profile"
              className="profile-avatar"
            />
          </button>

          <button
            className="navbar-icon-btn theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            title={isDarkMode ? 'Light mode' : 'Dark mode'}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
