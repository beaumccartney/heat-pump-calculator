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

function Sidebar() {

  const [clicked, setClicked] = useState(null);

  const handleClick = (item) => {
    setClicked(item);
  };


  return (
    <div className="sidebar">
  {/* Top Items */}
  <div className={`sidebar-item ${clicked === 'menu' ? 'clicked' : ''}`} onClick={() => handleClick('menu')}>
    <a href='/dashboard'>
      <img src={clicked === 'menu' ? MenuIconClicked : MenuIcon} alt="Menu" />
    </a>
  </div>
  <div className={`sidebar-item ${clicked === 'search' ? 'clicked' : ''}`} onClick={() => handleClick('search')}>
    <a href='/intro'>
      <img src={clicked === 'search' ? SearchIconClicked : SearchIcon} alt="Search" />
    </a>
  </div>
  {/* Spacer to push the rest to the bottom */}
  <div className="sidebar-spacer"></div>
  {/* Bottom Items */}
  <div className={`sidebar-item ${clicked === 'settings' ? 'clicked' : ''}`} onClick={() => handleClick('settings')}>
    <a href = "/settings">
      <img src={clicked === 'settings' ? SettingsIconClicked : SettingsIcon} alt="Settings" />
    </a>
  </div>
</div>

  );
}

export default Sidebar;