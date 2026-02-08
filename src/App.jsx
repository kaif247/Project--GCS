import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContext';

import Stories from './pages/Stories';

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <UserProvider>
          <Router>
            <Navbar />
            <div style={{ display: 'flex', minHeight: '100vh' }}>
              <Sidebar />
              <main style={{ flex: 1 }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/friends" element={<Friends />} />
                  <Route path="/groups" element={<Groups />} />
                  <Route path="/marketplace" element={<Marketplace />} />
                  <Route path="/watch" element={<Watch />} />
                  <Route path="/reels" element={<Reels />} />
                  <Route path="/stories" element={<Stories />} />
                  <Route path="/notifications" element={<Notifications />} />
                  <Route path="/saved" element={<Saved />} />
                  <Route path="/memories" element={<Memories />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </main>
            </div>
          </Router>
        </UserProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
