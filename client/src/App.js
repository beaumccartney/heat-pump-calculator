import React from 'react';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import { Home } from './components/home/Home';
import './App.css'; // Your App specific styles

function App() {
  const username = "Liam";

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header username={username} />
        <Home /> 
      </div>
    </div>
  );
}

export default App;

