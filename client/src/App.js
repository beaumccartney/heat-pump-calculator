import React from 'react';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import { Home } from './components/home/Home';
import { Step1 } from './components/calculator/Step1';
import './App.css'; // Your App specific styles

const STEP1 = 'step1';
const HOME = 'HOME';

const PageSwitcher = ({ page }) => {
  let PageToRender;
  switch(page) {
    case STEP1:
      PageToRender = Step1;
      break;
    case HOME:
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
        <button onClick={() => setCurrentPage(HOME)}>Home</button>
        <button onClick={() => setCurrentPage(STEP1)}>Step 1</button>
        <PageSwitcher page={currentPage}/>
      </div>
    </div>
  );
}

export default App;

