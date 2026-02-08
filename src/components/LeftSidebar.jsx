import React, { useState } from 'react';
import { sidebarItems, currentUser } from '../data/facebookData';
import './LeftSidebar.css';

const LeftSidebar = () => {
  const [showMore, setShowMore] = useState(false);

  const getIconEmoji = (label) => {
    const iconMap = {
      'Meta AI': '🤖',
      'Friends': '👥',
      'Memories': '📸',
      'Saved': '🔖',
      'Groups': '👫',
      'Reels': '🎬',
      'Marketplace': '🛒',
      'Feeds': '📰',
      'Events': '🎉',
    };
    return iconMap[label] || '📌';
  };

  const displayedItems = showMore ? sidebarItems : sidebarItems.slice(0, 6);

  return (
    <aside className="left-sidebar">
      <div className="sidebar-scroll">
        {/* User Profile Section */}
        <div className="user-profile">
          <img src={currentUser.avatar} alt={currentUser.name} className="user-avatar" />
          <span className="user-name">{currentUser.name}</span>
          {currentUser.online && <span className="online-indicator"></span>}
        </div>

        {/* Sidebar Items */}
        <nav className="sidebar-nav">
          {displayedItems.map((item) => (
            <button
              key={item.id}
              className="sidebar-item"
              aria-label={item.label}
            >
              <span className="sidebar-icon">{getIconEmoji(item.label)}</span>
              <span className="sidebar-label">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* See More Button */}
        {!showMore && sidebarItems.length > 6 && (
          <button
            className="see-more-btn"
            onClick={() => setShowMore(true)}
            aria-expanded={showMore}
          >
            <span className="see-more-icon">▼</span>
            <span>See more</span>
          </button>
        )}

        {showMore && sidebarItems.length > 6 && (
          <button
            className="see-more-btn"
            onClick={() => setShowMore(false)}
            aria-expanded={showMore}
          >
            <span className="see-more-icon">▲</span>
            <span>See less</span>
          </button>
        )}
      </div>
    </aside>
  );
};

export default LeftSidebar;
