import React, {useState} from 'react';
import './Sidebar.css'; // Make sure to create a corresponding CSS file

// Assuming you have SVG icons or icon components ready to use
import MenuIcon from '../assets/images/Dashboard-I.png';
import MenuIconClicked from '../assets/images/DashboardDark-I.png';
import SearchIcon from '../assets/images/SearchDark-I.png';
import SearchIconClicked from '../assets/images/Search-I.png';
import SettingsIcon from '../assets/images/Settings-I.png';
import SettingsIconClicked from '../assets/images/SettingsWhite-I.jpg';
import ChatIcon from '../assets/images/Chat-I.png';
import ChatIconClicked from '../assets/images/ChatWhite-I.jpg';

function Sidebar({ setCurrentPage }) {

  const [clicked, setClicked] = useState(null);

  const handleClick = (item) => {
    setClicked(item);
  };


  return (
    <div className="sidebar">
      <div className={`sidebar-item ${clicked === 'menu' ? 'clicked' : ''}`} onClick={
        () => {
          handleClick('menu')
          setCurrentPage('home')
        }
      }>
        <img src={clicked === 'menu' ? MenuIconClicked : MenuIcon} alt="Menu" />
      </div>
      <div className={`sidebar-item ${clicked === 'search' ? 'clicked' : ''}`} onClick={
        () => {
          handleClick('search')
          setCurrentPage('step1')
        }
      }>
        <img src={clicked === 'search' ? SearchIconClicked : SearchIcon} alt="Search" />
      </div>
      <div>
      <img src={ChatIcon} alt="Chat" />
      </div>
      <div className="sidebar-spacer"></div>
      <div>
      <img src={SettingsIcon} alt="Settings" />
      </div>

      {/*The below code is to be used when we have the icons for white version of these*/}

      
      {/* <div className={`sidebar-item ${clicked === 'chat' ? 'clicked' : ''}`} onClick={() => handleClick('chat')}>
        <img src={clicked === 'chat' ? ChatIconClicked : ChatIcon} alt="Chat" />
      </div>
      <div className="sidebar-spacer"></div>
      <div className={`sidebar-item ${clicked === 'settings' ? 'clicked' : ''}`} onClick={() => handleClick('settings')}>
        <img src={clicked === 'settings' ? SettingsIconClicked : SettingsIcon} alt="Settings" />
      </div> */}
    </div>
  );
}

export default Sidebar;
