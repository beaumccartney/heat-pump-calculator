import React from 'react';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import { Home } from './components/home/Home';
import './App.css'; // Your App specific styles\
import CustomComponents from './components/common/CustomComponents';
import { Pages } from './components/pages/Pages';

function App() {
  const username = "Liam";

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header username = {username}/>
        <Pages/>
      </div>
    </div>
  );
}

export default App;

