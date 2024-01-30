import React from 'react';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import { Home } from './components/home/Home';
import { Step1 } from './components/calculator/Step1';
import './App.css'; // Your App specific styles

function App() {
  const username = "Liam";

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header username={username} />
        <Step1 />
      </div>
    </div>
  );
}

export default App;

