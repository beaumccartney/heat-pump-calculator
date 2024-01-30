import React from 'react';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import { Home } from './components/home/Home';
import { Step1 } from './components/calculator/Step1';
import './App.css'; // Your App specific styles

const PageSwitcher = ({ page }) => {
  let PageToRender;
  switch(page) {
    case 'step1':
      PageToRender = Step1;
      break;
    case 'home':
      PageToRender = Home;
      break;
    default:
      PageToRender = Home;
  };

  return (
    <PageToRender />
  );
}

function App() {
  const username = "Liam";

  // usestate for current page
  const [currentPage, setCurrentPage] = React.useState('step1');

  return (
    <div className="app-container">
      <Sidebar setCurrentPage={setCurrentPage}/>
      <div className="main-content">
        <Header username={username} />
        <button onClick={() => setCurrentPage('home')}>Home</button>
        <button onClick={() => setCurrentPage('step1')}>Step 1</button>
        <PageSwitcher page={currentPage}/>
      </div>
    </div>
  );
}

export default App;

