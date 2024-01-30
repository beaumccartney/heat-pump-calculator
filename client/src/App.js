import React from 'react';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import { Home } from './components/home/Home';
import { Step1 } from './components/calculator/Step1';
import './App.css'; // Your App specific styles

function mapPageToComponent(page) {
  switch(page) {
    case 'step1':
      return <Step1 />;
    case 'home':
      return <Home />;
  }
}

function App() {
  const username = "Liam";

  // usestate for current page
  const [currentPage, setCurrentPage] = React.useState('step1');

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header username={username} />
        {mapPageToComponent(currentPage)}
      </div>
    </div>
  );
}

export default App;

