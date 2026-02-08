import React from 'react';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import LeftSidebar from './components/LeftSidebar';
import Feed from './components/Feed';
import RightSidebar from './components/RightSidebar';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <div className="app-container">
          <LeftSidebar />
          <Feed />
          <RightSidebar />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;


